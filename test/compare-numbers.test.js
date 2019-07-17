import compareNumbers from '../src/compare-numbers.js';

const test = QUnit.test;

test('compare number is equal to', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //type in any version of y, yes, yeah
    const guess = 12;
    const correctNumber = 12;
    const expected = 0;


    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);

    //Assert
    assert.equal(result, expected);
});

test('compare number greater than', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //type in any version of y, yes, yeah
    const guess = 13;
    const correctNumber = 12;
    const expected = 1;


    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);

    //Assert
    assert.equal(result, expected);
});

test('compare number is equal to', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //type in any version of y, yes, yeah
    const guess = 11;
    const correctNumber = 12;
    const expected = -1;


    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);

    //Assert
    assert.equal(result, expected);
});
