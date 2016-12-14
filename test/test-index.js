/*jshint esversion: 6 */
import React from 'react';
import {createStore} from 'redux';
import {Game} from '../js/components/game';
import GameBox from '../js/components/game-box';

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
  it('should record an ICE guess and respond appropriately', function() {
    const guessedNumber = 100;
    testStore.dispatch(actions.guessNumber(guessedNumber));
    let state = testStore.getState();
    state.number.should.equal(number);
    state.currentGuess.should.equal(guessedNumber);
    state.guesses.length.should.equal(1);
    state.proximity.should.equal('ICE');
    state.won.should.equal(false);
  });
  it('should record an COLD guess and respond appropriately', function() {
    const guessedNumber = 20;
    testStore.dispatch(actions.guessNumber(guessedNumber));
    let state = testStore.getState();
    state.number.should.equal(number);
    state.currentGuess.should.equal(guessedNumber);
    state.guesses.length.should.equal(2);
    state.proximity.should.equal('COLD');
    state.won.should.equal(false);
  });
  it('should record an HOT guess and respond appropriately', function() {
    const guessedNumber = 15;
    testStore.dispatch(actions.guessNumber(guessedNumber));
    let state = testStore.getState();
    state.number.should.equal(number);
    state.currentGuess.should.equal(guessedNumber);
    state.guesses.length.should.equal(3);
    state.proximity.should.equal('HOT');
    state.won.should.equal(false);
  });
  it('should record an VERY HOT guess and respond appropriately', function() {
    const guessedNumber = 10;
    testStore.dispatch(actions.guessNumber(guessedNumber));
    let state = testStore.getState();
    state.number.should.equal(number);
    state.currentGuess.should.equal(guessedNumber);
    state.guesses.length.should.equal(4);
    state.proximity.should.equal('VERY HOT');
    state.won.should.equal(false);
  });
  it('should record a WINNING guess and respond appropriately', function() {
    const guessedNumber = number;
    testStore.dispatch(actions.guessNumber(guessedNumber));
    let state = testStore.getState();
    state.number.should.equal(number);
    state.currentGuess.should.equal(guessedNumber);
    state.guesses.length.should.equal(5);
    state.proximity.should.equal('WINNER');
    state.won.should.equal(true);
  });
});


describe('Game component', function() {
  it('Render a header and a GameBox component', function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<Game store={testStore} />);
    const result = renderer.getRenderOutput();

    result.props.className.should.equal('game');
    result.props.children.length.should.equal(3);
    result.type.should.equal('div');
    result.props.children[0].type.should.equal('button');
    result.props.children[0].props.should.have.property('onClick');
    result.props.children[0].props.children.should.equal('Start New Game');

    result.props.children[1].type.should.equal('h1');
    result.props.children[1].props.children.should.equal('HOT or COLD?');
  });
});

describe('Game Box', function() {
  it('Render the gamebox', function(){
    const renderer = TestUtils.createRenderer();
    renderer.render(<GameBox store={testStore}/>);
    const result = renderer.getRenderOutput();

    console.log(result.props);

    result.type.should.equal('div');
    result.props.className.should.equal('gamebox');
    result.props.children.length.should.equal(3);
  })
})

// describe('Image component', function() {
//     it('Renders the image and description',  function() {
//
//         const renderer = TestUtils.createRenderer();
//         renderer.render(<Image />);
//         const result = renderer.getRenderOutput();
//
//         result.props.className.should.equal('gallery-image');

//         const img = result.props.children[0];
//         img.type.should.equal('img');
//         img.props.src.should.equal(url);
//         img.props.alt.should.equal(description);

//         const p = result.props.children[1];
//         p.type.should.equal('p');
//         p.props.children.should.equal(description);
//     });
// });
//
//
// #Game (component) w/ children: #header
  // #GameBox (component)
  //   #Feedback (component)
  //   #GuessContainerBox (component)
  //     #Form w/ children: #GuessInput, #GuessButton
  //     #GuessCount (component)
  //   #GuessesBox (component)
  //     #GuessedNumber (component)
