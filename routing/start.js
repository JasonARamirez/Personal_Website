var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.sendFile(__dirname + '/public_website/html/index.html');
});

router.get('/home_view.html', function(req, res){
  res.sendFile(__dirname + '/public_website/html/home_view.html');
});


module.exports = router;
