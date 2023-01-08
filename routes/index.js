var express = require('express');
var router = express.Router();

const dude = require('../public/javascripts/singin.json')

// const __dirname = require('../public/javascripts/singin.json');


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send(index);
  res.render('index', { title: 'TV Channel' });
});

router.get('/movies', function(req, res, next) {

  console.log(req.query);
  res.render('movies', { title: 'Movies', qs: req.query });
});

router.get('/store', function(req, res, next) {
  console.log(req.url);
  res.render('store', { title: 'Store', data: 'store', qs: req.query  });
});

router.get('/store/add_products', function(req, res, next) {
  
  console.log(req.query);
  res.render('add-products', { title: 'Movies'});
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
  // connection.query('ddd', (err, rows) => {

  // })
  
  // fs.readFile(`${__dirname}/public/javascript/singin.json`, 'utf-8', (err, data) => {
  //   const fsData = JSON.parse(data);
  //   res.writeHead(200, {'content-type': 'text/html'})
  //   console.log(fsData);
  //   res.send(data);
  // });


  
});

module.exports = router;
