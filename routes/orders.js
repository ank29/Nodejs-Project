var express = require('express');
var router = express.Router();
var db = require('../config/config');

router.get('/', function(req, res, next) {
   db.query("select * from orders",function(err,result){
     if(err) throw err;
     res.send({data : result });
   });
});

module.exports = router;
