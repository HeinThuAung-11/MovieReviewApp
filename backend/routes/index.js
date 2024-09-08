var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('/ index route updated');
  res.render('index', { title: 'Express updated' });
});

module.exports = router;
