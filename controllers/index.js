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
                    "role": result.dataValues.role.dataValues.name
                });
            }
        });
}

module.exports.getAuthInfo = function (req, res) {
    let token = fromHeaderOrQuerystring(req);
    let userObject;
    models.users.findOne({ where: { jwt: token } })
        .then(result => {
            userObject = {
                username: result.dataValues.username,
                imageUrl: result.dataValues.imageUrl,
                createdAt: result.dataValues.createdAt,
                authId: null
            }
            models.socials.findOne({ where: { id: result.dataValues.socialId } })
                .then(socialResult => {
                    userObject.social = socialResult.name;
                    models.roles.findOne({ where: { id: result.dataValues.roleId } })
                        .then(roleResult => {
                            userObject.role = roleResult.name;
                            res.status(200).json(userObject);
                        })
                })
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