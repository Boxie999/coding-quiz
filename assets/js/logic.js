var startButton = document.querySelector('#start');
//questionsContainer
//questionsTitle
//choicesContainer
//...

function populateQuestion(question) {
   var question = question.title;
   var choices = question.choices;
   
   choicesContainer.innerHTML = '';
   //questionTitle.textContent = question;
   var choicesList = document.createElement('ul');
   for ( let i = 0; i < choices.length; i++) {
    var choice = document.createElement('li');
    choice.textContent = choices[i];
    choicesList.appendChild(choice);
    //choicesConatiner.appendChild(choicesList)
   }
   
}

startButton.addEventListener('click')