 /* Game Logic */

 let round = 0;
 let userScore = 0;
 let computerScore = 0;

 let playerSelection = userPlay()
 let computerSelection = computerPlay();

 /* User Input */

function userPlay() {
    let userInput = window.prompt('What is your choice? Rock, Paper or Scissors?').toLowerCase();
 
    if (userInput.includes('rock') || userInput.includes('paper') || userInput.includes('scissors')) {
        return (userInput);
    } else {
        alert('Are sure?');
        userInput = prompt('What is your choice? Rock, Paper or Scissors?').toLowerCase();
        return (userInput);
    };
 };

 /* computer selection */

 function computerPlay() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
 
    if (randomNumber == 1) { return "rock"}
 
    else if (randomNumber== 2) { return "paper"}
 
    else (randomNumber == 3); {return "scissors"}
 
  }