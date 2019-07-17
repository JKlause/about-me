export default compareNumbers;

function compareNumbers(guess, correctNumber) {
    try {
        if(isNaN(guess) || isNaN(correctNumber)) {
            throw 'Your input is not a number, dumb ass.';
        } else if(guess === correctNumber) {
            return 0;
        } else if(guess > correctNumber) {
            return 1;
        } else if(guess < correctNumber) {
            return -1;
        }
    }
    catch(err) {
        // eslint-disable-next-line no-console
        console.log(err);
    }
}