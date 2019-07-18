import getPlay from './get-play.js';
import { rock, paper, scissors } from './get-play.js';

const winCount = document.getElementById('win-count');
const loseCount = document.getElementById('lose-count');
const throwButton = document.getElementById('throw-button');
const resultMessage = document.getElementById('message');
const compChoiceImg = document.getElementById('comp-choice-img');

let wins = 0;
let losses = 0;

throwButton.addEventListener('click', () => {
    const computerThrow = getPlay();
    
    const src = 'Assets/rps/' + computerThrow + '.jpg';
    compChoiceImg.src = src;
    compChoiceImg.classList.remove('hidden');

    const userThrow = document.querySelector('input:checked');
    console.log(userThrow.value, computerThrow, rock);
    if(userThrow.value === computerThrow) {
        updateResultMessage('We Tied! Stop Copying Me...');
    }
    if(userThrow.value === rock && computerThrow === scissors ||
        userThrow.value === paper && computerThrow === rock ||
        userThrow.value === scissors && computerThrow === paper) {
        updateResultMessage('I Lost! Stop Cheatin!');
        wins++;
        winCount.textContent = wins;
    }
    if(computerThrow === rock && userThrow.value === scissors ||
        computerThrow === paper && userThrow.value === rock ||
        computerThrow === scissors && userThrow.value === paper) {
        updateResultMessage('I Won! Loser...');
        losses++;
        loseCount.textContent = losses;
    }
});

function updateResultMessage(message) {
    resultMessage.textContent = message;
}