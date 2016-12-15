const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// enable CORS since we're running two servers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var jsonParser = bodyParser.json();

// you shouldn't need to server static since it is served by `npm run dev`
// but keep here for reference
//app.use(express.static('build'));

let fewestGuesses = 12;
app.get('/fewest-guesses', jsonParser, function(req, res) {
    res.status(200).json({"guess": fewestGuesses});
});

app.post('/fewest-guesses', jsonParser, function(req, res) {
	if (req.body.guess < fewestGuesses) {
		fewestGuesses = req.body.guess
		return res.status(201).json(fewestGuesses)
	}

	return res.status(200).json({})

    // update fewestGuesses here
    // remember to compare it to the current guesess to determine which is lowest
});

const PORT = 8081;
app.listen(PORT, function () {
    console.log('Example app listening on localhost:' + PORT);
});