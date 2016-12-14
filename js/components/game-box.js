/*jshint esversion: 6 */
import React from 'react';
import Feedback from './feedback';
import GuessContainerBox from './guess-container-box';
import GuessesBox from './guesses-box';

export default class GameBox extends React.Component {
	render(){
		return (
			<div className='gamebox'>
				<Feedback />
				<GuessContainerBox />
				<GuessesBox />
			</div>
		)
	}
}
