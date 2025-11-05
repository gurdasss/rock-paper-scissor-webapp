/*
    I'm thinking about adding shortcut keys to this project.
*/
let userScore = 0;
let compScore = 0;

const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";
const MAX_ROUNDS = 5;

let gameLoop = true;
let currentRound = 1;

let lastUserEnteredVal = ROCK;

function getUserInput(lastEnteredVal) {
    // Assuming that user will always enter a valid choice
    return prompt("Enter your choice: ", lastEnteredVal);
}

function getCompInput() {

    switch (Math.floor(Math.random() * 3)) {
        case 0: return ROCK;
        case 1: return PAPER;
        case 2: return SCISSOR;
    }
    return "???";
}

while (currentRound < MAX_ROUNDS) {
    let userInput = getUserInput(lastUserEnteredVal);
    let compInput = getCompInput();

    if (!userInput) continue;

    if (userInput === compInput) console.log("It's a tie!");
    else if ((userInput === ROCK && compInput === PAPER) ||
        (userInput === PAPER && compInput === SCISSOR)) {
        ++compScore;
        console.log("Computer win!");
    }
    else { ++userScore; console.log("You win!") }

    ++currentRound;
    lastUserEnteredVal = userInput;
}