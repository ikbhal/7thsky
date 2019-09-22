// wiki.js - Wiki route module.

var express = require('express');
var router = express.Router();
//router.use(express.json());

// Home page route.
router.get('/', function (req, res) {
  res.send('Wiki home page');
})

// About page route.
router.post('/about', function (req, res) {
  var test = req.body;
  console.log("test"); console.log(test);
  var code = test.code;
  console.log("code:" + code);
  var stdinput = test.stdinput;
  console.log("stdinput:" + stdinput);
  //res.send('About this wiki');
  var response = {result:"towheed name", error: "no error"};
  res.json(response);
})

module.exports = router;