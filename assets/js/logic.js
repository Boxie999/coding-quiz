
var scores = []; //storing the scores and initials here
var currentQuestion;
var counter;
var timer;
var audioCorrect = new Audio('assets/sfx/correct.wav');
var audioIncorrect = new Audio('assets/sfx/incorrect.wav');

// variables to reach the html elements
var startScreenElement = document.getElementById('start-screen');
var startButton = document.getElementById('start');
var questionsList = document.querySelector('#questions-list');
var questionsTitle = document.getElementById('question-title');
var choicesContainer = document.querySelector('#choices');
var timerContainer = document.querySelector('#time');
var questionsContainer = document.querySelector('#questions');
var endScreen = document.getElementById('end-screen');
var finalScore = document.getElementById('final-score');
var submitButton = document.getElementById('submit');

//this function is showing the questions on the screen
function populateQuestion(currentQuestion) {
  //it shows the current question
  questionsTitle.textContent = currentQuestion.title;
  
  currentQuestion.choices.forEach((choice) => {
    //creates new button
    var newButton = document.createElement('button');
    //assigning the current value for the new buttons
    newButton.textContent = choice;
    //click event listener for the buttons
    newButton.addEventListener('click', function(){
      //if the answer is true it moves to the next question
      //and plays the audio and clears the questionlist
      if (choice === currentQuestion.answer) {
        questionsList.innerHTML = ""; 
        audioCorrect.play();
        nextQuestion();

      }
      //if the answer is wrong it removes ten seconds from the timer
      //clears the inner html, plays the audio and moves to the next question
      else {
        questionsList.innerHTML = ""; 
        counter -= 10;
        audioIncorrect.play();
        nextQuestion();
      }
    } )
    //appending the buttons to the questions list
    questionsList.appendChild(newButton);

  })
   
} ;

//click event listener for the start button
startButton.addEventListener('click', function() {
 //startsceen disappears and the first question is visible
    startScreenElement.setAttribute('class', 'hide');
    questionsContainer.setAttribute('class', 'visible'); 
    
    //show the first question
    currentQuestion = 0;
    //it moves to the next question, the index is currentquestion
    //using the popuatequestion function with currentquestion index
    populateQuestion(questions[currentQuestion]);
    
   //starts counting from 100
   counter = 100;
  //setting timer
  timer = setInterval(function() {
    //assigning the value of timer as textcontent, so it's visible on screen
    timerContainer.textContent = counter;  
    counter--; // counts down every second
     
     
     if (counter < 0) {
       endGame();
       clearInterval(timer); //timer stops if it's less then 0
     }
    
    } ,1000 ); }, ); // 1000 ms = 1 second

  
function nextQuestion() {
  //adds one more question at the time
  currentQuestion++;
  //check if we are on the last question
  if ( currentQuestion < questions.length) {
      populateQuestion(questions[currentQuestion]);
  } else {
    //if there's no more question then it's endgame
    endGame();
  }
  
};

function endGame() {
  // the questions container disappears and the endscreen will be visible
  questionsContainer.setAttribute('class', 'hide'); 
  endScreen.setAttribute('class', 'visible');
  //adding the value of counter to the scores array
  scores.push(counter);
  //it will show the final score on the screen
  finalScore.textContent = scores;
  
  clearInterval(timer); //timer stops
   
};



//function for the submit button
submitButton.addEventListener('click', function(){
var initials = document.getElementById('initials').value;
//it stores the user input(initials) in the scores array
scores.push(initials);  
//I store the scores and initials in the local storage  
localStorage.setItem('scores', JSON.stringify(scores));
//a message will come up that the user submitted their scores and initials
var submitted = alert('You submitted your initials and scores!')
  
  
}) ;   

  

