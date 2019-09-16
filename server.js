
var path = require('path');
// tingo db
var Engine = require('tingodb')();
var db = new Engine.Db('db/7thsky', {});

// express
const express = require('express');
var app = express();

//app.use(express.urlencoded());
app.use(express.json());

//backend
// create account page
// input: username, email, password
app.post('/signup', function(req, res){
    var user = req.body;
    console.log("user");
    console.log(user);

    var collection = db.collection("user");
    collection.insert([user], {w:1}, function(err, result) {
        if (err == null) {
            console.log("Inserted user account");  
            res.json({ok:true});          
        } else {
            console.log("Sever Error during saveing contact us details");
            res.status(500).error({"error": "internal server error"});
        }
  })
});

// input: email, passsword
// ouput: success, invalid login, fail
// hard code testing
// email: iqbalforall@gmail.com, password: 123
app.post('/signin', function(req, res) {
    var email = req.body.email;
    var password = req.body.password;

    if(email == "iqbalforall@gmail.com" && password == "123") {
        res.json("success");
    }else {
        res.json("fail");
    }
});
app.get('/users', function(req, res){
    var collection = db.collection("user");
    collection.findOne({username:'Ikbhal'}, function(err, item) {
        console.log(item);
        res.json(item);
    });
    res.json({status:"fail"});
});

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