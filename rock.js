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
    if(playerSelection == computerSelection){
        return "Draw!";
    }

  }
  let playerSelection
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  