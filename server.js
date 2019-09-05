
var path = require('path');
// tingo db
var Engine = require('tingodb')();
var db = new Engine.Db('db/7thsky', {});

// express
const express = require('express');
var app = express();

//app.use(express.urlencoded());
app.use(express.json());

app.post('/student_contact_us', function(req, res) {

    var student = req.body;
    var collection = db.collection("student");
    collection.insert([student], {w:1}, function(err, result) {
        var fileName  = path.resolve(__dirname , 'public', 'index.html');
        if (err == null) {
            console.log("Thanks for Contacting. We will follow soon");  
            res.json({ok:true});          
        } else {
            console.log("Sever Error during saveing contact us details");
            res.status(500).error({"error": "internal server error"});
        }
  })
});

app.post('/coach_contact_us', function(req, res) {

    var coach = req.body;
    var collection = db.collection("coach");
    collection.insert([coach], {w:1}, function(err, result) {
        var fileName  = path.resolve(__dirname , 'public', 'index.html');
        if (err == null) {
            console.log("Thanks for Contacting. We will follow soon");  
            res.json({ok:true});          
        } else {
            console.log("Sever Error during saveing contact us details");
            res.status(500).error({"error": "internal server error"});
        }
  })
});

app.use(express.static("public"));
app.listen(process.env.PORT || 3000);