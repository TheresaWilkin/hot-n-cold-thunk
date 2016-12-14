/*jshint esversion: 6 */
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class GuessForm extends React.Component {
	constructor(props){
		super(props);
		this.getGuess = this.getGuess.bind(this);
	}

getGuess() {
		const formValue = this.guessInput.value;
		this.props.dispatch(
			actions.guessNumber(formValue)
		);

		this.props.dispatch(
			actions.checkCloseness()
		);

		this.props.dispatch(
			actions.checkCorrect()
		);
	}

	render(){
		return (
			<div>
				<input id='guessinput' type='text' ref={ref => this.guessInput = ref}/>
				<button id='guessbutton' type='button' onClick={this.getGuess}>
					Guess!
				</button>
			</div>
		)
	}
}

export default connect()(GuessForm)
