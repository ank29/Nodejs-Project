var express = require('express');
var db = require('../config/config');
var router = express.Router();


router.get('/test', function(req, res, next) {
  res.send('testing');
});

/* GET users listing. */
router.get('/', function(req, res) {
  db.query('select * from Users',function(err,result){

    if(err) throw err;
      res.send({data : result });

  });
});
router.get('/:id', function(req, res) {
   var Id= req.params.id;
   db.query('select * from Users where userId = ?',[Id],function(err,result,fields){
     if(err) throw err;
     res.send({data : result });
   });
});

router.post('/', function(req, res) {
   var email= req.body.email;
   var password = req.body.pass;
   db.query('select * from Users where email = ? and password = ?',[email,password],function(err,result,fields){

     if(err) throw err;
     res.send({data : result });
   });
});

module.exports = router;
