/*jshint esversion: 6 */
import React from 'react';
import {connect} from 'react-redux'

export class GuessCount extends React.Component {
	constructor(props) {
		super(props);
	}
  render(){
    return(
      <h1>
        Guess #{this.props.guesses.length}
      </h1>
    );
  }
}

GuessCount.defaultProps = {
    guesses: []
};

const mapStateToProps = (state, props) => ({
	guesses: state.guesses
});

export default connect(mapStateToProps)(GuessCount);