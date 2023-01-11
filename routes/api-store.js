var express = require('express');
var app = express.Router();
const { getStore, addStore, deleteStore } = require('../services/storeData');


app.get('/', (req, res, next) => {
    res.send(getStore());
});

app.post('/', (req, res, next) => {
    addStore(req.body);
    // let rec = req.body;
    // obj.push(rec);
    res.send({status: 'ok', msg: 'data added succesfully'});
});


app.delete('/', (req, res, next) => {
    deleteStore(req.body.id);
    res.send({status: 'ok', msg: 'deleted succesfully'});
})

module.exports = app;