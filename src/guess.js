import compareNumbers from './compareNumbers.js';

const tries = document.getElementById('tries');
const userGuess = document.getElementById('user-guess');
const button = document.getElementById('button');
const tooHigh = document.getElementById('too-high');
const tooLow = document.getElementById('too-low');
const winSection = document.getElementById('win-section');
const loseSection = document.getElementById('lose-section');
const winResetButton = document.getElementById('win-reset-button');
const loseResetButton = document.getElementById('lose-reset-button');

let numberTries = 4;
tries.textContent = numberTries;

let correctNumber = Math.round((Math.random() * 19) + 1);

button.addEventListener('click', () => { 
    const guess = parseInt(userGuess.value);

    if(guess > 20 || guess < 1) {
        alert('Your guess must be a whole number between 1 and 20');
    }

    const result = compareNumbers(guess, correctNumber);

    if(result === 0) {
        winSection.classList.remove('hidden');
        tooHigh.classList.add('hidden');
        tooLow.classList.add('hidden');
        button.disabled = true;
    } else if(result === 1) {
        tooHigh.classList.remove('hidden');
        tooLow.classList.add('hidden');
    } else if(result === -1) {
        tooLow.classList.remove('hidden');
        tooHigh.classList.add('hidden');
    }

    numberTries -= 1;
    tries.textContent = numberTries;
 
    if(numberTries === 0) {
        loseSection.classList.remove('hidden');
        tooHigh.classList.add('hidden');
        tooLow.classList.add('hidden');
        button.disabled = true;
    }
});

loseResetButton.addEventListener('click', () => {
    numberTries = 4;
    tries.textContent = numberTries;
    correctNumber = Math.round((Math.random() * 20));
    loseSection.classList.add('hidden');
    button.disabled = false;
});

winResetButton.addEventListener('click', () => {
    numberTries = 4;
    tries.textContent = numberTries;
    correctNumber = Math.round((Math.random() * 20));
    winSection.classList.add('hidden');
    button.disabled = false;
});

// work on css
// move UI work into functions
// test for invalid numbers
