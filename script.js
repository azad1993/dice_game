'use strict';

const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const playerOne = document.getElementById('score--0');
const playerTwo = document.getElementById('score--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const playerOneCurrent = document.getElementById('current--0');
const playerTwoCurrent = document.getElementById('current--1');
const image = document.querySelector('.dice');
image.classList.add('hidden');
let currentscore, activePlayer, scores, playing;

let init = function () {
  scores = [0, 0];
  currentscore = 0;
  activePlayer = 0;
  playing = true;
  playerOne.textContent = 0;
  playerTwo.textContent = 0;
  playerOneCurrent.textContent = 0;
  playerTwoCurrent.textContent = 0;
  image.classList.add('hidden');
  player0.classList.remove('player--winner')
  player1.classList.remove('player--winner')
  player0.classList.add('player--active')
  player1.classList.remove('player--active')
};
init()

let switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentscore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};


  

rollDice.addEventListener('click', function () {
  if (playing) {
    const number = Math.floor(Math.random() * 6 + 1);
    image.classList.remove('hidden');
    image.src = `dice-${number}.png`;

    if (number != 1) {
      currentscore += number;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentscore;
    } else {
      switchPlayer();
    }
  }
});

hold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentscore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      image.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});
newGame.addEventListener('click', init)
