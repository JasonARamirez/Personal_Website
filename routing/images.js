var express = require('express');
var router = express.Router();

router.get('/me.jpg', function(req, res){
    res.sendFile(__dirname + '/public_website/images/me.jpg');
});

router.get('/favicon.ico', function(req, res){
  res.sendFile(__dirname + '/public_website/images/favicon.ico');
});

router.get('/Boeing-logo.png', function(req, res){
  res.sendFile(__dirname + '/public_website/images/Boeing-logo.png');
});

router.get('/messenger.png', function(req, res){
  res.sendFile(__dirname + '/public_website/images/messenger.png');
});

router.get('/share.jpg', function(req, res){
  res.sendFile(__dirname + '/public_website/images/share.jpg');
});

router.get('/rocket.png', function(req, res){
  res.sendFile(__dirname + '/public_website/images/rocket.png');
});

router.get('/my_site.PNG', function(req, res){
  res.sendFile(__dirname + '/public_website/images/my_site.PNG');
});

router.get('/pci.jpg', function(req, res){
  res.sendFile(__dirname + '/public_website/images/pci.jpg');
});

router.get('/Jason_Ramirez_Resume.pdf', function(req, res){
  res.sendFile(__dirname + '/public_website/images/Jason_Ramirez_Resume.pdf');
});

module.exports = router;
