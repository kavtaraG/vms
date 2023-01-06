var express = require('express');
var router = express.Router();

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
  res.render('movies', { title: 'Movies', qs: req.query});
});


router.get('/store', function(req, res, next) {
  console.log(req.url);
  res.render('store', { title: 'Store', qs: req.query  });
});

router.get('/login', function(req, res, next) {
  console.log(req.url);
  res.render('login', {  title: 'Login', qs: req.query });
  // let pathUrl = req.url;
  // if(pathUrl === '/login'){
  //   res.render('login', {  title: 'Login', qs: req.query });
  // } else {
  //   next();
  // };
});

router.get('/login/sing_in', function(req, res, next) {
  console.log(req.url);
  res.render('singin', { title: 'Sing in', data: req.query });
});

module.exports = router;
