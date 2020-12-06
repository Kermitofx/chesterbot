'use strict'

const mongoose = require('mongoose')

mongoose.connect(mongodb+srv://91597726:91597726@cluster0.sbjds.mongodb.net/test, {useNewUrlParser: true, useUnifiedTopology: true}) //substitua "process.env.DB_STRING" pela string de conexão de seu MongoDb

exports.message = mongoose.model('Reply', require('./models/message'))
