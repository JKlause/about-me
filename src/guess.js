// what do i need to import from other js files
import compareNumbers from './compareNumbers.js';

// what do i need from the dom
const tries = document.getElementById('tries');
const userGuess = document.getElementById('user-guess');
const button = document.getElementById('button');
const tooHigh = document.getElementById('too-high');
const tooLow = document.getElementById('too-low');
const winMsg = document.getElementById('win-msg');
const loseMsg = document.getElementById('lose-msg');

//what state do i need to track
let numberTries = 4;
const correctNumber = 17;


//what events do i need to listen to
button.addEventListener('click', () => { 

    // convert guess to a number
    const guess = parseInt(userGuess.value);
    //compare numbers
    const result = compareNumbers(guess, correctNumber);

    // decrease number of tries
    if(result === 0) {
        console.log('hello');
    }
    // display number of tries

    // display correct message
            // disable button*/
});
