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
  if (playerSelection === "rock" && computerSelection === "Paper") {
    console.log(`You lose. ${computerSelection} beats ${playerSelection}.`);
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === "rock" && computerSelection === "Rock") {
    console.log("Tie!");
  } else if (playerSelection === "paper" && computerSelection === "Rock") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else if (playerSelection === "paper" && computerSelection === "Paper") {
    console.log("Tie!");
  } else if (playerSelection === "paper" && computerSelection === "Scissors") {
    console.log(`You lose. ${computerSelection} beats ${playerSelection}.`);
  } else if (playerSelection === "scissors" && computerSelection === "Rock") {
    console.log(`You lose. ${computerSelection} beats ${playerSelection}.`);
  } else if (playerSelection === "scissors" && computerSelection === "Paper") {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "Scissors"
  ) {
    console.log("Tie!");
  }
}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// playerSelection.toLowerCase() === "rock"
