let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const aChoices = ["Rock", "Scissors", "Paper"];

  return aChoices[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  return prompt('What do you choose? "Rock", "Scissors" or "Paper"');
}

function getWinner(choice1, choice2) {
  if (choice1 === choice2) {
    return "draw";
  } else if (
    (choice1 === "paper" && choice2 === "rock") ||
    (choice1 === "scissors" && choice2 === "paper") ||
    (choice1 === "rock" && choice2 === "scissors")
  ) {
    return choice1;
  } else {
    return choice2
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice().toLowerCase();
    let winner = getWinner(humanChoice, computerChoice);

    roundWinner(winner, humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log("Human player win!");
  } else if (computerScore > humanScore) {
    console.log("Computer win!");
  } else {
    console.log("Wow, both draw O_O");
  }
}

function roundWinner(winner, humanChoice, computerChoice) {
  if (winner === "draw") {
    console.log(`No one win! ${humanChoice} draws ${computerChoice}`);
  } else if (winner === humanChoice) {
    console.log(`Player wins! ${winner} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`Computer wins! ${winner} beats ${humanChoice}`);
    computerScore++;
  }
}

playGame();
