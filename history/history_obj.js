module.exports = function HistoryObject(ip_json, intent){
  this.ipAddress = ip_json.ipAddress;
  this.countryName = ip_json.countryName;
  this.state = ip_json.stateProv;
  this.city = ip_json.city;
  this.intent = intent;
  this.time = date();
}
