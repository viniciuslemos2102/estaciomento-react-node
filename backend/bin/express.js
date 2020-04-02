const express = require('express');
const mongoose =  require('mongoose')
const app = express();

mongoose.connect('mongodb+srv://parking:abc123df@cluster0-7ap9z.mongodb.net/reactEstacionamento?retryWrites=true&w=majority',
  {useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true})

module.exports = app