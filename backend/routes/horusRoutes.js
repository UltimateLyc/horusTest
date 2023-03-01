const express = require('express')
const setHorus = require('../controller/horusController')
const router = express.Router()


router.route('/').post(setHorus)

module.exports = router