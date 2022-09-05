const express = require('express');
const router = express.Router();

const { getAllGames,
        getSingleGame } = require('../controllers/gameControllers');

router.get('/all', getAllGames);

router.get('/single/game/:gameId', getSingleGame);

module.exports = router;