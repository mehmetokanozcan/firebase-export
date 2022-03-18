var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  // res.render('index', { title: 'Express' });
  res.send('Firebase Export');
  res.end()
});

module.exports = router;
