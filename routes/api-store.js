var express = require('express');
var app = express.Router();
const obj = require('../public/javascripts/store.json');



app.get('/', (req, res, next) => {
    res.send(obj);
})


module.exports = app;