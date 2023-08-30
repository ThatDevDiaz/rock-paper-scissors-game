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
const text = document.getElementById(`gameText`);
const score = document.getElementById(`score`);
const playAgainBtn = document.getElementById(`playAgain`);

// Declaring JS only variables

let playerScore = 0;
let playerSelection = ``;
let opponentSelection = ``;
let gameEnd;

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
    if (playerScore <= 0) {
      return (playerScore = 0);
    } else {
      playerScore--;
    }
  }
  score.innerText = playerScore;
}

// play again function

function continueGame() {
  rock.classList.remove(`shadow-green-600`, `shadow-xl`, `rounded-full`);
  rock.classList.remove(`shadow-red-600`, `shadow-xl`, `rounded-full`);
  paper.classList.remove(`shadow-green-600`, `shadow-xl`, `rounded-full`);
  paper.classList.remove(`shadow-red-600`, `shadow-xl`, `rounded-full`);
  scissors.classList.remove(`shadow-green-600`, `shadow-xl`, `rounded-full`);
  scissors.classList.remove(`shadow-red-600`, `shadow-xl`, `rounded-full`);
  rock.classList.remove(`scale-125`);
  paper.classList.remove(`scale-125`);
  scissors.classList.remove(`scale-125`);
  playAgainBtn.classList.add(`hidden`);
  text.classList.add(`hidden`);
}

// show play again button
function playAgainShow() {
  playAgainBtn.classList.remove(`hidden`);
}

// Check player selection against computer selection function
// 1 = computer chose rock
// 2 = computer chose paper
// 3 = computer chose scissors

function playerChoice() {
  if (playerSelection === 1) {
    rock.classList.add(`ease-in-out`, `duration-700`);
    rock.classList.add(`scale-125`);
  } else if (playerSelection === 2) {
    paper.classList.add(`ease-in-out`, `duration-700`);
    paper.classList.add(`scale-125`);
  } else {
    scissors.classList.add(`ease-in-out`, `duration-700`);
    scissors.classList.add(`scale-125`);
  }
}

function computerChoice() {
  if (computerSelection === 1) {
    rock.classList.add(`ease-in-out`, `duration-700`);
  } else if (computerSelection === 2) {
    paper.classList.add(`ease-in-out`, `duration-700`);
  } else {
    scissors.classList.add(`ease-in-out`, `duration-700`);
  }
}

// Play again button onclick event

playAgainBtn.addEventListener(`click`, function () {
  continueGame();
  gameEnd = false;
});

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
  if (gameEnd === true) {
    return;
  }
  playerSelection = 1;
  playerChoice();
  computerSelection = generateRandomNumber();
  computerChoice();
  if (computerSelection === 1) {
    text.classList.remove(`hidden`);
    text.innerText = `You tied!`;
  } else if (computerSelection === 2) {
    text.classList.remove(`hidden`);
    text.innerText = `You Lost!`;
    updateScore(false);
    rock.classList.add(`shadow-red-600`, `shadow-xl`, `rounded-full`);
  } else {
    text.classList.remove(`hidden`);
    text.innerText = `You Win!`;
    updateScore(true);
    rock.classList.add(`shadow-green-600`, `shadow-xl`, `rounded-full`);
  }
  playAgainShow();
  gameEnd = true;
});
paper.addEventListener(`click`, function () {
  if (gameEnd === true) {
    return;
  }
  playerSelection = 2;
  playerChoice();
  computerSelection = generateRandomNumber();
  computerChoice();
  if (computerSelection === 2) {
    text.classList.remove(`hidden`);
    text.innerText = `You tied!`;
  } else if (computerSelection === 3) {
    text.classList.remove(`hidden`);
    text.innerText = `You Lost!`;
    updateScore(false);
    paper.classList.add(`shadow-red-600`, `shadow-xl`, `rounded-full`);
  } else {
    text.classList.remove(`hidden`);
    text.innerText = `You Win!`;
    updateScore(true);
    paper.classList.add(`shadow-green-600`, `shadow-xl`, `rounded-full`);
  }
  playAgainShow();
  gameEnd = true;
});
scissors.addEventListener(`click`, function () {
  if (gameEnd === true) {
    return;
  }
  playerSelection = 3;
  playerChoice();
  computerSelection = generateRandomNumber();
  computerChoice();
  if (computerSelection === 3) {
    text.classList.remove(`hidden`);
    text.innerText = `You tied!`;
  } else if (computerSelection === 1) {
    text.classList.remove(`hidden`);
    text.innerText = `You Lost!`;
    updateScore(false);
    scissors.classList.add(`shadow-red-600`, `shadow-xl`, `rounded-full`);
  } else {
    text.classList.remove(`hidden`);
    text.innerText = `You Win!`;
    updateScore(true);
    scissors.classList.add(`shadow-green-600`, `shadow-xl`, `rounded-full`);
  }
  playAgainShow();
  gameEnd = true;
});
