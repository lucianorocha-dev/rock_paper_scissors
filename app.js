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

let playerScore = 0;
let computerScore = 0;

// Capitalize when showing Rock, Paper, Scissors. Makes the cose cleaner.
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Play a single round of the game, comparing the player selection against the computer, announcing the winner or loser of the round.
function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "rock")
  ) {
    computerScore++;
    console.log(
      `You lose this round. ${capitalize(computerSelection)} beats ${capitalize(
        playerSelection
      )}.`
    );
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    console.log(
      `You win this round! ${capitalize(playerSelection)} beats ${capitalize(
        computerSelection
      )}.`
    );
  } else if (
    playerSelection === computerSelection ||
    playerSelection === computerSelection ||
    playerSelection === computerSelection
  ) {
    console.log("Tie!");
  } else {
    console.log("Wrong input.");
  }
}

// Play 5 rounds of the game, keeping score and anouncing the game winner.
let roundCounter = 1;
for (let i = 0; i < 5; i++) {
  console.log(`\nRound ${roundCounter}`); // Show round number
  roundCounter++;

  const playerSelection = prompt("Please enter your choice: ").toLowerCase();
  const computerSelection = getComputerChoice();
  console.log(`Computer chose ${capitalize(computerSelection)}`);
  console.log(`Player chose ${capitalize(playerSelection)}`);

  function game() {
    playRound(playerSelection, computerSelection);
  }
  game();
}

if (playerScore > computerScore) {
  console.log("\nPlayer wins game!");
} else if (playerScore < computerScore) {
  console.log("\nComputer wins game!");
}
