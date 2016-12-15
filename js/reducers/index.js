/*jshint esversion: 6 */
import * as actions from '../actions/index';

const initialState = {};

export const numberReducer = (state=initialState, action) => {
	if(action.type === actions.NEW_GAME) {
		return {
			number: action.number,
			currentGuess: null,
			guesses: [],
			proximity: 'Make a Guess!',
			won: false
		};
	}
	else if (action.type === actions.GUESS_NUMBER) {
		let guesses = [...state.guesses, action.guess];

		let choice = 'ICE';
		let won = state.won;
		let distance = Math.abs(action.guess - state.number);
		if (distance === 0) {
			choice = 'WINNER';
			won = true;
		} else if (distance <= 5) {
			choice = 'VERY HOT';
		} else if (distance <= 10) {
			choice = 'HOT';
		} else if (distance <= 15) {
			choice = 'COLD';
		}

		return Object.assign({}, state,
			{currentGuess: action.guess, guesses, proximity: choice, won}
		);
	}
	else if (action.type === actions.FETCH_GUESS_SUCCESS) {
		return Object.assign({}, state, 
			{fewestGuesses: action.guess}
		);
	}

	else if (action.type === actions.FETCH_GUESS_ERROR) {
		console.log('FETCH_GUESS_ERROR', action.error)
		return state; 
	}
	else if (action.type === actions.POST_GUESS_SUCCESS) {
		return Object.assign({}, state, 
			{fewestGuesses: action.guess}
		);
	}

	else if (action.type === actions.POST_GUESS_ERROR) {
		console.log('POST_GUESS_ERROR', action.error)
		return state;
	}
    return state;
};





