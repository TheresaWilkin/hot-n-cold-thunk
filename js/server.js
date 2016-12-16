const express = require('express');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

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
	if (req.body === {}) {
		console.log('hi')
	}
    Guess.find(function(err, fewestGuesses) {
    	console.log('fewestGuesses in GET', fewestGuesses)

    	if (fewestGuesses.length === 0) {
    		return res.status(200).json({"guess": 50})
    	}
        else if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
        return res.status(200).json({"guess": fewestGuesses[0].guess});
    });
});

app.post('/fewest-guesses', jsonParser, function(req, res) {
	if (!req.body.guess) {
		return res.sendStatus(400).end();
	};
	Guess.find(function(err, fewestGuesses) {
		// fewestGuesses = [{guess: 5}, {guess: 7}]
        if (err) {
            return res.status(500).json({
                message: 'Internal Server Error'
            });
        }
       console.log('fewestGuessess', fewestGuesses[0].guess)
          console.log('req.body.guess', req.body.guess)
        // If there aren't any guesses in the DB so far
        if (fewestGuesses.length === 0) {
        	console.log('got into create')
        	Guess.create({guess: req.body.guess}, function (err, guessDoc) {
        		return res.status(201).json({"guess": guessDoc.guess})
        	});
        }
        // Their guess is the new best guess

		else if (req.body.guess < fewestGuesses[0].guess) { 
			console.log('got into else if')
			Guess.findOneAndUpdate({guess: fewestGuesses[0].guess}, 
				{$set: {guess: req.body.guess}}, 
				function(err, guessDoc) {
					if (err) {
						return res.status(500).json({
							message: 'Internal Server Error'
						});
					}
					console.log('what youre sending back', guessDoc.guess)
				return res.status(200).json(guessDoc.guess);
			});
		}
		// Their guess is worse than the previous best guess
		else {
			console.log('got to else')
		}
    });

});
