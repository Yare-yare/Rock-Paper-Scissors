function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"]; 
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

console.log(getComputerChoice());