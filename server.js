var app = require('express')();
//Server module
var http = require('http').Server(app);

var website = require('./routing/website');
app.use('/', website);

//Start listening on port 8080 on local host
http.listen(process.env.PORT || 8080, function(){
  console.log('listening on *:8080');
});
