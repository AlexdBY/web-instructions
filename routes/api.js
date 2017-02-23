const express = require('express');
const router = express.Router();
const database = require('../models');

router.post('/insertUserData', (req, res) => {
database.socials.find({ where: { name:req.body.social }}).then(function(result){
    console.log(result);
});
});


module.exports = router;