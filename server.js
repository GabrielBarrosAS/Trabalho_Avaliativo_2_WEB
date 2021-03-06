const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const app = express()

mongoose.connect('mongodb://localhost:27017/trabalhoavaliativo2',{useNewUrlParser: true, useUnifiedTopology: true})
app.use(express.json())

requireDir('./src/models/')

app.use('/api',require("./src/routes"))

app.listen(3001)