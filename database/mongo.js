var MongoClient = require('mongodb').MongoClient
var assert = require('assert');

module.exports = {
  insertOneToHistory : function(toInsert){
    MongoClient.connect(process.env.MONGODB_URI, function(err, db){
      assert.equal(null, err);
      var collection = db.collection('history');
      collection.insertOne(toInsert, function(err, result){
        assert.equal(err, null);
        assert.equal(1, result.result.n);
      });
    });
  }
}
