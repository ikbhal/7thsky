var path = require('path');
// tingo db
var Engine = require('tingodb')();
var dbFileName = path.resolve(__dirname, 'db', '7thsky');
console.log('dbFileName' , dbFileName);
var db = new Engine.Db(dbFileName, {});


var student = { "name" : "Iqb", 
    'mobile' : "990"
};

var collection = db.collection("student");
collection.insert([student], {w:1}, function(err, result) {
    
    if (err == null) {
        console.log("Thanks for Contacting. We will follow soon");            
    } else {
        console.log("Sever Error during saveing contact us details", err);
    }
})

