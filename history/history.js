const request = require('request');
const ip_api = 'http://api.db-ip.com/v2/'
module.exports = function(req, intent){
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var url = ip_api + process.env.ip_key + '/' + ip;
  request(url, function(error, res, body) {
    console.log(JSON.parse(body));
  });
}
