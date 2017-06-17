module.exports = function(){
  var app = require('express')();

  //Server module
  var http = require('http').Server(app);

  var start = require('./routing/start');
  app.use('/', start);

  var javascript = require('./routing/javascript');
  app.use('/javascript', javascript);

  var css = require('./routing/css');
  app.use('/css', css);

  var images = require('./routing/images');
  app.use('/images', images);

  //Start listening on port 8080 on local host
  http.listen(process.env.PORT || 8080, function(){
    console.log('listening on *:8080');
  });
}
