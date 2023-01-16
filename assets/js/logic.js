

var score = 0;
var currentQuestion;
var counter;
var timer;

console.log(questions[2].title);

var startScreenElement = document.getElementById('start-screen');
var startButton = document.getElementById('start');
var questionsContainer = document.getElementById('questions');
var questionsTitle = document.querySelector('#question-title');
var choicesContainer = document.querySelector('#choices');
var timerContainer = document.querySelector('#time');
var choicesList = document.querySelector('#choices-list')

 function populateQuestion(questions) {
  choicesContainer.innerHTML = '';
  
  for ( var i = 0; i < questions.length; i++) {
    
  
    questionsTitle = questionsTitle.textContent = questions[i].title;
    
    var choice = document.createElement('li');
    console.log(choice);    

    choice.textContent = questions[i].choices;
   

    choicesList.appendChild(choice);
   
   choicesContainer.appendChild(choicesList);
  }
  
} ;

function startQuiz () {
  
  
  console.log('Start button has been clicked.')
    startScreenElement.setAttribute('class', 'hide');
    questionsContainer.setAttribute('class', 'visible'); 
    populateQuestion(questions[currentQuestion]);
    console.log(questions[currentQuestion]);
    //show the first question
    currentQuestion = 0;
}
counter = 100;

  timer = setInterval(function(){
    timerContainer.textContent = counter;  
    counter--;
     console.log(timerContainer);
     console.log(counter);
       //set timerContainer text to counter
     
     
     if (counter <= 0) {
       //endGame();
       clearInterval(timer);
     }
    
  },1000 );


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
   //when the game ends it should display their score and give the user the ability to save their scores and initials
   // hide questionsContainer;
   // show endscreen container
   //assign score to finalscore container
   //reset the timer, clearInterval(timer)

};







function saveHighscore (initial) {
  //get the current highscore value from local storage
  //json parse current highscores from local storage, this will be an array of object
  //push initial + score to the array
  //order the array from highest score to lowest
  //json stringify then save back to local storage
}
//another click event listener for choices
  // check answer
  // if correct, call nextQuestion()
  // if wrong, -10s, call nextQuestion()

  //click event listener to submit button
  //var initial = initialInput.value.trim();
  //saveHighscore(initial)
  //redirect to highscore page 

  startButton.addEventListener('click', startQuiz);