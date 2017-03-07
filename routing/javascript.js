var express = require('express');
var router = express.Router();

router.get('/app.js', function(req, res){
    res.sendFile(__dirname + '/public_website/javascript/app.js');
});

router.get('/home_controller.js', function(req, res){
  res.sendFile(__dirname + '/public_website/javascript/home_controller.js');
})

router.get('/main.js', function(req, res){
  res.sendFile(__dirname + '/public_website/javascript/main.js');
});


module.exports = router;
