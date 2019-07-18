import getPlay from './get-play.js';

const winCount = document.getElementById('win-count');
const loseCount = document.getElementById('lose-count');
const throwButton = document.getElementById('throw-button');
let resultMessage = document.getElementById('message');
const compChoiceImg = document.getElementById('comp-choice-img');

throwButton.addEventListener('click', () => {
    const computerThrow = getPlay();
    
    const src = 'Assets/rps/' + computerThrow + '.jpg';
    compChoiceImg.src = src;
    compChoiceImg.classList.remove('hidden');

    const userThrow = document.querySelector('input:checked');

    console.log(userThrow.value, computerThrow);

    if(userThrow.value === computerThrow) {
        resultMessage.textContent = 'We Tied! Stop Copying Me';
    }
    if(userThrow.value === )
});
// determine winner
// tally wins and losses of player