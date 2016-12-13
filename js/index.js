/*jshint esversion: 6 */
require('babel-polyfill');

import * as actions from './actions/index';
import store from './store';
import {Provider} from 'react-redux';

import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/game';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
				<Game />
		</Provider>,
		document.getElementById('app'), function() 
		{store.dispatch(actions.newGame())});
});
