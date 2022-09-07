const express = require('express');
const router = express.Router();

const { getAllGames,
        getSingleGame } = require('../controllers/gameControllers');

const getAllHeroes = require('../controllers/heroesController');

router.get('/all', getAllGames);
router.get('/single/game/:gameId', getSingleGame);
router.get('/heroes', getAllHeroes);

module.exports = router;