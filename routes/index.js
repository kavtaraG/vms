var express = require('express');
var router = express.Router();
const fs = require('fs');

const singin = require('../public/javascripts/singin.json');
const { getStore, getStoreById  } = require('../services/storeData');

const dataMap = singin.map(el => (singin, el));
const parseData = JSON.parse(JSON.stringify(dataMap));


const dataJSON  = require('../views/partials/temp/temp.json');
const data = JSON.parse(JSON.stringify(dataJSON));



/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send(index);
  res.render('index', { title: 'TV Channel' });
});

router.get('/movies', function(req, res, next) {

  console.log(req.query);
  res.render('movies', { title: 'Movies', qs: req.query });
});
// store rotes
router.get('/store', function(req, res, next) {
  console.log(req.url);
  res.render('store', { title: 'Store', data: getStore(req.body), qs: req.query });
});


router.get('/store/add_products', function(req, res, next) {
  const store = {};
  method = 'POST';
  console.log(req.query);
  res.render('add-products', { title: 'Store', buttonName: 'Add', store, method});
});

router.get('/store/edit/:id', function(req, res, next) {
  const store = getStoreById(req.params.id);
  method='PUT';
  console.log(req.url);
  res.render('add-products', { title: 'Edit', buttonName: 'Update',store, method, qs: req.query });
});

//login routes  
router.get('/login', function(req, res, next) {
  console.log(req.url);
  res.render('login', {  title: 'Login', qs: req.query });
 
});

router.get('/login/sing_in', function(req, res, next) {
  console.log(req.url);
  res.render('singin', { title: 'Sing in' , rows: parseData, city: parseData });
  
});

router.get('/store-test', function(req, res, next) {
  console.log(data)
  console.log(req.url);
  res.render('store-tst', { title: 'Sing in', data: data });
  
});

module.exports = router;
