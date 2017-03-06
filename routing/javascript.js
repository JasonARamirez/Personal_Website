var express = require('express');
var router = express.Router();

router.get('/main.js', function(req, res){
    res.sendFile(__dirname + '/public_website/javascript/main.js');
});


module.exports = router;
