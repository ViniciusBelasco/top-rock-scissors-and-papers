let humanScore = 0
let computerScore = 0

function getComputerChoice() {

    const aChoices = ['Rock', 'Scissors', 'Paper']

    return aChoices[Math.floor( Math.random() * 3 )];
}
console.log( getComputerChoice() )