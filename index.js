`use strict`;

// Declaring DOM selectors
const rulesBtn = document.getElementById(`rules`);
const rulesOverlay = document.getElementById(`rulesOverlay`);
const closeRules = document.getElementById(`closeRules`);
const gameContainer = document.getElementById(`gameContainer`);
const rock = document.getElementById(`rockBtn`);
const paper = document.getElementById(`paperBtn`);
const scissors = document.getElementById(`scissorsBtn`);
const body = document.getElementById(`body`);
const bgTriangle = document.getElementById(`bgTriangle`);

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

// Check player selection against computer selection function
// 1 = computer chose rock
// 2 = computer chose paper
// 3 = computer chose scissors

function playerChoice() {
  bgTriangle.classList.add(`hidden`);
  if (playerSelection === 1) {
    rock.classList.add(`ease-in-out`, `duration-700`);
    rock.classList.add(`scale-125`);
  } else if (playerSelection === 2) {
    paper.classList.add(`scale-125`);
  } else {
    scissors.classList.add(`scale-125`);
  }
}

function computerChoice() {
  bgTriangle.classList.add(`hidden`);
  if (computerSelection === 1) {
    rock.classList.add(`ease-in-out`, `duration-700`);
    rock.classList.add(`scale-125`);
  } else if (computerSelection === 2) {
    paper.classList.add(`scale-125`);
  } else {
    scissors.classList.add(`scale-125`);
  }
}

// Rules overlay

rulesBtn.addEventListener(`click`, function () {
  rulesOverlay.style.display = `block`;
  closeRules.style.display = `block`;
  rulesBtn.style.display = `none`;
  body.classList.remove(`from-blue-500`, `to-blue-950`);
  body.classList.add(`bg-gray-700`);
});

closeRules.addEventListener(`click`, function () {
  rulesOverlay.style.display = `none`;
  closeRules.style.display = `none`;
  rulesBtn.style.display = `block`;
  body.classList.remove(`bg-black`);
  body.classList.add(`from-blue-500`, `to-blue-950`);
});

// Starting score
score.innerText = playerScore;

rock.addEventListener(`click`, function () {
  playerSelection = 1;
  playerChoice();
  computerSelection = generateRandomNumber();
  computerChoice();
  if (computerSelection === 1) {
    console.log(`tie`);
  } else if (computerSelection === 2) {
    console.log(`player loses`);
    updateScore(false);
  } else {
    console.log(`computer loses`);
    updateScore(true);
  }
});
paper.addEventListener(`click`, function () {
  playerSelection = 2;
  playerChoice();
  computerSelection = generateRandomNumber();
  computerChoice();
  if (computerSelection === 2) {
    console.log(`tie`);
  } else if (computerSelection === 3) {
    console.log(`player loses`);
    updateScore(false);
  } else {
    console.log(`computer loses`);
    updateScore(true);
  }
});
scissors.addEventListener(`click`, function () {
  playerSelection = 3;
  playerChoice();
  computerSelection = generateRandomNumber();
  computerChoice();
  if (computerSelection === 3) {
    console.log(`tie`);
  } else if (computerSelection === 1) {
    console.log(`player loses`);
    updateScore(false);
  } else {
    console.log(`computer loses`);
    updateScore(true);
  }
});
