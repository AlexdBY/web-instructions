const express = require('express');
const router = express.Router();
const models = require('../models');

router.post('/auth', (req, res) => {
    var role, social;
    var userData = {};
    models.roles.findOne({ where: { name: 'user' } })

    .then(result =>{
        role = result;
        return models.socials.findOne({ where: { name: req.body.social } });
    })

    .then(result => {
        social = result;
        return models.users.findOrCreate({
                where: { username: req.body.username },
                defaults: {
                    username: req.body.username,
                    imageUrl: req.body.imageUrl,
                    createdAt: req.body.createdAt,
                    roleId: role.id,
                    socialId: social.id
                }
            })
    })

    .then(result => {
        userData.id = result[0].dataValues.id;
        return models.roles.findOne({where: { id: result[0].dataValues.roleId }});
    })

    .then(result =>{
        userData.role = result.name;
        res.status(200).json(userData);
    });
});



module.exports = router;