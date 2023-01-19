# coding-quiz
This challenge wasn't easy, but I tried to do my best.
I used every knowledge we learned about this week.
First I created 3 javascript file, one for the questions, one for the scores and one for the logic. I worked on the logic the most.
First I made variables to acces the elements in the html file. 
I wrote all of my questions and answers and stored them in an array of objects in the question.js file.
I created functions and event listeners to be able to iterate through the questions of this game. You can find more explanation about them in the comments. And then I stored the user input and the scores in the local storage and accessed them on my other javascript page for the highscores and made it visible on the page, creating a new list. I think I've had the most complications with this part and it's still not perfect, but I'm already late with my assignment, so I decided to submit it, just how it is. I've put in a lot of work for this one, and found it really challenging but I think I've learned a lot during the process and it was a very good practise for me.
The features of the application:
- When the start button is clicked, the timer starts to count down from 100 and the questions appear on the screen
- When the right answer is clicked, it plays an audio sound and moves to the next question.
- When the wrong answer is clicked, it plays an audio sound, the user loses 10 seconds of time, and moves to the next question.
- If there are no more questions, the game is finished.
- If there's no more time, the game is finished.
- The remaining time will be the user's score and it will be displayed on the screen.
- The user can write and save their initials and scores.
- If the user goes to the highscores page, their scores and initials will be displayed on the screen.
- If the user clicks on the clear highscores button, the local storage will be cleared.
- The timer stops at 0.

Here's the URL for the deployed application:
https://boxie999.github.io/coding-quiz/index.html
Screenshot of the page:
<img width="1247" alt="Screenshot 2023-01-19 at 11 42 47" src="https://user-images.githubusercontent.com/118014637/213433956-841d301f-2e56-41d6-bcd1-faf41dfa4c23.png">
