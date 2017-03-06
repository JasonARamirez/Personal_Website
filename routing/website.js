var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.sendFile(__dirname + '/public_website/html/index.html');
});


module.exports = router;
