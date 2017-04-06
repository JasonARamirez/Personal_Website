var express = require('express');
var router = express.Router();
var folder = __dirname + '/public_website/html/';

router.get('/', function(req, res){
    res.sendFile(folder + 'index.html');
});

router.get('/home_view.html', function(req, res){
  res.sendFile(folder + 'home_view.html');
});

router.get('/profile_view.html', function(req, res){
  res.sendFile(folder + 'profile_view.html');
});

router.get('/projects_view.html', function(req, res){
  res.sendFile(folder + 'projects_view.html');
});

router.get('/skills_view.html', function(req, res){
  res.sendFile(folder + 'skills_view.html');
});

router.get('/hmu_view.html', function(req, res){
  res.sendFile(folder + 'hmu_view.html');
});

module.exports = router;
