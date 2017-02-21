const express = require('express');
const router = express.Router();

const ruRsc = require('./ru');
const enRsc = require('./en');

router.get('/', (req, res) => {
  res.status(404);
});

router.get('/ru.json', (req, res) => {
  res.status(200).json(ruRsc);
});

router.get('/en.json', (req, res) => {
  res.status(200).json(enRsc);
});


module.exports = router;