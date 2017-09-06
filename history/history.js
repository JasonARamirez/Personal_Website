const ip_api_location = process.env.ip_link
const tableName = 'history'
var request = require('request');
var HistoryObject = require('./history_obj');
var db = require('../database/mongo');

module.exports = function(req, intent){
  //Used to not error out when developing on local machine
  if(process.env.ip_key){
    getAndSaveIPInfo(req, intent);
  }
}

var getAndSaveIPInfo = function(req, intent){
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var url = ip_api + process.env.ip_key + '/' + ip;
  request(url, saveHistory);
}

var saveHistory = function(err, res, body) {
  if (!err){
    var ip_json = JSON.parse(body);
    var historyObj = new HistoryObject(ip_json, intent);
    db.insertOne(historyObj, tableName);
  } else {
    console.log('Error:');
    console.log(err);
  }
}
