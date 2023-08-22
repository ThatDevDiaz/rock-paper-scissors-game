`use strict`;

// Declaring DOM selectors
const rulesBtn = document.getElementById(`rules`);
const rulesOverlay = document.getElementById(`rulesOverlay`);
const closeRules = document.getElementById(`closeRules`);
const gameContainer = document.getElementById(`gameContainer`);
const rock = document.getElementById(`rockBtn`);
const paper = document.getElementById(`paperBtn`);
const scissors = document.getElementById(`scissorsBtn`);

const score = document.getElementById(`score`);

// Declaring JS only variables

let playerScore = 0;
let playerSelection = ``;
let opponentSelection = ``;

// gameState will be the different states the game is in. when initially loading, or when playing again, game state will start at 1. It will become 2 upon selecting rock, paper, or scissors. Game state 3 will be the result screen. Managing game state will make it easier to keep track of dom manipulation.
let gameState = 1;

// function to generate random 1-3 number to determine computer's selection
const generateRandomNumber = () => {
  const min = 1;
  const max = 3;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Function to update score
function updateScore(playerWins) {
  if (playerWins === true) {
    playerScore++;
  } else if (playerWins === false) {
    playerScore--;
  }
  score.innerText = playerScore;
}

// Rules overlay

rulesBtn.addEventListener(`click`, function () {
  rulesOverlay.style.display = `block`;
  closeRules.style.display = `block`;
  rulesBtn.style.display = `none`;
});

closeRules.addEventListener(`click`, function () {
  rulesOverlay.style.display = `none`;
  closeRules.style.display = `none`;
  rulesBtn.style.display = `block`;
});

// Starting score
score.innerText = playerScore;

rock.addEventListener(`click`, function () {
  playerSelection = `rock`;
});
paper.addEventListener(`click`, function () {
  playerSelection = `paper`;
});
scissors.addEventListener(`click`, function () {
  playerSelection = `scissors`;
});
