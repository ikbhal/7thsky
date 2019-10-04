

// express
const express = require('express');
const app = express();
const http = require('http').Server(app);

app.use(express.static("public"));

app.get('/dalembert', callD_alembert);

function callD_alembert(req, res) {
  // using spawn instead of exec, prefer a stream over a buffer
  // to avoid maxBuffer issue
  var spawn = require("child_process").spawn;
  var process = spawn('python', ["./d_alembert.py",
    req.query.funds, // starting funds
    req.query.size, // (initial) wager size
    req.query.count, // wager count — number of wagers per sim
    req.query.sims // number of simulations
  ]);
  process.stdout.on('data', function (data) {
    res.send(data.toString());
  });
}


const server = http.listen(3000, function() {
    console.log('listening on *:3000');
});
