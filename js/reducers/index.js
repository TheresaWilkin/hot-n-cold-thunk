import * as actions from '../actions/index';

const initialState = {};

export const numberReducer = (state=initialState, action) => {
	if(action.type === actions.GENERATE_NUMBER) {
		let number = Math.floor((Math.random() * 100) + 1);
		return {number: number,
		currentGuess: null,
		guesses: []
		};
	} 
	else if (action.type === actions.GUESS_NUMBER) {
		let guesses = [...state.guesses, action.guess];
		const newState = Object.assign({}, state, {currentGuess: action.guess, guesses});
		return newState;
	}
    return state;
};
