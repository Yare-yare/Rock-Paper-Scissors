const options = ["rock", "paper", "scissor"];
 


function checkAnswer(promptAnswer,computerSelection){
    if(promptAnswer === "rock" && computerSelection === options[2]){
    return -1;
    }
    else if(promptAnswer === "rock" && computerSelection === options[1]){
    return 1;
    }
    else if(promptAnswer === "paper" && computerSelection === options[0]){
    return -1;
    }
    else if(promptAnswer === "paper" && computerSelection === options[2]){
    return 1;
    }
    else if(promptAnswer === "scissor" && computerSelection === options[1]){
    return -1;
    }
    else if(promptAnswer === "scissor" && computerSelection === options[0]){
    return 1;
    } 

    else{
        return 0;
    }
}

function getComputerChoice(){
    let randomOption = Math.floor(Math.random() * options.length); 
    if(randomOption == 0){
        return options[0];
    }

    else if(randomOption == 1){
        return options[1];
    }

    else{
        return options[2];
    }
  
}

/*
function playRound(playerSelection, computerSelection) {
 if(playerSelection === options[0] && computerSelection === options[2]){
        return "Rock beats Scissors!";
  } 

  else if(playerSelection === options[0]  && computerSelection === options[1]){
    return "Paper beats Rock!";
    }

 
  else if(playerSelection === options[1] && computerSelection === options[0]){
    return "Paper beats Rock!";
    }

  else if(playerSelection === options[1] && computerSelection === options[2]){
    return "Scissors beats Paper!";
    }

  else if(playerSelection === options[2] && computerSelection === options[0]){
    return "Rock beats Scissors!";
    }

  else if(playerSelection === options[2] && computerSelection === options[1]){
    return "Scissors beats Paper!";
    }

  else{
    return "Tie Game!";
  }
 
}
**/ 


/*function game(){
var scoreCounter = 0;
var compScoreCounter = 0;
var roundCounter = 1;
    for(let i = 1; i <= 5; i++){
        let promptAnswer = prompt("Please enter either rock, paper, or scissor: ");
        console.log("Round:  " + roundCounter); 
        let answerOfCheckAnswer = checkAnswer(promptAnswer,getComputerChoice()); //I keep getting an undefined here for some reason.
        if(answerOfCheckAnswer == -1){
            scoreCounter++;
            console.log("Your score since you won: " + scoreCounter);
            }
        else if (answerOfCheckAnswer == 1){
            compScoreCounter++;
            console.log("Computer's score since it won: " + compScoreCounter);
            }
        else{
            console.log("tie");
            }
                roundCounter++;
    }

        if(scoreCounter > compScoreCounter){
            return "You won the game! Human > AI !!!";
        }
    else if (scoreCounter < compScoreCounter){
            return "You lost, the computer won... *sad sigh*"
        }
    else{
        return "It's a tie!";
    }
}
 
console.log(game());*/
