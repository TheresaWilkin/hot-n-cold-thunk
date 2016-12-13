/*jshint esversion: 6 */
import React from 'react';
import GameBox from './game-box';
import {connect} from 'react-redux';

export class Game extends React.Component {

	render() {
		return (
			<div>
				<h1>HOT or COLD?</h1>
				<GameBox />
			</div>
		);
	}
}

export default connect()(Game);
