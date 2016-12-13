import React from 'react';
import GameBox from './game-box';

export default class Game extends React.Component {


	render() {
		return (
			<div>
				<h1>HOT or COLD?</h1>
				<GameBox />
			</div>
		);
	}
}
