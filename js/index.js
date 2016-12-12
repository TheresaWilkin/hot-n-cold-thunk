require('babel-polyfill');

import * as actions from './actions/index';
import store from './store';


store.dispatch(actions.generateNumber());
store.dispatch(actions.guessNumber(11));

console.log(store.getState()); // Logs [{ name: 'joe', rating: null}]

store.dispatch(actions.guessNumber(13));
console.log(store.getState()); // Logs [{ name: 'joe', rating: null}]

