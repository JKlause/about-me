import compareNumbers from '../src/compare-numbers.js';

const test = QUnit.test;

test('compare number is equal to', function(assert) {

    const guess = 12;
    const correctNumber = 12;
    const expected = 0;
    const result = compareNumbers(guess, correctNumber);

    assert.equal(result, expected);
});

test('compare number greater than', function(assert) {
    const guess = 13;
    const correctNumber = 12;
    const expected = 1;
    const result = compareNumbers(guess, correctNumber);

    assert.equal(result, expected);
});

test('compare number is equal to', function(assert) {
    const guess = 11;
    const correctNumber = 12;
    const expected = -1;
    const result = compareNumbers(guess, correctNumber);

    assert.equal(result, expected);
});

// unable to figure out test for error, though function is throwing error
test('test for error guess NaN', function(assert) {
    const guess = 12;
    const correctNumber = 'd';
    const expected = 'Your input is not a number, dumb ass.';
    const result = compareNumbers(guess, correctNumber);

    assert.throws(result, expected);
});

test('test for error correctNumbner NaN', function(assert) {
    const guess = 12;
    const correctNumber = 12;
    const expected = 'Your input is not a number, dumb ass.';
    const result = compareNumbers(guess, correctNumber);

    assert.throws(result, expected);
});
