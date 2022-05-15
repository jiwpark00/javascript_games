const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice; // global 
let computerChoice; // global
let result; // global

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult()
})) 

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; 
    console.log(randomNumber);

    if (randomNumber == 1) {
        computerChoice = 'rock';
    }
    if (randomNumber == 2) {
        computerChoice = 'scissors';
    }
    if (randomNumber == 3) {
        computerChoice = 'paper';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if (userChoice == 'rock') {
        if (computerChoice == 'rock') {
            result = 'its a draw!';
        }
        else if (computerChoice == 'scissors') {
            result = 'you win!';
        }

        else {
            result = 'you lost!';
        }

    }
    else if (userChoice == 'scissors') {
        if (computerChoice == 'scissors') {
            result = 'its a draw!';
        }
        else if (computerChoice == 'paper') {
            result = 'you win!';
        }

        else {
            result = 'you lost!';
        }

    }
    else {
        if (computerChoice == 'paper') {
            result = 'its a draw!';
        }
        else if (computerChoice == 'rock') {
            result = 'you win!';
        }

        else {
            result = 'you lost!';
        }

    }

    resultDisplay.innerHTML = result;
}