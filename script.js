'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = ' 🎉 Correct Number!';
document.querySelector('.number').textContent = 17;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log((document.querySelector('.guess').value = 23));
*/

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    //when the input field is empty
    document.querySelector('.message').textContent = ' ⛔ No number!';
  } else if (guess === secretNumber) {
    //when the person guesses the secret number
    document.querySelector('.message').textContent = ' 🎉 Correct Number!';
  } else if (guess > secretNumber) {
    //when the guessed number is too high than the secret number
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭 You lost the game.';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    //when the guessed number is too low than the secret number
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😭 You lost the game.';
      document.querySelector('.score').textContent = 0;
    }
  }
});
