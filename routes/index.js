var express = require('express');
var router = express.Router();

const singin = require('../public/javascripts/singin.json');
// const store = require('../public/javascripts/store.json');
const { getStore  } = require('../services/storeData');


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
  console.log(req.query);
  res.render('add-products', { title: 'Store', buttonName: 'Add', store: getStore(req.body)});
});

//login routes  
router.get('/login', function(req, res, next) {
  console.log(req.url);
  res.render('login', {  title: 'Login', qs: req.query });
 
});

router.get('/login/sing_in', function(req, res, next) {
  
  console.log(req.url);
  res.render('singin', { title: 'Sing in' , user: singin, });
  
});

module.exports = router;
