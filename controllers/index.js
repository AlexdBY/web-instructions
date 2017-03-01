const models = require('../models');

module.exports.login = function login(req, res) {
    let token = fromHeaderOrQuerystring(req);
    let socialId, roleId;

    models.roles.findOne({ where: { name: 'user' } })
        .then(result => {
            roleId = result.id;
            return models.socials.findOne({ where: { name: req.body.social } });
        })
        .then(result => {
            socialId = result.id;
            return models.users.findOrCreate({
                include: [models.socials, models.roles],
                where: { username: req.body.username },
                defaults: {
                    username: req.body.username,
                    imageUrl: req.body.imageUrl,
                    createdAt: req.body.createdAt,
                    jwt: token,
                    roleId: roleId,
                    socialId: socialId
                }
            })
        })
        .then(result => {
            if (!result[1]) {
                result[0].updateAttributes({ imageUrl: req.body.imageUrl, jwt: token },
                    { include: [models.socials, models.roles] })
                    .then(result => {
                        res.status(200).json({
                            "role": result.dataValues.role.dataValues.name
                        });
                    });
            }
            else {
                res.status(200).json({
                    "role": 'user'
                });
            }
        });
}

module.exports.getAuthInfo = function (req, res) {
    let token = fromHeaderOrQuerystring(req);
    let userObject;
    models.users.findOne({ where: { jwt: token }, include: [models.roles, models.socials] })
        .then(result => {
            userObject = {
                username: result.dataValues.username,
                imageUrl: result.dataValues.imageUrl,
                createdAt: result.dataValues.createdAt,
                authId: null,
                social: result.dataValues.social.dataValues.name,
                role: result.dataValues.role.dataValues.name
            }
            res.status(200).json(userObject);
        });

}


module.exports.getPage = function (req, res) {
    let token = fromHeaderOrQuerystring(req);
    let username = req.params.username;
    let userData = {};
    userData.instructions = [];
    models.users.findOne({
        where: { username: username },
        include: [{ model: models.instructions, include: [models.categories] }]
    })
        .then(result => {
            userData.username = result.username;
            userData.imageUrl = result.imageUrl;
            if (token !== null && token == result.jwt) {
                userData.isYourAccount = true;
            }
            else {
                userData.isYourAccount = false;
            }
            result.instructions.forEach(function (item, i) {
                userData.instructions.push({
                    name: item.dataValues.name,
                    createdAt: item.dataValues.createdAt,
                    category: item.category.name
                })
            })
            res.status(200).json(userData);
        });
}


function fromHeaderOrQuerystring(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    } else if (req.query && req.query.token) {
        return req.query.token;
    }
    return null;
}


        // .then(userResult => {
        //     userData.username = userResult.dataValues.username;
        //     userData.imageUrl = userResult.dataValues.imageUrl;
        //     if (token !== null && token == userResult.dataValues.jwt) {
        //         userData.isYourAccount = true;
        //     }
        //     else {
        //         userData.isYourAccount = false;
        //     }
        //     return models.instructions.findAll({ where: { userId: userResult.dataValues.id }, include:[models.categories] });
        // })
        // .then(instructionsResult => {
        //     // console.log(instructionsResult);
        //     instructionsResult.forEach(function (item, i, instructionsResult) {
        //         userData.instructions.push({
        //             name: item.dataValues.name,
        //             createdAt: item.dataValues.createdAt,
        //         })
        //     });
        //     //console.log(userData.instructions);
        // });

    // userData.instructions = [];
    // models.users.findOne({ where: { username: username } },{include:[models.instructions]})
    //     .then(userResult => {
    //         userData = userResult.dataValues;
    //         console.log(userResult);
    //         return models.instructions.findAll({ where: { userId: userData.id } })
    //     .then(instructionsResult => {
    //         // instructionsResult.forEach(function(value){
    //         //     userData.instructions.push(value.dataValues);
    //         // })
    //         //console.log(instructionsResult);
    //     });
    //     });