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

}

let computerSelection = getComputerChoice();
  