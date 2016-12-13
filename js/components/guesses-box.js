/*jshint esversion: 6 */
import React from 'react';
import GuessedNumber from './guessed-number';
import {connect} from 'react-redux';

export class GuessesBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    let guessedNumbers = this.props.guesses.map((number, index) => {
      return <GuessedNumber number={number} key={index}/>
    });
    return (
      <div>
        <ul>
          {guessedNumbers}
        </ul>
      </div>
    )
  }
}

GuessesBox.defaultProps = {
    guesses: []
};

const mapStateToProps = (state, props) => ({
  guesses: state.guesses
})

export default connect(mapStateToProps)(GuessesBox)
