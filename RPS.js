

let humanScore = 0;
let computerScore = 0;

//keeping reference of buttons and div where winner will be displayed
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const div = document.querySelector("div");



//add event listener for the 3 buttons - calls playRound() when clicked
//each click will play a round
//the event listener's callback func has arguments, so it has to be wrapped or it will run immediately

rock.addEventListener("click", () => playRound(getComputerChoice(),"rock"));
paper.addEventListener("click", () => playRound(getComputerChoice(),"paper"));
scissors.addEventListener("click", () => playRound(getComputerChoice(),"scissors"));



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



function playRound(compChoice, humChoice)
{

    if( compChoice === humChoice)
    {
        const tiePara = document.createElement("p"); //create a new <p>
        tiePara.textContent = "It is a tie!"; //add text to the <p>

        div.appendChild(tiePara); //append the <p> to the <div>
        
    }

    //human wins round
    else if((humChoice === "rock" && compChoice === "scissors") ||  (humChoice === "paper" && compChoice === "rock") ||
    (humChoice === "scissors" && compChoice === "paper"))
    {
        const humanWin = document.createElement("p"); //create a new <p>
        humanWin.textContent = `You win! ${humChoice} beats ${compChoice}.`;
        div.appendChild(humanWin);
        humanScore++; //keep track of score
    }

    //computer wins round
    else
    {
        const compWin = document.createElement("p");
        compWin.textContent = `You lose! ${compChoice} beats ${humChoice}.`;
        div.appendChild(compWin);
         computerScore++;  //keep track of score  
    }

    //will check the score at each round to see if any player has reached 5 points, yet
    checkWinner(); 

}

function checkWinner()
{
    const winner = document.createElement("h1"); //create the h1 to display the winner

     //checking if any player's score has reached 5
    if (humanScore === 5) 
    {
        winner.textContent = `You won the game!
        You: ${humanScore}
        Computer: ${computerScore}`;
        
        div.appendChild(winner);

        disableButtons() //buttons will disable once there is a winner of the game
        
    }

    else if (computerScore === 5)
    {
        winner.textContent = `You lost the game!
        You: ${humanScore}
        Computer: ${computerScore}`;

        div.appendChild(winner);

        disableButtons() //buttons will disable once there is a winner of the game
    }

}

function disableButtons()
{
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}



