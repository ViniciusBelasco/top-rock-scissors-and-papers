let humanScore = 0;
let computerScore = 0;
const btns = document.querySelectorAll("button")

function getComputerChoice() {
  const aChoices = ["Rock", "Scissors", "Paper"];

  return aChoices[Math.floor(Math.random() * 3)];
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

function playGame(event) {

  const results = document.querySelector(".results");
  const score = document.querySelector(".score");
  const para = document.createElement("p");

  let humanChoice = event.target.textContent.toLowerCase();
  let computerChoice = getComputerChoice().toLowerCase();

  let winner = getWinner(humanChoice, computerChoice);

  para.textContent = roundWinner(winner, humanChoice, computerChoice);

  score.textContent = `Player Score: ${humanScore} X Computer Score: ${computerScore}`

  results.appendChild(para)
  
  const finalResult = document.createElement("p");

  if (humanScore > 4) {
    finalResult.textContent = `Human player win!`;
  } else if (computerScore > 4) {
    finalResult.textContent = `Computer win!`;
  }
  
  results.appendChild(finalResult);

}

function roundWinner(winner, humanChoice, computerChoice) {
  if (winner === "draw") {
    return `No one win! ${humanChoice} draws ${computerChoice}`;
  } else if (winner === humanChoice) {
    humanScore++;
    return `Player wins! ${winner} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `Computer wins! ${winner} beats ${humanChoice}`;
  }
}

btns.forEach(btn => {
  btn.addEventListener("click", playGame)
})