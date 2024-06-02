'use strict';

//console.log('Hello World');

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice;
    const val = Math.trunc(Math.random() * 10) + 1;
    if(val < 5){
        choice = 'rock';
    }else if(val === 5){
        choice = 'paper';
    }else if(val <= 10){
        choice = 'scissors';
    }

    return choice;
}

function getHumanChoice(){
    const userChoice = prompt(`Let's play Rock, paper, Scissors!
    Pick one among the following
    rock
    paper
    scissors`);

    return userChoice.toLowerCase();
}

function playRound(){
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    
    if(humanSelection === 'rock' && computerSelection === 'paper'){
        computerScore += 1;
        console.log(`You lose ${computerSelection} beats ${humanSelection}`);            
        
    }else if(humanSelection === 'rock' && computerSelection === 'rock'){
        console.log(`It's a Draw!`);
        
    }else if(humanSelection === 'rock' && computerSelection === 'scissors'){
        humanScore += 1;
        console.log(`You win ${humanSelection} beats ${computerSelection}`);
        
    }

    if(humanSelection === 'paper' && computerSelection === 'scissors'){
        computerScore += 1;
        console.log(`You lose ${computerSelection} beats ${humanSelection}`);
        
    }else if(humanSelection === 'paper' && computerSelection === 'paper'){
        console.log(`It's a Draw!`);
        
    }else if(humanSelection === 'paper' && computerSelection === 'rock'){
        humanScore += 1;
        console.log(`You win ${humanSelection} beats ${computerSelection}`);
        
    }

    if(humanSelection === 'scissors' && computerSelection === 'rock'){
        computerScore += 1;
        console.log(`You lose ${computerSelection} beats ${humanSelection}`);
        
    }else if(humanSelection === 'scissors' && computerSelection === 'scissors'){
        console.log(`It's a Draw!`);
        
    }else if(humanSelection === 'scissors' && computerSelection === 'paper'){
        humanScore += 1;
        console.log(`You win ${humanSelection} beats ${computerSelection}`);
    }
}

function playGame(){
    for(let i = 0; i < 5; i++){
        playRound();
    }

    console.log(`Game over! User Score: ${humanScore} Computer Score: ${computerScore}.`);
}

playGame();

