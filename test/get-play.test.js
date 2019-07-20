import { getPlayFromNumber } from '../src/get-play.js';

const test = QUnit.test;

QUnit.module('Throw RPS');

test('rock for 0', assert => {
    const randomNumber = 0;
    const expected = 'rock';
    const computerThrow = getPlayFromNumber(randomNumber);
    assert.equal(computerThrow, expected);
});

test('paper for 1', assert => {
    const randomNumber = 1;
    const expected = 'paper';
    const computerThrow = getPlayFromNumber(randomNumber);
    assert.equal(computerThrow, expected);
});

test('rock for 2', assert => {
    const randomNumber = 2;
    const expected = 'scissors';
    const computerThrow = getPlayFromNumber(randomNumber);
    assert.equal(computerThrow, expected);
});