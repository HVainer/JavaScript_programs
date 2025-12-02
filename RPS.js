
//load the prompt-sync module
//const prompt = require('prompt-sync')({sigint: true});


// console.log("Welcome to Rock, Paper, Scissor!\n");
// playGame();
let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const div = document.querySelector("div");

while(humanScore !== 5 && computerScore !== 5)
{
    //add event listener for the 3 buttons - calls playRound() when clicked
    rock.addEventListener("click", () => playRound(getComputerChoice(),"rock"));
    paper.addEventListener("click", () => playRound(getComputerChoice(),"paper"));
    scissors.addEventListener("click", () => playRound(getComputerChoice(),"scissors"));
}





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
        const tiePara = document.createElement("p"); //create a new <p>
        tiePara.textContent("It is a tie!"); //add text to the <p>

        div.appendChild(tiePara); //append the <p> to the <div>
        
    }

    else if((humChoice === "rock" && compChoice === "scissors") ||  (humChoice === "paper" && compChoice === "rock") ||
    (humChoice === "scissors" && compChoice === "paper"))
    {
        const humanWin = document.createElement("p"); //create a new <p>
        humanWin.textContent(`\nYou win! ${humChoice} beats ${compChoice}.
            `);
        div.appendChild(humanWin);
        humanScore++; //keep track of human score
    }

    else
    {
        const compWin = document.createElement("p");
        compWin.textContent(`\nYou lose! ${compChoice} beats ${humChoice}.
            `);
        div.appendChild(compWin);
         computerScore++;    
    }
}

function playGame(human)
{
     let humanScore = 0;
     let computerScore = 0;


    let winner = playRound(getComputerChoice(), human);

    if (winner === "human")
    {
         humanScore++;
    }

    else if (winner === "computer")
    {
        computerScore++;
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
}
