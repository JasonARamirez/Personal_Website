const mongoURI = process.env.MONGODB_URI
var MongoClient = require('mongodb').MongoClient
var assert = require('assert');

module.exports = {
  insertOne : function(toInsert, tableName){
    MongoClient.connect(mongoURI, function(err, db){
      insertOneToDB(db, toInsert, tableName, err);
    });
  }
}

var insertOneToDB = function(db, toInsert, tableName, err){
  assert.equal(null, err);
  var collection = db.collection(tableName);
  collection.insertOne(toInsert, checkForErrorAfterInsert);
}

var checkForErrorAfterInsert = function(err, result){
  assert.equal(errAfter, null);
  assert.equal(1, result.result.n);
}
