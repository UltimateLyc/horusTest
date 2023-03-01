const asyncHandler = require('express-async-handler')

const horus = require('../models/horusModel')

const setHorus = asyncHandler(async(req, res) => {
    const {horusTest} = req.body

    const newHorus = await horus.create({
        horusTest
    })

    res.status(201).json(newHorus)

})

module.exports = setHorus