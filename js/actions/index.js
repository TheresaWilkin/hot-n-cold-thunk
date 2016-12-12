
export const GENERATE_NUMBER = 'GENERATE_NUMBER';
export const generateNumber = () => ({
	type: GENERATE_NUMBER
});

export const GUESS_NUMBER = 'GUESS_NUMBER';
export const guessNumber = guess => ({
	type: GUESS_NUMBER,
	guess
});

export const CHECK_CLOSENESS = 'CHECK_CLOSENESS';
export const checkCloseness = closeness => ({
	type: CHECK_CLOSENESS,
	closeness
});

export const CHECK_CORRECT = 'CHECK_CORRECT';
export const checkCorrect = correct => ({
	type: CHECK_CORRECT,
	correct
});

export const CHECK_NEW_GAME = 'CHECK_NEW_GAME';
export const checkNewGame = newGame => ({
	type: CHECK_NEW_GAME,
	newGame
});

export const START_NEW_GAME = 'START_NEW_GAME';
export const startNewGame = startGame => ({
	type: START_NEW_GAME,
	startGame
});

