const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var jsonParser = bodyParser.json();


const PORT = 8081;
const DATABASE_URL =  'mongodb://localhost/fewest-guesses';
var runServer = function(callback) {
    mongoose.connect(DATABASE_URL, function(err) {
        if (err && callback) {
            return callback(err);
        }

        app.listen(PORT, function() {
            console.log('Listening on localhost:' + PORT);
            if (callback) {
                callback();
            }
        });
    });
};

if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
};
//app.use(express.static('build'));

var GuessSchema = new mongoose.Schema({
    guess: { type: Number, default: Infinity }
});

var Guess = mongoose.model('Guess', GuessSchema);

app.get('/fewest-guesses', jsonParser, function(req, res) {
    Guess.find(function(err, fewestGuesses) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        res.status(200).json(fewestGuesses);
    });
});

app.post('/fewest-guesses', jsonParser, function(req, res) {
	if (!req.body.guess) {
		return res.sendStatus(400);
	};
	Guess.find(function(err, fewestGuesses) {
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        if (!fewestGuesses) {
        	Guess.create({guess: req.body.guess});
        }
		if (req.body.guess < fewestGuesses) {
			Guess.findOneAndUpdate(fewestGuesses, 
				{$set: {guess: req.body.guess}}, 
				function(err, item) {
					console.log(item);
					if (err) {
						return res.status(500).json({
							message: 'Internal Server Error'
						});
					}
				return res.status(200).json(item);
			});
		};
    });

});
