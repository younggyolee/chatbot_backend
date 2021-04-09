var express = require('express');
var router = express.Router();

/* GET home page. */
console.log('hello')
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/privacy', function(req, res, next) {
  res.render('get_it_done_timer_privacy');
});

module.exports = router;
