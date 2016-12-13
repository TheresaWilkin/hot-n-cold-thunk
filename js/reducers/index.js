/*jshint esversion: 6 */
import * as actions from '../actions/index';

const initialState = {};

export const numberReducer = (state=initialState, action) => {
	if(action.type === actions.NEW_GAME) {
		let number = Math.floor((Math.random() * 100) + 1);
		// let number = 50;
		return {
			number,
			currentGuess: null,
			guesses: [],
			proximity: 'Make a Guess!',
			won: false
		};
	}
	else if (action.type === actions.GUESS_NUMBER) {
		let guesses = [...state.guesses, action.guess];
		return Object.assign({},state,
			{currentGuess: action.guess, guesses}
		);
	}
	else if (action.type === actions.CHECK_CLOSENESS) {
		// VERY HOT: 5
		// HOT: 10
		// COLD: 15
		// ICE: 20
		let choice = 'ICE';
		let distance = Math.abs(state.currentGuess - state.number);
		if (distance === 0) {
			choice = 'WINNER';
		} else if (distance <= 5) {
			choice = 'VERY HOT';
		} else if (distance <= 10) {
			choice = 'HOT';
		} else if (distance <= 15) {
			choice = 'COLD';
		}

		return Object.assign({}, state,
			{proximity: choice});
	}
	else if (action.type === actions.CHECK_CORRECT) {
		let won = state.won;
		if (state.currentGuess === state.number) {
			won = true;
		}
		return Object.assign({}, state, {won});
	}


    return state;
};
