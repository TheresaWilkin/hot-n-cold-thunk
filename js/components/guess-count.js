/*jshint esversion: 6 */
import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

export class GuessCount extends React.Component {
	constructor(props) {
		super(props);
	}

  componentDidUpdate(prevProps, prevState) {
    if (this.props.won) {    
      this.props.dispatch(actions.postGuess(this.props.guesses.length));
    }
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
	guesses: state.guesses,
  won: state.won
});

export default connect(mapStateToProps)(GuessCount);