/*jshint esversion: 6 */
import React from 'react';
import {connect} from 'react-redux';

export class Feedback extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1> {this.props.message} </h1>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
		message: state.proximity
});

export default connect(mapStateToProps)(Feedback)
