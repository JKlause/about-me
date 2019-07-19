import getPlay from './get-play.js';
import { rock, paper, scissors } from './get-play.js';


const winCount = document.getElementById('win-count');
const loseCount = document.getElementById('lose-count');
const throwButton = document.getElementById('throw-button');
const resultMessage = document.getElementById('message');
const compChoiceImg = document.getElementById('comp-choice-img');
const startBettingGameButton = document.getElementById('start-betting-game');
const bettingGame = document.getElementById('betting-game');
const loadBetButton = document.getElementById('load-bet');
const userBet = document.getElementById('user-bet');
const moneyUserHas = document.getElementById('money-user-has');
const betResults = document.getElementById('bet-results');

let wins = 0;
let losses = 0;
let winLose;
let userBetAmt;
let moneyUserHasAmt;

startBettingGameButton.addEventListener('click', () => {
    startBettingGame();
});

loadBetButton.addEventListener('click', () => {
    loadBet();
});

throwButton.addEventListener('click', () => {
    const userThrow = document.querySelector('input:checked');
    const computerThrow = getPlay();
    showCompThrowImg(computerThrow);
    gameResultUpdate(userThrow, computerThrow);

    betResult();
});


function loadBet() {
    userBetAmt = parseInt(userBet.value);
    moneyUserHasAmt = parseInt(moneyUserHas.textContent);

    hideOnPage(compChoiceImg);
    updateMessages(betResults, 'Watch me win.');
    updateMessages(resultMessage, 'Make your choice, punk.');

    checkAndConfirmBet();
}

function startBettingGame() {
    revealOnPage(bettingGame);
    turnOffButton(startBettingGameButton);
    turnOffButton(throwButton);
}

function betResult() {
    userBetAmt = parseInt(userBet.value);
    moneyUserHasAmt = parseInt(moneyUserHas.textContent);

    if(startBettingGameButton.disabled === true && throwButton.disabled === false) {
        if(winLose === 'win') {
            moneyUserHas.textContent = (moneyUserHasAmt + userBetAmt);
            updateMessages(betResults, 'How dare you take my money! Let\'s play again!');
            turnOffButton(throwButton);
            turnOnButton(loadBetButton);
        }
        else if(winLose === 'lose') {
            moneyUserHas.textContent = (moneyUserHasAmt - userBetAmt);
            updateMessages(betResults, 'HAHAHA You lost your money to me! Let\'s play again!');
            turnOffButton(throwButton);
            turnOnButton(loadBetButton);
        }
        else if(winLose === 'tie') {
            moneyUserHas.textContent = moneyUserHasAmt;
            updateMessages(betResults, 'We tied... but I\'ll get your money soon.');
            turnOffButton(throwButton);
            turnOnButton(loadBetButton);
        }
    }
    if(moneyUserHas.textContent === '0') {
        turnOffButton(startBettingGameButton);
        turnOffButton(throwButton);
        turnOffButton(loadBetButton);
        updateMessages(betResults, 'You lost all your money. Go away.');
        updateMessages(resultMessage, 'Time for you to leave!');
    }
}

function checkAndConfirmBet() {
    if(userBetAmt > moneyUserHasAmt) {
        alert('You don\'t have that much money!');
    }
    else if(userBetAmt === moneyUserHasAmt) {
        const allInConfirmation = confirm('You\'re all in, are you sure about that, you can just walk away now??');
        if(allInConfirmation === true) {
            alert('Livin on the edge your bet has been placed. Make your choice and throw!');
            turnOnButton(throwButton);
            loadBetButton.disabled = true;
        }
    }
    else if(userBetAmt < moneyUserHasAmt) {
        const betConfirmation = confirm('You bet ' + userBetAmt + '. Are you sure you want to make that bet?');
        if(betConfirmation === true) {
            alert('Your bet has been placed. Make your choice and throw!');
            turnOnButton(throwButton);
            turnOffButton(loadBetButton);
        }
    }
}

function showCompThrowImg(computerThrow) {
    const src = 'assets/rps/' + computerThrow + '.jpg';
    compChoiceImg.src = src;
    const alt = computerThrow;
    compChoiceImg.alt = 'Computer ' + alt + ' choice';
    revealOnPage(compChoiceImg);
}

function gameResultUpdate(userThrow, computerThrow) {
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
}

function updateMessages(el, message) {
    el.textContent = message;
}

function turnOnButton(buttonName) {
    buttonName.disabled = false;
}

function turnOffButton(buttonName) {
    buttonName.disabled = true;
}

function revealOnPage(el) {
    el.classList.remove('invisible');
}

function hideOnPage(el) {
    el.classList.add('invisible');
}