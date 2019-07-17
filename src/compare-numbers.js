export default compareNumbers;

function compareNumbers(guess, correctNumber) {
    try { 
        if(isNaN(guess) || isNaN(correctNumber)) {
            throw 'Error: Your input is not a number, dumb ass. I\'m taking away a guess for your stupidity.';
        } else if(guess === correctNumber) {
            return 0;
        } else if(guess > correctNumber) {
            return 1;
        } else if(guess < correctNumber) {
            return -1;
        }
    }
    catch(err) {
        alert(err);
    }
}