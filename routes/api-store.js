var express = require('express');
var app = express.Router();
const obj = require('../public/javascripts/store.json');



app.get('/', (req, res, next) => {
    res.send(obj);
});

app.post('/', (req, res, next) => {
    let rec = req.body;
    obj.push(rec);
    res.send({status: 'ok', msg: 'data added'});
});


module.exports = app;