import isYes from '../src/is-yes.js';

//refereced Dom Elements
const quizButton = document.getElementById('quiz-button');
const result = document.getElementById('quiz-result');

let name = '';

//event handlers
quizButton.onclick = function() {
    //get user name
    const firstName = prompt('What\'s your first name?');
    name += firstName;

    const lastName = prompt('What\'s your last name?');
    name += ' ' + lastName;

     // double check user wants to take quiz
    const confirmed = confirm('Are you sure you are ready to take this quiz ' + name + '? I\'m a pretty complex dude afterall...');
        if(!confirmed) {
             return;
        } else {
            //ask user three questions
         let correctAnswers = 0;

        const pictureQuestion = prompt('Did I take the picture on this page with my phone (Y/N?)?');
        const pictureAnswer = false;
         if(isYes(pictureQuestion) === pictureAnswer) {
          correctAnswers += 1
          
         } 
}; 
    //     // My three yes or no questions:
    //     // Did I take that picture with my phone!
    //     // Am I excited about the umpcoming summer temperatures?
    //     // Would I like to visit Hawaii as soon as possible?