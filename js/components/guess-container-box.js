/*jshint esversion: 6 */
import React from 'react';
import Form from './form';
import GuessCount from './guess-count';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

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
