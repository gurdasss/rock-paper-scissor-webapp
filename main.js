/*
    I'm thinking about adding shortcut keys to this project.
*/
const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";

const userHand = document.querySelector("#user-hand");
const compHand = document.querySelector("#comp-hand");

function setHand(hand, choice, type) {
  hand.setAttribute(
    "src",
    "assets/rps-kawaii_" + choice.toLowerCase() + type.toUpperCase() + ".png"
  );
}

const setUserHand = (hand) => setHand(userHand, hand, "B");
const setCompHand = (hand) => setHand(compHand, hand, "R");

function getCompInput() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return ROCK;
    case 1:
      return PAPER;
    case 2:
      return SCISSOR;
  }
  return "???";
}

const userScoreText = document.querySelector("#user-score");
const compScoreText = document.querySelector("#comp-score");
let userScore = 0;
let compScore = 0;

function playRound(userChoice, compChoice) {
  setCompHand(compChoice);
  setUserHand(userChoice);

  /* Tie! */
  if (userChoice === compChoice);
  else if (
    (userChoice === ROCK && compChoice === PAPER) ||
    (userChoice === PAPER && compChoice === SCISSOR) ||
    (userChoice === SCISSOR && compChoice === ROCK)
  )
    ++compScore;
  else ++userScore;

  userScoreText.textContent = userScore;
  compScoreText.textContent = compScore;
}

const rockButton = document.querySelector("#rock-btn");
rockButton.addEventListener("click", () => playRound(ROCK, getCompInput()));

const paperButton = document.querySelector("#paper-btn");
paperButton.addEventListener("click", () => playRound(PAPER, getCompInput()));

const scissorButton = document.querySelector("#scissor-btn");
scissorButton.addEventListener("click", () =>
  playRound(SCISSOR, getCompInput())
);