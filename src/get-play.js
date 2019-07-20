export default function getPlay() {
    const randomNumber = Math.floor((Math.random() * 3));
    const computerThrow = getPlayFromNumber(randomNumber);
    return computerThrow;
}

export const rock = 'rock';
export const paper = 'paper';
export const scissors = 'scissors';

export function getPlayFromNumber(randomNumber) {
    if(randomNumber === 0) {
        return rock;
    } else if(randomNumber === 1) {
        return paper;
    } else if(randomNumber === 2) {
        return scissors;
    }
}

