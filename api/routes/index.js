var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('aaa')
  res.send({ title: 'Express' });
});

module.exports = router;
