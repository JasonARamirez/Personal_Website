module.exports = function HistoryObject(ip_json, intent){
  console.log(ip_json);
  this.ipAddress = ip_json.ipAddress;
  this.country = ip_json.countryName;
  this.state = ip_json.stateProv;
  this.city = ip_json.city;
  this.intent = intent;
  this.time = new Date();
}
