var express = require('express');
var router = express.Router();
var saveHistory = require('../history/history');

const docDir = '/public_website/docs/'

router.get('/Jason_Ramirez_Resume.pdf', function(req, res){
  res.sendFile(__dirname + docDir + 'Jason_Ramirez_Resume.pdf');
  saveHistory(req, 'resume');
});

router.get('/Ethics_Jason_Ramirez.pdf', function(req, res){
  res.sendFile(__dirname + docDir + 'Ethics_Jason_Ramirez.pdf');
  saveHistory(req, 'ethics');
});

router.get('/Cumulative_Reflection.pdf', function(req, res){
  res.sendFile(__dirname + docDir + 'Cumulative_Reflection.pdf');
  saveHistory(req, 'ethics');
});

router.get('/General_Education_Reflection.pdf', function(req, res){
  res.sendFile(__dirname + docDir + 'General_Education_Reflection.pdf');
  saveHistory(req, 'ethics');
});

module.exports = router;
