let choices = document.querySelectorAll(".choice");
let massage = document.querySelector("#msg");
let msgbox = document.querySelector(".msg-board");
let startBtn = document.querySelector("button");

let computerscoreText = document.querySelector("#computer-score");
let userscoreText = document.querySelector("#your-score");

let userscore = 0;
let computerscore = 0;


const startgameAgain = ()=>{
    userscore = 0;
    computerscore = 0;
    userscoreText.innerText = userscore;
    computerscoreText.innerText = computerscore;

    massage.innerText = "Let's Try Again";
    msgbox.style.backgroundColor = "#808080";

    choices.forEach(choice =>{
        choice.style.backgroundColor = "";
        choice.classList.remove("active");
    });

}

startBtn.addEventListener("click",startgameAgain);


const computerChoice = ()=>{
    const options = ["rock","paper","scissors"];
    const option = Math.floor(Math.random()*3);
    return options[option];
}

const gameDraw = ()=>{
    massage.innerText = "Game Draw !!";
    msgbox.style.backgroundColor = "#D4A017";
}

const showWinner = (userWin, userChoice , compChoice)=>{
    if(userWin){

        userscore++;
        userscoreText.innerText = userscore; 

        massage.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msgbox.style.backgroundColor = "#255F38";
    }
    else{

        computerscore++;
        computerscoreText.innerText = computerscore;

        massage.innerText = `You Lose! ${compChoice} Beats Your ${userChoice}`;
        msgbox.style.backgroundColor = "#A31D1D";
    }
};

const playGame = (userChoice)=>{
    const compChoice = computerChoice();
    console.log(compChoice);
    console.log(userChoice);
    
    if(userChoice === compChoice){
        gameDraw();
    }
    else{
    let userWin = true;

        if(userChoice === "rock"){
            //sicssors , paper
            userWin = compChoice === "paper" ? false:true;
        }
        else if(userChoice === "paper"){
            //rock , scissors
            userWin = compChoice === "scissors" ? false:true;
        }
        else{
            // rock , paper
            userWin = compChoice === "rock" ? false:true; 
        }

        showWinner(userWin,userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
}); 