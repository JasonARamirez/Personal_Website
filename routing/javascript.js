var express = require('express');
var router = express.Router();

router.get('/app.js', function(req, res){
    res.sendFile(__dirname + '/public_website/javascript/app.js');
});


module.exports = router;
