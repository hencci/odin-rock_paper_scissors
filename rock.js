let computerSelection;
let playerSelection;

function getComputerChoice() {
    randNum = Math.floor(Math.random() * 3)+ 1;
        if (randNum == 1) {
            return "ROCK";
          } else if (randNum == 2) {
            return "PAPER";
          } else {
            return "SCISSORS";
          } 
    }

function playRound(playerSelection, computerSelection) {
    // your code here!
    
    if(playerSelection.toUpperCase() == computerSelection){
        return "Draw!";
    }
    else if (playerSelection.toUpperCase() == "ROCK") {
        return (computerSelection == "PAPER")? "You lose! PAPER covers ROCK" : "You win! ROCK breaks SCISSORS"
    }
    else if (playerSelection.toUpperCase() == "PAPER") {
        return (computerSelection == "SCISSIORS")? "You lose! SCISSORS cuts PAPER" : "You win! PAPER covers ROCK"
    }
    else if (playerSelection.toUpperCase() == "SCISSORS") {
        return (computerSelection == "ROCK")? "You lose! ROCK breaks SCISSORS" : "You win! SCISSORS cuts PAPER"
    }
}

function playGame() {
    alert("Welcome to the game. There would be 5 rounds.")
    for (let i = 1; i <= 5; i++) {
        playerSelection = prompt(`Round ${i}! Rock, Papar or Scissors`);
        computerSelection = getComputerChoice();
        alert(playRound(playerSelection,computerSelection));
    }
}

playGame();
  