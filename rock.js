let computerSelection;
let playerSelection;
let currentPlayerScore = 0;
let currentCpuScore = 0;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const playerScore = document.querySelector(".playerScore");
const cpuScore = document.querySelector(".cpuScore");
const displayMessage = document.querySelector("#displayMessage");

playerScore.textContent = currentPlayerScore;
cpuScore.textContent = currentCpuScore;

function updateScore() {
    playerScore.textContent = currentPlayerScore;
    cpuScore.textContent = currentCpuScore;
}

rock.addEventListener("click", (e)=> {
    computerSelection = getComputerChoice();
    playerSelection = e.target.getAttribute("class");
    playRound(playerSelection, computerSelection);
    playGame();
});

function getComputerChoice() {
    randNum = Math.floor(Math.random() * 3)+ 1;
        if (randNum == 1) {
            return "rock";
          } else if (randNum == 2) {
            return "paper";
          } else {
            return "scissors";
          } 
    }

function playRound(playerSelection, computerSelection) {
    
    if(playerSelection == computerSelection){
        return `Oops! It is a draw. You selected same thing. SCORE: ${playerScore} - ${cpuScore}`;
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            cpuScore += 1;
            return `You lose! PAPER covers ROCK.   SCORE: ${playerScore} - ${cpuScore}`;
        }
        else if (computerSelection == "scissors") {
            playerScore += 1;
            return `You win! ROCK breaks SCISSORS.   SCORE: ${playerScore} - ${cpuScore}`;
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            cpuScore += 1;
            return `You lose! SCISSORS cuts PAPER.   SCORE: ${playerScore} - ${cpuScore}`;
        }
        else if (computerSelection == "rock") {
            playerScore += 1;
            return `You win! PAPER covers ROCK.   SCORE: ${playerScore} - ${cpuScore}`;
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            cpuScore += 1;
            return `You lose! ROCK breaks SCISSORS.   SCORE: ${playerScore} - ${cpuScore}`;
        }
        else if (computerSelection == "paper") {
            playerScore += 1;
            return `You win! SCISSORS cuts PAPER.   SCORE: ${playerScore} - ${cpuScore}`;
        }
    }
}

function playGame() {
    if (cpuScore === 5) {
        displayMessage.textContent = "You lost to the computer!";
        currentPlayerScore = 0;
        currentCpuScore = 0;
        updateScore();
    } 
    else if (playerScore === 5) {
        displayMessage.textContent = "Yon won! Victory at last";
        currentPlayerScore = 0;
        currentCpuScore = 0;
        updateScore();
    }
}