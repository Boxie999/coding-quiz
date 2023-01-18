var highScoresList = document.getElementById('highscores');


var scoresDisplay = JSON.parse(localStorage.getItem('userScores')) || [];
console.log(scoresDisplay);

var newScores = document.createElement('li');
    newScores.textContent = scoresDisplay;
    highScoresList.appendChild(newScores);

     scores.sort( (a,b) => {
    return b.score - a.score;
  }) 