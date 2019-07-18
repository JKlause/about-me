import getPlay from './get-play.js';

const winCount = document.getElementById('win-count');
const loseCount = document.getElementById('lose-count');
const throwButton = document.getElementById('throw-button');
const message = document.getElementById('message');
const compChoiceImg = document.getElementById('comp-choice-img');

throwButton.addEventListener('click', () => {
    const computerThrow = getPlay();
    
    const src = 'Assets/rps/' + computerThrow + '.jpg';
    compChoiceImg.src = src;
    compChoiceImg.classList.remove('hidden');

    const userThrowButton = document.querySelector('input:checked');

});

// tally wins and losses of player