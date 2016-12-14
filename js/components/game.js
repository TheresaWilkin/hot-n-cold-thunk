/*jshint esversion: 6 */
import React from 'react';
import GameBox from './game-box';
import {connect} from 'react-redux';

import * as actions from '../actions/index';

export class Game extends React.Component {
	constructor(props){
		super(props);
		this.startNewGame = this.startNewGame.bind(this);
	}

	startNewGame(){
		this.props.dispatch(
			actions.newGame()
		);
	}

	render() {
		return (
			<div className='game'>
				<button onClick={this.startNewGame}>Start New Game</button>
				<h1>HOT or COLD?</h1>
				<GameBox />
			</div>
		);
	}
}

export default connect()(Game);
