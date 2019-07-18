import getPlay from './get-play.js';

const winCount = document.getElementById('win-count');
const loseCount = document.getElementById('lose-count');
const throwButton = document.getElementById('throw-button');
const message = document.getElementById('message');

throwButton.addEventListener('click', () => {
    const computerThrow = getPlay();
    

});

// user chooses
//user throws
// computer throws
// computer reveals throw
// tally wins and losses of player