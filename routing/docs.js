var express = require('express');
var router = express.Router();
var saveHistory = require('../history/history');

router.get('/Jason_Ramirez_Resume.pdf', function(req, res){
  res.sendFile(__dirname + '/public_website/docs/Jason_Ramirez_Resume.pdf');
  saveHistory(req, 'resume');
});

router.get('/Ethics_Jason_Ramirez.pdf', function(req, res){
  res.sendFile(__dirname + '/public_website/docs/Ethics_Jason_Ramirez.pdf');
  saveHistory(req, 'ethics');
});

module.exports = router;
