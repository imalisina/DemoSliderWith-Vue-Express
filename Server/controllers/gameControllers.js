const asyncHandler = require('express-async-handler');
const Games = require('../models/gameModels');

const getAllGames = asyncHandler(async (req, res) => {
    const allGames = await Games.find();
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