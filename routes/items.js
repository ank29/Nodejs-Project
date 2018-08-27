var express = require('express');
var router = express.Router();
var db = require('../config/config');

router.get('/', function(req, res, next) {
  db.query("select * from items",function(err,result){
     if(err) throw err;
     res.send({data :result});
  })
});
router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  db.query("select * from items where itemId = ?",[id],function(err,result){
     if(err) throw err;
     res.send({data :result});
  })
});


module.exports = router;
