/*jshint esversion: 6 */
import React from 'react';
import GuessedNumber from './guessed-number';

export default class GuessesBox extends React.Component {
  render(){
    let dummyArray = [1,2,3,4,5];
    let guessedNumbers = dummyArray.map((number, index) => {
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
