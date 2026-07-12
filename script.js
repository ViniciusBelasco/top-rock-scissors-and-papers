let humanScore = 0
let computerScore = 0

function getComputerChoice() {

    const aChoices = ['Rock', 'Scissors', 'Paper']

    return aChoices[Math.floor( Math.random() * 3 )];
}

function getHumanChoice() {
   return prompt('What do you choose? "Rock", "Scissors" or "Paper"') 
}

function getWinner(choice1, choice2) {

    if (choice1 === choice2) {
        return "draw";
    }

    if (choice1 === "paper") {
        if (choice2 === "rock") {
            return choice1;
        } else {
            return choice2;
        } 
    }

    if (choice1 === "scissors") {
        if (choice2 === "paper") {
            return choice1;
        } else {
            return choice2;
        } 
    }

    if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return choice1;
        } else {
            return choice2;
        } 
    }

}

function playGame( humanChoice, computerChoice) {

    let winner = getWinner(humanChoice.toLowerCase(), computerChoice.toLowerCase());

    if (winner === 'draw') {
        console.log(`Got no winner the game ${winner}`);
    } else if (winner === humanChoice) {
        console.log(`Player wins!`);
        humanScore++;
    } else {
        console.log(`Computer wins!`);
        computerScore++;
    }
    
}

playGame(getHumanChoice(), getComputerChoice());