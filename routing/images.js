var express = require('express');
var router = express.Router();

router.get('/me.jpg', function(req, res){
    res.sendFile(__dirname + '/public_website/images/me.jpg');
});


module.exports = router;
