let computerSelection;
let playerSelection;
let playerScore = 0;
let cpuScore = 0;

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
    
    if(playerSelection.toUpperCase() == computerSelection){
        return `Oops! It is a draw. You selected same thing. SCORE: ${playerScore} - ${cpuScore}`;
    }
    else if (playerSelection.toUpperCase() == "ROCK") {
        if (computerSelection == "PAPER") {
            cpuScore += 1;
            return `You lose! PAPER covers ROCK.   SCORE: ${playerScore} - ${cpuScore}`;
        }
        else if (computerSelection == "SCISSORS") {
            playerScore += 1;
            return `You win! ROCK breaks SCISSORS.   SCORE: ${playerScore} - ${cpuScore}`;
        }
    }
    else if (playerSelection.toUpperCase() == "PAPER") {
        if (computerSelection == "SCISSORS") {
            cpuScore += 1;
            return `You lose! SCISSORS cuts PAPER.   SCORE: ${playerScore} - ${cpuScore}`;
        }
        else if (computerSelection == "ROCK") {
            playerScore += 1;
            return `You win! PAPER covers ROCK.   SCORE: ${playerScore} - ${cpuScore}`;
        }
    }
    else if (playerSelection.toUpperCase() == "SCISSORS") {
        if (computerSelection == "ROCK") {
            cpuScore += 1;
            return `You lose! ROCK breaks SCISSORS.   SCORE: ${playerScore} - ${cpuScore}`;
        }
        else if (computerSelection == "PAPER") {
            playerScore += 1;
            return `You win! SCISSORS cuts PAPER.   SCORE: ${playerScore} - ${cpuScore}`;
        }
    }
}

function playGame() {
    alert("Welcome to the game. There would be 5 rounds. Please type either Rock, Paper or Scissors ONLY else the game will malfunction")
    for (let i = 1; i <= 5; i++) {
        playerSelection = prompt(`Round ${i}! Rock, Papar or Scissors`);
        computerSelection = getComputerChoice();
        alert(playRound(playerSelection,computerSelection));
    }
}

playGame();
