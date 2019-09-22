const fs = require('fs');
const { exec } = require('child_process');

var express = require('express');
var router = express.Router();
router.post("/save", function(req, res){res.send("will save soon");});
router.post("/run", function(req, res){
    var test = req.body;
    var code = test.code;
    var stdinput = test.stdinput || "";    
    // 1 create file with code variable    
    fs.writeFile("/tmp/test.c", code, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
    // 1.2 create stdinput file    
    fs.writeFile("/tmp/stdinput.txt", stdinput, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The stdinput file was saved!");
    });
    // 2. run the command gcc hello.c -o hello
    exec('gcc -o /tmp/test /tmp/test.c', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });
    // 2.1 run the test file
    exec('/tmp/test  < /tmp/stdinput.txt ', (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        // $3. send the success resposne
        // $3.2 send the compilation error
        if(stdout){
            res.json({result:stdout, error:""});
        }
        if(stderr){
            res.json({error:stderr, result:""});
        }
    });    

    // 4.delete file
    var filePath = '/tmp/test'; 
    fs.unlink(filePath, function(err){
            if(err) return console.log(err);
            console.log('file deleted successfully');
    });
});
module.exports = router;