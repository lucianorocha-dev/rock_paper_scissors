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

console.log(getComputerChoice());
