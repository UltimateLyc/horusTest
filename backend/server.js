const express = require('express')
const dotenv = require('dotenv').config()
const colors = require('colors')
const connectDB = require('./config/db')

const port = process.env.PORT

connectDB()

const app = express()
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

app.use('/api/horus', require('./routes/horusRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))