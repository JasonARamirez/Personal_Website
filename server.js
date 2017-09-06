module.exports = function(){
  var app = require('express')();

  //Server module
  var http = require('http').Server(app);

  var html = require('./routing/html');
  app.use('/', html);

  var javascript = require('./routing/javascript');
  app.use('/javascript', javascript);

  var css = require('./routing/css');
  app.use('/css', css);

  var images = require('./routing/images');
  app.use('/images', images);

  var docs = require('./routing/docs');
  app.use('/docs', docs);

  //Start listening on port 8080 on local host
  http.listen(process.env.PORT || 8080, function(){
    console.log('listening on *:8080');
  });
}
