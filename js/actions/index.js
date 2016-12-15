/*jshint esversion: 6 */

import 'isomorphic-fetch';

export const NEW_GAME = 'NEW_GAME';
export const newGame = (number) => ({
	type: NEW_GAME,
	number: number || Math.floor((Math.random() * 100) + 1)
});

export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = guess => ({
	type: GUESS_NUMBER,
	guess
});

export const CHECK_CLOSENESS = 'CHECK_CLOSENESS';
export const checkCloseness = () => ({
	type: CHECK_CLOSENESS
});

export const CHECK_CORRECT = 'CHECK_CORRECT';
export const checkCorrect = () => ({
	type: CHECK_CORRECT
});

export const FETCH_GUESS_SUCCESS = 'FETCH_GUESS_SUCCESS';
export const fetchGuessSuccess = guess => ({
	type: FETCH_GUESS_SUCCESS, 
	guess
})

export const FETCH_GUESS_ERROR = 'FETCH_GUESS_ERROR';
export const fetchGuessError = error => ({
	type: FETCH_GUESS_ERROR, 
	error
})

export const fetchGuess = () => {
	return dispatch => {
		const url = 'http://localhost:8081/fewest-guesses';
		return fetch(url)
			.then(response => {
				if (!response.ok) {
					const error = new Error(reponse.statusText)
					error.response = response
					throw error; 
				}
				return response; 
			})
			.then(response => response.json())
			.then(data => dispatch(fetchGuessSuccess(data.guess)))
			.catch(error => dispatch(fetchGuessError(error)));
	}
}
