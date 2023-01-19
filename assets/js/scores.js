
//accessing the html elements 
var highScoresList = document.getElementById('highscores');
var clearHighscores = document.getElementById('clear');
//getting the data from local storage
var scoresDisplay = JSON.parse(localStorage.getItem('scores'));

//creating a new list
var newScores = document.createElement('li');
//setting the value of the local storage as text    
newScores.textContent = scoresDisplay;
//appending the list of scores to the highscores list    
highScoresList.appendChild(newScores);

//click event listener for clear button
clearHighscores.addEventListener('click', function (){
  //clears the scores from local storage  
  localStorage.removeItem('scores');
  
}) ;   