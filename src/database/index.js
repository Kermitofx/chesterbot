'use strict'

const mongoose = require('mongoose')

mongoose.connect(mongo "mongodb+srv://cluster0.sbjds.mongodb.net/91597726" --username 91597726, {useNewUrlParser: true, useUnifiedTopology: true}) //substitua "process.env.DB_STRING" pela string de conexão de seu MongoDb

exports.message = mongoose.model('Reply', require('./models/message'))
