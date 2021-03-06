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

/* Play Round */

function playRound (playerSelection, computerSelection) {

   
    if (playerSelection === computerSelection) {
      round++;
      console.log(`It's a draw, no one scores! and you are on round number ${round}`);
      console.log(`The score is ${userScore} - ${computerScore}`);
   }

   else if ((playerSelection === "rock" && computerSelection === "scissors") ||
           (playerSelection === "scissors" && computerSelection === "paper") ||
           (playerSelection === "paper" && computerSelection === "rock")) {
             round++;
             userScore++;
             console.log(`You won. ${playerSelection} beats ${computerSelection}! and you are on round number ${round}`);
             console.log(`The score is ${userScore} - ${computerScore}`);
           }

   else if ((computerSelection === "rock" && playerSelection === "scissors") ||
           (computerSelection === "scissors" && playerSelection === "paper") ||
           (computerSelection === "paper" && playerSelection === "rock")) {
             round++;
             computerScore++;
             console.log(`You lost, ${computerSelection} beats ${playerSelection}! and you are on round number ${round}`);
             console.log(`the score is ${userScore} - ${computerScore}`);              
           } 
 }  

 function game () {
    let playerSelection, computerSelection, result;
    
    for (let i = 0; i < 5; i++) {
      playerSelection = userPlay()     
      computerSelection = computerPlay();    
      console.log(`User Plays ${playerSelection}, Computer Plays ${computerSelection}`);
      result = (playRound(playerSelection, computerSelection));
 
      if (result) {
      userScore += 1;      
      } else if (result === false) {
      computerScore += 1;
      } 
 
      
    }
 
    console.log(`Current Score - Player: ${userScore}, Computer: ${computerScore}`);
 
      if (userScore > computerScore) {
      return "User Wins!"
      } else if (computerScore > userScore) {
      return "Compuer Wins! You lose :("
      } else {
      return "No one wins! Play again?"
      }
    
  }
 
  console.log(game());

