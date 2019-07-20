import compareNumbers from './compare-numbers.js';


const triesLeftTextRendering = document.getElementById('tries-left-text-rendering');
const userGuess = document.getElementById('user-guess');
const submitButton = document.getElementById('submit-button');
const guessTooHighMsg = document.getElementById('guess-too-high-msg');
const guessTooLowMsg = document.getElementById('guess-too-low-msg');
const winSection = document.getElementById('win-section');
const loseSection = document.getElementById('lose-section');
const winResetButton = document.getElementById('win-reset-button');
const loseResetButton = document.getElementById('lose-reset-button');

let numberOfTriesLeft;
let correctNumber;
let resultSectionToHide;


resetNumberofTriesLeft();
getComputerNumber();


submitButton.addEventListener('click', () => { 
    const userGuessIntoNum = parseInt(userGuess.value);
    const compareGuessAndCorrectNum = compareNumbers(userGuessIntoNum, correctNumber);
    validateGuess(userGuessIntoNum);
    determineResult(compareGuessAndCorrectNum);
});


loseResetButton.addEventListener('click', () => {
    resultSectionToHide = loseSection;
    initializeReset(resultSectionToHide);
});


winResetButton.addEventListener('click', () => {
    resultSectionToHide = winSection;
    initializeReset(resultSectionToHide);
});



function determineResult(compareGuessAndCorrectNum) {
    if(compareGuessAndCorrectNum === 0) {
        removeHidden(winSection);
        addHidden(guessTooHighMsg);
        addHidden(guessTooLowMsg);
        buttonControler(submitButton);
    }
    else if(compareGuessAndCorrectNum === 1) {
        removeHidden(guessTooHighMsg);
        addHidden(guessTooLowMsg);
    }
    else if(compareGuessAndCorrectNum === -1) {
        removeHidden(guessTooLowMsg);
        addHidden(winSection);
    }
    triesTracker();
    if(numberOfTriesLeft === 0 && compareGuessAndCorrectNum !== 0) {
        removeHidden(loseSection);
        addHidden(guessTooLowMsg);
        addHidden(guessTooHighMsg);
        buttonControler(submitButton);
    }
}

function validateGuess(userGuessIntoNum) {
    if(userGuessIntoNum > 20 || userGuessIntoNum < 1) {
        alert('Your guess must be a whole number between 1 and 20');
    }
}

function initializeReset(resultSectionToHide) {
    resetNumberofTriesLeft();
    getComputerNumber();
    addHidden(resultSectionToHide);
    buttonControler(submitButton);
}

function addHidden(elementToHide) {
    elementToHide.classList.add('hidden');
}

function removeHidden(elementToReveal) {
    elementToReveal.classList.remove('hidden');
}

function buttonControler(buttonName) {
    if(buttonName.disabled === true) {
        buttonName.disabled = false;
    } else {
        buttonName.disabled = true;
    }
}

function resetNumberofTriesLeft() {
    numberOfTriesLeft = 4;
    triesLeftTextRendering.textContent = numberOfTriesLeft;
}

function triesTracker() {
    numberOfTriesLeft -= 1;
    triesLeftTextRendering.textContent = numberOfTriesLeft;
}

function getComputerNumber() {
    correctNumber = Math.round((Math.random() * 19) + 1);
}