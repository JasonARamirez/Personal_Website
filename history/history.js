const request = require('request');
const ip_api = 'http://api.db-ip.com/v2/'
var HistoryObject = require('./history_obj');
var db = require('../database/mongo');
module.exports = function(req, intent){
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var url = ip_api + process.env.ip_key + '/' + ip;
  request(url, function(error, res, body) {
    var ip_json = JSON.parse(body);
    var historyObj = new HistoryObject(ip_json, intent);
    db.insertOneToHistory(historyObj);
  });
}
