/*jshint esversion: 6 */
import React from 'react';
import {createStore} from 'redux';

import * as reducers from '../js/reducers/index';
import * as actions from '../js/actions/index';

import TestUtils from 'react-addons-test-utils';
import chai from 'chai';
const should = chai.should();


const testStore = createStore(reducers.numberReducer);
const number = 5;

describe('New Game', function() {
  it('should create new game', function() {
    testStore.dispatch(actions.newGame(number));
    let state = testStore.getState();
    state.number.should.equal(number);
    state.guesses.length.should.equal(0);
    state.proximity.should.equal('Make a Guess!');
    state.won.should.equal(false);
  });
});

describe('GUESS_NUMBER', function(){
  it('should record a guess and respond appropriately', function() {
    const guessedNumber = 100;
    testStore.dispatch(actions.guessNumber(guessedNumber));
    let state = testStore.getState();
    state.number.should.equal(number);
    state.currentGuess.should.equal(guessedNumber);
    state.guesses.length.should.equal(1);
    state.proximity.should.equal('ICE');
    state.won.should.equal(false);
  });
});

// {type:'GUESS_NUMBER',guess:'100'});
//   expect(state).toEqual({number:5,currentGuess:'100',guesses:['100'],proximity:'ICE',won:false});
//{type:'GUESS_NUMBER',guess:'20'});
//   expect(state).toEqual({number:5,currentGuess:'20',guesses:['100','35','25','20'],proximity:'COLD',won:false});
//{type:'GUESS_NUMBER',guess:'15'});
//   expect(state).toEqual({number:5,currentGuess:'15',guesses:['100','35','25','20','15'],proximity:'HOT',won:false});
//{type:'GUESS_NUMBER',guess:'10'});
//   expect(state).toEqual({number:5,currentGuess:'10',guesses:['100','35','25','20','15','10'],proximity:'VERY HOT',won:false});
//{type:'GUESS_NUMBER',guess:'5'});
//   expect(state).toEqual({number:5,currentGuess:'5',guesses:['100','35','25','20','15','10','5'],proximity:'WINNER',won:false});
//
//
//
