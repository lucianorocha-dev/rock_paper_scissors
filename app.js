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
    return `You lose. ${computerSelection} beats Rock.`;
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "Scissors"
  ) {
    return `You win! Rock beats ${computerSelection}`;
  } else if (
    playerSelection.toLowerCase() === "rock" &&
    computerSelection === "Rock"
  ) {
    return "Tie!";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "Rock"
  ) {
    return `You win! Paper beats ${computerSelection}`;
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "Paper"
  ) {
    return "Tie!";
  } else if (
    playerSelection.toLowerCase() === "paper" &&
    computerSelection === "Scissors"
  ) {
    return `You lose. ${computerSelection} beats Paper.`;
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "Rock"
  ) {
    return `You lose. ${computerSelection} beats Scissors.`;
  } else if (
    playerSelection.toLowerCase() === "scissors" &&
    computerSelection === "Paper"
  ) {
    return `You win! Scissors beats ${computerSelection}`;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "Scissors"
  ) {
    return "Tie!";
  }
}

const playerSelection = "rocK";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
