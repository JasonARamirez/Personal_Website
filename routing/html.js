var express = require('express');
var router = express.Router();
var folder = __dirname + '/public_website/html/';
var saveHistory = require('../history/history');

router.get('/', function(req, res){
    res.sendFile(folder + 'index.html');
});

router.get('/home_view.html', function(req, res){
  res.sendFile(folder + 'home_view.html');
  saveHistory(req, 'home');
});

router.get('/profile_view.html', function(req, res){
  res.sendFile(folder + 'profile_view.html');
  saveHistory(req, 'profile');
});

router.get('/projects_view.html', function(req, res){
  res.sendFile(folder + 'projects_view.html');
  saveHistory(req, 'projects');
});

router.get('/seniorDesign_view.html', function(req, res){
  res.sendFile(folder + 'seniorDesign_view.html');
  saveHistory(req, 'seniorDesign');
});

router.get('/skills_view.html', function(req, res){
  res.sendFile(folder + 'skills_view.html');
  saveHistory(req, 'skills');
});

router.get('/hmu_view.html', function(req, res){
  res.sendFile(folder + 'hmu_view.html');
  saveHistory(req, 'hmu');
});

module.exports = router;
