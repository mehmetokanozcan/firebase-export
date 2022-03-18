var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');

  const x = true;

  if (x) {
    res.send({a: 'sss'});
    res.end()
  } else {
    next({message: 'Hata', status: 422})
  }
});

module.exports = router;
