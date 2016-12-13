/*jshint esversion: 6 */
import React from 'react';
import Form from './form';
import GuessCount from './guess-count';

export default class GuessContainerBox extends React.Component {
	render() {
		return (
			<div>
				<Form />
				<GuessCount />
			</div>
		);
	}
}
