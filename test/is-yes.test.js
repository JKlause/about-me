import isYes from '../src/is-yes.js';

const test = QUnit.test;

test('time to test yes', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //type in any version of y, yes, yeah
    const text = 'yes';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('time to test no', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //type in any version of no, nope, n
    const text = 'no';
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('time to test error', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    //type in anything that doesn't start with y or n
    const text = '';
    const expected = 'error';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});
