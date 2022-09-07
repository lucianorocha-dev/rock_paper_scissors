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
    return `You lose. ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    } beats ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    }.`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    }`;
  } else if (
    playerSelection === computerSelection ||
    playerSelection === computerSelection ||
    playerSelection === computerSelection
  ) {
    return "Tie!";
  }
}

const playerSelection = "Rock".toLowerCase();
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

// function playRound(playerSelection, computerSelection) {
//     if (playerSelection === "rock" && computerSelection === "Paper") {
//       return `You lose. ${computerSelection} beats Rock.`;
//     } else if (playerSelection === "rock" && computerSelection === "Scissors") {
//       return `You win! Rock beats ${computerSelection}`;
//     } else if (playerSelection === "rock" && computerSelection === "Rock") {
//       return "Tie!";
//     } else if (playerSelection === "paper" && computerSelection === "Rock") {
//       return `You win! Paper beats ${computerSelection}`;
//     } else if (playerSelection === "paper" && computerSelection === "Paper") {
//       return "Tie!";
//     } else if (playerSelection === "paper" && computerSelection === "Scissors") {
//       return `You lose. ${computerSelection} beats Paper.`;
//     } else if (playerSelection === "scissors" && computerSelection === "Rock") {
//       return `You lose. ${computerSelection} beats Scissors.`;
//     } else if (playerSelection === "scissors" && computerSelection === "Paper") {
//       return `You win! Scissors beats ${computerSelection}`;
//     } else if (
//       playerSelection === "scissors" &&
//       computerSelection === "Scissors"
//     ) {
//       return "Tie!";
//     }
//   }

//   const playerSelection = "rocK";
//   const computerSelection = getComputerChoice();
//   console.log(playRound(playerSelection, computerSelection));
