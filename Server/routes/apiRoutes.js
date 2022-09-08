const express = require('express');
const router = express.Router();

const getAllHeroes = require('../controllers/heroesController');

router.get('/heroes', getAllHeroes);

module.exports = router;