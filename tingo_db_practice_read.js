var path = require('path');
var Engine = require('tingodb')(),
assert = require('assert');

var dbFileName = path.resolve(__dirname, 'db', '7thsky');
console.log('dbFileName' , dbFileName);
var db = new Engine.Db(dbFileName, {});

var collection = db.collection("test");
collection.insert([{hello:'world_safe1'}
, {hello:'world_safe2'}], {w:1}, function(err, result) {
    assert.equal(null, err);

    collection.findOne({hello:'world_safe2'}, function(err, item) {
        console.log(item);
    });
});