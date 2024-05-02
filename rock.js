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
paper.addEventListener("click", (e)=> {
    computerSelection = getComputerChoice();
    playerSelection = e.target.getAttribute("class");
    playRound(playerSelection, computerSelection);
    playGame();
});
scissors.addEventListener("click", (e)=> {
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
        displayMessage.textContent = "It was a tie";
        return;
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "paper") {
            currentCpuScore += 1;
            updateScore();
            displayMessage.textContent = "You lost! PAPER COVERS ROCK"
            return;
        }
        else if (computerSelection == "scissors") {
            currentPlayerScore += 1;
            updateScore();
            displayMessage.textContent = "You win! ROCK breaks SCISSORS";
            return;
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            currentCpuScore += 1;
            updateScore();
            displayMessage.textContent = "You lose! SCISSORS cuts PAPER";
            return;
        }
        else if (computerSelection == "rock") {
            currentPlayerScore += 1;
            updateScore();
            displayMessage.textContent = "You win! PAPER covers ROCK.";
            return;
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            currentCpuScore += 1;
            updateScore();
            displayMessage.textContent = "You lose! ROCK breaks SCISSORS.";
            return;
        }
        else if (computerSelection == "paper") {
            currentPlayerScore+= 1;
            updateScore();
            displayMessage.textContent = "You win! SCISSORS cuts PAPER.";
            return;
        }
    }
}

function playGame() {
    if (currentCpuScore === 5) {
        displayMessage.textContent = "CPU sored 5. You lost to the computer!";
        currentPlayerScore = 0;
        currentCpuScore = 0;
        updateScore();
    } 
    else if (currentPlayerScore === 5) {
        displayMessage.textContent = "you scored 5. Yon won! Victory at last";
        currentPlayerScore = 0;
        currentCpuScore = 0;
        updateScore();
    }
}