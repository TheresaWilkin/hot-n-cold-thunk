require('babel-polyfill');

import * as actions from './actions/index';
import store from './store';


store.dispatch(actions.newGame());
store.dispatch(actions.guessNumber(20));
store.dispatch(actions.checkCloseness());
store.dispatch(actions.checkCorrect());
console.log(store.getState());

store.dispatch(actions.guessNumber(37));
store.dispatch(actions.checkCloseness());
store.dispatch(actions.checkCorrect());
console.log(store.getState());

store.dispatch(actions.guessNumber(42));
store.dispatch(actions.checkCloseness());
store.dispatch(actions.checkCorrect());
console.log(store.getState());

store.dispatch(actions.guessNumber(47));
store.dispatch(actions.checkCloseness());
store.dispatch(actions.checkCorrect());
console.log(store.getState());

store.dispatch(actions.guessNumber(50));
store.dispatch(actions.checkCloseness());
store.dispatch(actions.checkCorrect());
console.log(store.getState());
