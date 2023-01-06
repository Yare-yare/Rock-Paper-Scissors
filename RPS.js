const options = ["rock", "paper", "scissor"];

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

function checkAnswer(promptAnswer,computerSelection){
    smallBoxRecord.textContent = "Ai's Choice Of Weopon: " + computerSelection; //prints the computer choice in box
    if(promptAnswer === 0 && computerSelection === options[2]){
        wordsInCard.textContent = "Good choice!, Rock beats Scissors!!";
        humanScoreCounter++;
        numberOfWins.textContent = humanScoreCounter; 
    }
    else if(promptAnswer === 0 && computerSelection === options[1]){
        wordsInCard.textContent = "Looks can be decieving, Paper > Rock...";
        aiScoreCounter++;
        numberOfLoses.textContent = aiScoreCounter; 
    }
    else if(promptAnswer ===  1 && computerSelection === options[0]){
        wordsInCard.textContent = "Fair win, Paper is magically superior!";
        humanScoreCounter++;
        numberOfWins.textContent = humanScoreCounter; 

    }
    else if(promptAnswer === 1 && computerSelection === options[2]){
       wordsInCard.textContent = "Mighty Scissors slash away vicory here...";
       aiScoreCounter++;
       numberOfLoses.textContent = aiScoreCounter; 
    }
    else if(promptAnswer === 2 && computerSelection === options[1]){
       wordsInCard.textContent = "Smart chioce! Scissors are a great first weopon!";
       humanScoreCounter++;
       numberOfWins.textContent = humanScoreCounter; 
    }
    else if(promptAnswer === 2 && computerSelection === options[0]){
       wordsInCard.textContent = "There is only so much the mighty Rock could do....."; 
       aiScoreCounter++;
       numberOfLoses.textContent = aiScoreCounter;  
    } 

    else{
        wordsInCard.textContent = "A tie with an ai? Have honor my friend...";
        tie++;
        whenTheyBothTie.textContent = tie; //recordes the number of ties in the game.
    }

    rounds++;
    number.textContent = rounds;

    //what happens when the game ends!
    if(rounds >= 5){
        if(humanScoreCounter > aiScoreCounter){
            wordsInCard.textContent = "Congrats! You have proven yourself worthy, Ai is truely no match!";
        };
        if(aiScoreCounter > humanScoreCounter){
            wordsInCard.textContent = "The machine has bested you... trying to find the words to express utter sadness..";
        }

        if(aiScoreCounter == humanScoreCounter){
            wordsInCard.textContent = "Tie game? Definatly a Huge ego boost for the ai..! ";
        }
    };
}
        


var humanScoreCounter = 0;
var aiScoreCounter = 0;
var rounds = 0;
var tie = 0;

            //tally
const tally = document.querySelector('.tally');
const smallBoxRecord = document.createElement('div');
smallBoxRecord.classList.add('smallBoxRecord');
tally.appendChild(smallBoxRecord);


            //card
const card = document.querySelector('.card');
const wordsInCard = document.createElement('div');
wordsInCard.classList.add('wordsInCard');
card.appendChild(wordsInCard);


            //tie
const tie_ = document.querySelector('.tie_');
const whenTheyBothTie = document.createElement('div');
whenTheyBothTie.classList.add('whenTheyBothTie');
whenTheyBothTie.textContent = tie;
tie_.appendChild(whenTheyBothTie);


            //aiScoreCounter(loses)
const loses = document.querySelector('.loses');
const numberOfLoses = document.createElement('div');
numberOfLoses.classList.add('numberOfLoses');
numberOfLoses.textContent = " " + aiScoreCounter;
loses.appendChild(numberOfLoses);

            //humanScoreCounter(wins)
const wins = document.querySelector('.wins');
var numberOfWins = document.createElement('div'); //creating a div, it's going to be a number 
numberOfWins.classList.add('numberOfWins');
numberOfWins.textContent = " " + humanScoreCounter;
wins.appendChild(numberOfWins);


            //roundCounter (rounds)
const roundCounter = document.querySelector('.roundCounter');
const number = document.createElement('div');
number.classList.add('number');
number.textContent = rounds; //I changed this from a zero (1) to rounds, so that I could use it to increment.  
roundCounter.appendChild(number);


             //ROCK
const Rock = document.querySelector('.Rock'); 
Rock.addEventListener('click', () => {
    if(rounds <= 4){
        checkAnswer(0,getComputerChoice());
    }
}); 


             //PAPER
const Paper = document.querySelector('.Paper');
Paper.addEventListener('click',() => {
   if(rounds <= 4){
        checkAnswer(1,getComputerChoice());
    }
});

            //Scissor
const Scissor = document.querySelector('.Scissor');
Scissor.addEventListener('click',() => {
   if(rounds <= 4){
        checkAnswer(2,getComputerChoice());
    }
});




