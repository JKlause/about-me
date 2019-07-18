import getPlay from './get-play.js';
import { rock, paper, scissors } from './get-play.js';

//rock paper scissors game portion

const winCount = document.getElementById('win-count');
const loseCount = document.getElementById('lose-count');
const throwButton = document.getElementById('throw-button');
const resultMessage = document.getElementById('message');
const compChoiceImg = document.getElementById('comp-choice-img');

let wins = 0;
let losses = 0;
let winLose;

throwButton.addEventListener('click', () => {
    const computerThrow = getPlay();
    
    const src = 'Assets/rps/' + computerThrow + '.jpg';
    compChoiceImg.src = src;
    compChoiceImg.classList.remove('invisible');

    const userThrow = document.querySelector('input:checked');

    if(userThrow.value === computerThrow) {
        updateMessages(resultMessage, 'We Tied! Stop Copying Me...');
        winLose = 'tie';
    }
    if(userThrow.value === rock && computerThrow === scissors ||
        userThrow.value === paper && computerThrow === rock ||
        userThrow.value === scissors && computerThrow === paper) {
        updateMessages(resultMessage, 'I Lost! Stop Cheatin!');
        wins++;
        winCount.textContent = wins;
        winLose = 'win';
    }
    if(computerThrow === rock && userThrow.value === scissors ||
        computerThrow === paper && userThrow.value === rock ||
        computerThrow === scissors && userThrow.value === paper) {
        updateMessages(resultMessage, 'I Won! Loser...');
        losses++;
        loseCount.textContent = losses;
        winLose = 'lose';
    }
});


//betting game portion


const startBettingGameButton = document.getElementById('start-betting-game');
const bettingGame = document.getElementById('betting-game');
const loadBetButton = document.getElementById('load-bet');
const userBet = document.getElementById('user-bet');
const moneyUserHas = document.getElementById('money-user-has');
const betResults = document.getElementById('bet-results');

let userBetAmt;
let moneyUserHasAmt;

startBettingGameButton.addEventListener('click', () => {
    bettingGame.classList.remove('invisible');
    startBettingGameButton.disabled = true;
    throwButton.disabled = true;
});

loadBetButton.addEventListener('click', () => {
    userBetAmt = parseInt(userBet.value);
    moneyUserHasAmt = parseInt(moneyUserHas.textContent);

    compChoiceImg.classList.add('invisible');
    updateMessages(betResults, 'Watch me win.');
    updateMessages(resultMessage, 'Make your choice, punk.');
    loadBetButton.disabled = true;

    if(userBetAmt > moneyUserHasAmt) {
        alert('You don\'t have that much money!');
        
    } else if(userBetAmt === moneyUserHasAmt) {
        const allInConfirmation = confirm('You\'re all in, are you sure about that, you can just walk away now??');
        
        if(allInConfirmation === true) {
            alert('Livin on the edge your bet has been placed. Make your choice and throw!');
            throwButton.disabled = false;
        }

    } else if(userBetAmt < moneyUserHasAmt) {
        const betConfirmation = confirm('You bet ' + userBetAmt + '. Are you sure you want to make that bet?');
        
        if(betConfirmation === true) {
            alert('Your bet has been placed. Make your choice and throw!');
            throwButton.disabled = false;
        }

    }
});

throwButton.addEventListener('click', () => {
    moneyUserHasAmt = parseInt(moneyUserHas.textContent);
    userBetAmt = parseInt(userBet.value);

    if(startBettingGameButton.disabled === true && throwButton.disabled === false) {
        if(winLose === 'win') {
            moneyUserHas.textContent = (moneyUserHasAmt + userBetAmt);
            updateMessages(betResults, 'How dare you take my money! Let\'s play again!');
            throwButton.disabled = true;
            loadBetButton.disabled = false;
        } else if(winLose === 'lose') {
            moneyUserHas.textContent = (moneyUserHasAmt - userBetAmt);
            updateMessages(betResults, 'HAHAHA You lost your money to me! Let\'s play again!');
            throwButton.disabled = true;
            loadBetButton.disabled = false;
        } else if(winLose === 'tie') {
            moneyUserHas.textContent = moneyUserHasAmt;
            updateMessages(betResults, 'We tied... but I\'ll get your money soon.');
            throwButton.disabled = true;
            loadBetButton.disabled = false;
        }
    }
    if(moneyUserHas.textContent === '0') {
        startBettingGameButton.disabled = true;
        throwButton.disabled = true;
        loadBetButton.disabled = true;
        updateMessages(betResults, 'You lost all your money. Go away.');
        updateMessages(resultMessage, 'Time for you to leave!');
    }
});


function updateMessages(el, message) {
    el.textContent = message;
}