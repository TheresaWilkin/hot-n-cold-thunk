/*jshint esversion: 6 */
import React from 'react';
import {createStore} from 'redux';

import {Game} from '../js/components/game';
import GameBox from '../js/components/game-box';
import {Feedback} from '../js/components/feedback';
import GuessContainerBox from '../js/components/guess-container-box';
import {GuessForm} from '../js/components/form';
import {GuessCount} from '../js/components/guess-count';
import {GuessesBox} from '../js/components/guesses-box';

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
    renderer.render(<Game />);
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
    renderer.render(<GameBox />);
    const result = renderer.getRenderOutput();

    result.type.should.equal('div');
    result.props.className.should.equal('gamebox');
    result.props.children.length.should.equal(3);
  });
});

describe('Feedback', function() {
  it('Render the feedback', function(){
    const renderer = TestUtils.createRenderer();
    renderer.render(<Feedback />);
    const result = renderer.getRenderOutput();

    result.type.should.equal('div');
    let child = result.props.children;
    child.type.should.equal('h1');
    child.props.children.should.equal('Make a Guess!');
  });
  it('Render the feedback w/ a non-default message', function(){
    const renderer = TestUtils.createRenderer();
    renderer.render(<Feedback message="ICE" />);
    const result = renderer.getRenderOutput();

    result.type.should.equal('div');
    let child = result.props.children;
    child.type.should.equal('h1');
    child.props.children.should.equal('ICE');
  });
});

describe('GuessContainerBox', function() {
  it('Render the GuessContainerBox', function(){
    const renderer = TestUtils.createRenderer();
    renderer.render(<GuessContainerBox />);
    const result = renderer.getRenderOutput();

    result.type.should.equal('div');
    result.props.children.length.should.equal(2);
  });
});


describe('GuessForm', function() {
  it('Render the GuessForm', function(){
    const renderer = TestUtils.createRenderer();
    renderer.render(<GuessForm />);
    const result = renderer.getRenderOutput();

    result.type.should.equal('div');
    result.props.children.length.should.equal(2);

    let children = result.props.children;
    children[0].type.should.equal('input');
    children[0].props.id.should.equal('guessinput');
    children[0].props.type.should.equal('text');
    children[1].type.should.equal('button');
    children[1].props.id.should.equal('guessbutton');
    children[1].props.type.should.equal('button');
    children[1].props.should.have.property('onClick');
    children[1].props.children.should.equal('Guess!');
  });
});


describe('GuessCount', function() {
  it('Render the GuessForm', function(){
    const renderer = TestUtils.createRenderer();
    renderer.render(<GuessCount guesses={[1, 2]} />);
    const result = renderer.getRenderOutput();

    result.type.should.equal('h1');
    result.props.children[0].should.equal('Guess #');
    result.props.children[1].should.equal(2);
  });
});

describe('GuessesBox', function() {
  it('Render the Guesses Box', function() {
    const renderer = TestUtils.createRenderer();
    renderer.render(<GuessesBox/>);
    const result = renderer.getRenderOutput();

    // console.log(result.props.children.props[0]);

    result.type.should.equal('div');
    result.props.children.type.should.equal('ul');
  });
});
