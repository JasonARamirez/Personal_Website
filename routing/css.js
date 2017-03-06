var express = require('express');
var router = express.Router();

router.get('/main.css', function(req, res){
    res.sendFile(__dirname + '/public_website/css/main.css');
});

router.get('/skeleton.css', function(req, res){
  res.sendFile(__dirname + '/public_website/css/skeleton.css');
});


module.exports = router;
