const asyncHandler = require('express-async-handler');
const Heroes = require('../models/heroModels');

const getAllHeroes = asyncHandler(async (req, res) => {
    const heroData = await Heroes.find();
    // console.log(heroData)
    res.send(heroData);
})

module.exports = getAllHeroes;