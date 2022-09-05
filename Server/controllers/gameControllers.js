const asyncHandler = require('express-async-handler');
const Game = require('../models/gameModels');

const getAllGames = asyncHandler(async (req, res) => {
    const allGames = await Game.find();
    res.json(allGames);
});

const getSingleGame = asyncHandler(async (req, res) => {
    let gameID = req.params.gameId;
    res.send(gameID);
})


module.exports = {
    getAllGames,
    getSingleGame,
};