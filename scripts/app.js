const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;
const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const formElement = document.querySelector("form");
const errorsOutputElement = document.getElementById("config-errors");
const gameArea = document.getElementById("active-game");
const activePlayerName = document.getElementById("active-player");
const gameOverElement = document.getElementById("game-over");

const player1 = document.getElementById("edit-player1");
const player2 = document.getElementById("edit-player2");
const cancelConfigBtnElement = document.getElementById("cancel-config-btn");
const gameStartButton = document.getElementById("start-game-btn");
// const gameFieldElements = document.querySelectorAll("#game-board li");
const gameBoardElement = document.getElementById("game-board");

player1.addEventListener("click", openPlayerConfig);
player2.addEventListener("click", openPlayerConfig);
cancelConfigBtnElement.addEventListener("click", closePlayerConfig);
backdropElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);
gameStartButton.addEventListener("click", startNewGame);

// for (const gameFieldElement of gameFieldElements) {
//   gameFieldElement.addEventListener("click", selectGameField);
// }

gameBoardElement.addEventListener("click", selectGameField);
