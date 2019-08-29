
var path = require('path');
// tingo db
var Engine = require('tingodb')();
var db = new Engine.Db('db/7thsky', {});

// express
const express = require('express');
var app = express();

app.use(express.urlencoded());

app.post('/contact_us', function(req, res) {
    const name = req.body.name || "";
    const mobile = req.body.mobile || "";
    const email = req.body.email || "";
    const passed_out_year = req.body.passed_out_year || "";
    const branch = req.body.branch || "";
    const state = req.body.state || "";
    const current_city = req.body.current_city || ""; 
    const story = req.body.story || "";

    var student = { "name" : name, 
        'mobile' : mobile,
        'email' : email,
        'passed_out_year' : passed_out_year,
        'branch' : branch,
        'state' : state,
        'current_city' : current_city,
        'story' : story
    };

    var collection = db.collection("student");
    collection.insert([student], {w:1}, function(err, result) {
        var fileName  = path.resolve(__dirname , 'public', 'index.html');
        if (err == null) {
            console.log("Thanks for Contacting. We will follow soon");            
        } else {
            console.log("Sever Error during saveing contact us details");
        }
        res.sendFile(fileName);
  })
});

app.use(express.static("public"));
app.listen(process.env.PORT || 3000);