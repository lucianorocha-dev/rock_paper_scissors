// Randomly return either 'Rock', 'Paper' or 'Scissors'
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    let computerChoice = "rock";
    return computerChoice;
  } else if (randomNumber === 2) {
    let computerChoice = "paper";
    return computerChoice;
  } else {
    let computerChoice = "scissors";
    return computerChoice;
  }
}

// Play a single round of the game, comparing the player selection against the computer, returning the winner or loser of the round.
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    return "compWin";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "playerWin";
  } else if (
    playerSelection === computerSelection ||
    playerSelection === computerSelection ||
    playerSelection === computerSelection
  ) {
    return "tie";
  } else {
    console.log("Wrong input.");
  }
}

const playerSelection = prompt("Please enter your choice: ").toLowerCase();
const computerSelection = getComputerChoice();

// Call the playRound function to play 5 rounds and keep score

let playerScore = 0;
let computerScore = 0;

function game() {
  let roundResult = playRound(playerSelection, computerSelection);
  if (roundResult === "compWin") {
    console.log(
      `You lose. ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      } beats ${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      }.`
    );
    return computerScore++;
  } else if (roundResult === "playerWin") {
    console.log(
      `You win! ${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      } beats ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      }`
    );
    return playerScore++;
  } else if (roundResult === "tie") {
    console.log("Tie!");
  }
}
game();
