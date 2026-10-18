const express = require('express');
const app = express()
require('dotenv').config()
const DB = require('./configs/DB');
const helmet = require('helmet');
const hpp = require('hpp');
const RateLimited = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');

DB();

app.use(helmet())

app.use(cors())

app.use(hpp())

app.use(mongoSanitize())

app.use(RateLimited({
    windowMs: 15 * 60 * 1000,
    limit: 200
}))

app.listen(process.env.PORT,() =>{
    console.log('Server connect')
})
