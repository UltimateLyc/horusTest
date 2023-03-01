const mongoose = require('mongoose')

const horusSchema = mongoose.Schema({
    horusTest: {
        type: Boolean,
        require: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Test', horusSchema)