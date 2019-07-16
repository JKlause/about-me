import isYes from '../src/is-yes.js';

//refereced Dom Elements
const quizButton = document.getElementById('quiz-button');
const result = document.getElementById('quiz-result');

//needed variables
let name = '';
let correctAnswers = 0;


quizButton.onclick = function() {

    //get user name
    const firstName = prompt('What\'s your first name?');
    if(firstName === null) {
        alert('Names are important to me. Restart the quiz');
        return;
    }
    name += firstName;

    const lastName = prompt('What\'s your last name?');
    if(lastName === null) {
        alert('Names are important to me. Restart the quiz');
        return;
    }
    name += ' ' + lastName;

     // double check user wants to take quiz
    const confirmed = confirm('Are you sure you are ready to take this quiz ' + name + '? I\'m a pretty complex dude afterall...');
    if(!confirmed) {
        return;
    } else { //ask user three questions

        // picture question
        const pictureQuestion = prompt('Did I take the picture on this page with my phone (Y/N?)?');
        const pictureAnswer = false;
        
        if(pictureQuestion === null) {
            correctAnswers += 0;
        } else if(isYes(pictureQuestion) === 'error') {
            correctAnswers += 0;
        } else if(isYes(pictureQuestion) === pictureAnswer) {
            correctAnswers += 1;
        } 

        // temperature question
        const temperatureQuestion = prompt('Am I excited about the umpcoming summer temperatures (Y/N?)?');
        const temperatureAnswer = false;

        if(temperatureQuestion === null) {
            correctAnswers += 0;
        } else if(isYes(temperatureQuestion) === 'error') {
            correctAnswers += 0;
        } else if(isYes(temperatureQuestion) === temperatureAnswer) {
            correctAnswers += 1;
        } 

        // hawaii question
        const hawaiiQuestion = prompt('Would I like to visit Hawaii as soon as possible (Y/N?)?');
        const hawaiiAnswer = true;

        if(hawaiiQuestion === null) {
            correctAnswers += 0;
        } else if(isYes(hawaiiQuestion) === 'error') {
            correctAnswers += 0;
        } else if(isYes(hawaiiQuestion) === hawaiiAnswer) {
            correctAnswers += 1;
        } 

        //get correctAnswers into percentage
        correctAnswers = Math.round((correctAnswers / 3) * 100);
        
        // response creations
        let response = 'Well ' + name + ',';
        if(correctAnswers === 0) {
            response += ' you might want to read that again considering you got ' + correctAnswers + '% answers correct.';
        } 
        else if(correctAnswers === 33) {
            response += ' considering you only got ' + correctAnswers + '% answer correct, you might want to rethink your life.';
        } 
        else if(correctAnswers === 67) {
            response += ' you got ' + correctAnswers + '% answers right. That\'s an ok job, but it is not perfect.';
        } 
        else if(correctAnswers === 100) {
            response += ' you get me! You really get me! You got ' + correctAnswers + '% answers correct!!';
        }
        result.textContent = response;
        
          // reset correct answers and name for next time throught quiz
        name = '';
        correctAnswers = 0;
    }  

};