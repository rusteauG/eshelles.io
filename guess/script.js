'use strict';

let score = 20;
let message = '';
let highscore = 0;
let gameOver = false; // Add a flag to track if the game is over
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Generate the initial secret number

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  message = '';
  displayMessage(message);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

  const element = document.querySelector('.number');
  element.style.color = 'white';
  element.style.fontWeight = 'normal';
  element.style.borderRadius = '0';

  element.style.padding = '0';
  element.style.border = '0';
  // Reset the game over flag
  gameOver = false;
  // Generate a new secret number for the new game
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});

secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', function () {
  if (gameOver) {
    // If the game is over, don't process further guesses
    return;
  }

  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '📍 No Number!';
    displayMessage('📍 No Number!');
    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🥓 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').style.color = '#bac34e';
    const element = document.querySelector('.number');
    element.style.color = 'pink';
    element.style.fontWeight = 'bold';
    element.style.borderRadius = '10px';
    element.style.padding = '10px';
    element.style.border = '2px solid orange';
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;

      // Set the game over flag to true
      gameOver = true;
    }

    //when guess is Not equal to secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   //when guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '📉 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  //   //when guess is too low
  // } else {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too Low!';
  //     score = score - 1;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '📉 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});
