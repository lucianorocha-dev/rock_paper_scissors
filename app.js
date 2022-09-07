// Randomly return either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    let computerChoice = "Rock";
    return computerChoice;
  } else if (randomNumber === 2) {
    let computerChoice = "Paper";
    return computerChoice;
  } else {
    let computerChoice = "Scissors";
    return computerChoice;
  }
}

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "Paper"
  ) {
    console.log(`You lose. ${computerSelection} beats Rock.`);
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "Scissors"
  ) {
    console.log(`You win! Rock beats ${computerSelection}`);
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "Rock"
  ) {
    console.log("Tie!");
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "Rock"
  ) {
    console.log(`You win! Paper beats ${computerSelection}`);
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "Paper"
  ) {
    console.log("Tie!");
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "Scissors"
  ) {
    console.log(`You lose. ${computerSelection} beats Paper.`);
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "Rock"
  ) {
    console.log(`You lose. ${computerSelection} beats Scissors.`);
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "Paper"
  ) {
    console.log(`You win! Scissors beats ${computerSelection}`);
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "Scissors"
  ) {
    console.log("Tie!");
  }
}

const playerSelection = "rocK";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
