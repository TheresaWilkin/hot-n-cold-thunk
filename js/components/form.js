/*jshint esversion: 6 */
import React from 'react';

export default class Form extends React.Component {
	render(){
		return (
			<form>
				<input id='guessinput' type='text' />
				<button id='guessbutton' type='button' onClick={console.log('Button was clicked!')}>
					Guess
				</button>
			</form>
		)
	}
}
