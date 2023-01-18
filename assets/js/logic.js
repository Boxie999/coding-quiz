var userScores = [];
var scores;
var currentQuestion;
var counter;
var timer;
var audioCorrect = new Audio('assets/sfx/correct.wav');
var audioIncorrect = new Audio('assets/sfx/incorrect.wav');


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
var initials = document.getElementById('initials').value;

function populateQuestion(currentQuestion) {
  console.log('Populate questions function started.')
  questionsTitle.textContent = currentQuestion.title;
  currentQuestion.choices.forEach((choice) => {
    var newButton = document.createElement('button');
    newButton.textContent = choice;
    newButton.addEventListener('click', function(){
      console.log(choice === currentQuestion.answer);
      if (choice === currentQuestion.answer) {
        questionsList.innerHTML = ""; 
        audioCorrect.play();
        nextQuestion();

      }
      else {
        questionsList.innerHTML = ""; 
        counter -= 10;
        audioIncorrect.play();
        nextQuestion();
      }
    } )
    questionsList.appendChild(newButton);

  })
   
} ;

startButton.addEventListener('click', function() {
 console.log('Start button has been clicked.')
    startScreenElement.setAttribute('class', 'hide');
    questionsContainer.setAttribute('class', 'visible'); 
    
    //show the first question
    currentQuestion = 0;
    populateQuestion(questions[currentQuestion]);
    
   //starts counting from 100
   counter = 100;

  timer = setInterval(function() {
    timerContainer.textContent = counter;  
    counter--; // counts down every second
     
     
     if (counter < 0) {
       endGame();
       clearInterval(timer); //timer stops if it's less then 0
     }
    
    } ,1000 ); }, ); // 1000 ms = 1 second

  
function nextQuestion() {
  currentQuestion++;
  //check if we are on the last question
  if ( currentQuestion < questions.length) {
      populateQuestion(questions[currentQuestion]);
  } else {
      endGame();
  }
  
};

function endGame() {
  // the questions container disappears and the endscreen will be visible
  questionsContainer.setAttribute('class', 'hide'); 
  endScreen.setAttribute('class', 'visible');
  
  //scores.push(counter);
  
  finalScore.textContent = scores;
  console.log(scores);
  clearInterval(timer); //timer stops
   
};

var highScores = {
  scores : scores,
  initials : initials
}

submitButton.addEventListener('click', function(){
  
  
  userScores.push(highScores);
  console.log(highScores);
 


  localStorage.setItem('scores', JSON.stringify(userScores));
  var submitted = alert('You submitted your initials and scores!')
  
  
}) ;   

  

