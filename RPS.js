
//load the prompt-sync module
const prompt = require('prompt-sync')({sigint: true});


console.log("Welcome to Rock, Paper, Scissor!\n");
playGame();



function getComputerChoice()
{
    let compChoice = Math.floor(Math.random() * 3) + 1;

    if (compChoice === 1)
        {
            return "rock";
        }

    else if (compChoice === 2)
    {
        return "paper";
    }

    else
    {
        return "scissors";
    }
}

function getHumanChoice()
{
    let userChoice = prompt("Enter rock, paper, or scissors: ");
    userChoice = userChoice.toLowerCase();
    return userChoice;
}

function playRound(compChoice, humChoice)
{

    if( compChoice === humChoice)
    {
        console.log(`\nIt is a tie!`
        );
        return 'tie';
    }

    else if((humChoice === "rock" && compChoice === "scissors") ||       (humChoice === "paper" && compChoice === "rock") ||
    (humChoice === "scissors" && compChoice === "paper"))
    {
        console.log(`\nYou win! ${humChoice} beats ${compChoice}.
            `);
        return 'human';
    }

    else
    {
        console.log(`\nYou lose! ${compChoice} beats ${humChoice}.
            `);
        return 'computer';    
    }
}

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    //will play 5 rounds
    for(let index = 0; index < 5; index++)
    {
        let winner = playRound(getComputerChoice(), getHumanChoice());

        if (winner === "human")
        {
            humanScore++;
        }

        else if (winner === "computer")
        {
            computerScore++;
        }
    }

    //comparing scores to see who won and showing the score
    if (humanScore > computerScore)
    {
        console.log(`
            You won the game!
            You: ${humanScore}
            Computer: ${computerScore}`);
        
    }

    else if (computerScore > humanScore)
    {
        console.log(`
            You lost the game!
            You: ${humanScore}
            Computer: ${computerScore}`);
    }

    else if (humanScore === computerScore)
    {
        console.log(`
            You tied the game!
            You: ${humanScore}
            Computer: ${computerScore}`);
    }
