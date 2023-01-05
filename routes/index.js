var express = require('express');
var router = express.Router();

const url = require('url');

var parseUrl = 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TV Channel' });
});

router.get('/movies', function(req, res, next) {
  
  console.log(req.query);
  res.render('movies', { title: 'Movies', qs: req.query });
});

router.get('/movies/search/', function(req, res, next) {
  
  console.log(req.query);
  res.render('movies', { title: 'Movies', qs: req.query });
});


router.get('/store', function(req, res, next) {
  console.log(req.query);
  res.render('store', { title: 'Store', qa: req.query  });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login' });
});

router.get('/login/sing_in', function(req, res, next) {
  res.render('singin', { title: 'Sing in' });
});

module.exports = router;
