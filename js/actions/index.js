/*jshint esversion: 6 */
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
