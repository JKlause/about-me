import compareNumbers from './compare-numbers.js';

const tries = document.getElementById('tries');
const userGuess = document.getElementById('user-guess');
const button = document.getElementById('button');
const tooHigh = document.getElementById('too-high');
const tooLow = document.getElementById('too-low');
const winSection = document.getElementById('win-section');
const loseSection = document.getElementById('lose-section');
const winResetButton = document.getElementById('win-reset-button');
const loseResetButton = document.getElementById('lose-reset-button');
let numberTries;
let correctNumber;

resetTries();
getNumber();

button.addEventListener('click', () => { 
    const guess = parseInt(userGuess.value);
    
    if(guess > 20 || guess < 1) {
        alert('Your guess must be a whole number between 1 and 20');
    }

    const result = compareNumbers(guess, correctNumber);

    if(result === 0) {
        removeHidden(winSection);
        addHidden(tooHigh);
        addHidden(tooLow);
        buttonControler(button);
    } else if(result === 1) {
        removeHidden(tooHigh);
        addHidden(tooLow);
    } else if(result === -1) {
        removeHidden(tooLow);
        addHidden(winSection);
    }

    triesTracker();
 
    if(numberTries === 0 && result !== 0) {
        removeHidden(loseSection);
        addHidden(tooLow);
        addHidden(tooHigh);
        buttonControler(button);
    }
});

loseResetButton.addEventListener('click', () => {
    resetTries();
    getNumber();
    addHidden(loseSection);
    buttonControler(button);
});

winResetButton.addEventListener('click', () => {
    resetTries();
    getNumber();
    addHidden(winSection);
    buttonControler(button);
});

// work on css
// test for invalid numbers

function addHidden(elementName) {
    elementName.classList.add('hidden');
}

function removeHidden(elementName) {
    elementName.classList.remove('hidden');
}

function buttonControler(elementName) {
    if(elementName.disabled === true) {
        elementName.disabled = false;
    } else {
        elementName.disabled = true;
    }
}

function resetTries() {
    numberTries = 4;
    tries.textContent = numberTries;
}

function triesTracker() {
    numberTries -= 1;
    tries.textContent = numberTries;
}

function getNumber() {
    correctNumber = Math.round((Math.random() * 20));
}