var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  console.log('req.body.username:: ', req.body.usernme);
  console.log('req.body.password:: ', req.body.password);
  let data = (req.body.usernme === req.body.password);
  if(data && typeof(req.body.username) !== 'undefined' ){
    res.send({status: 'ok', msg: 'loggin sucess'});
  }else{
    res.send({status: 'fail', msg: 'loggin failed'});
  }
});



module.exports = router;
