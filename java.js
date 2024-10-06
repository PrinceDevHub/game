let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompchoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () =>{
    console.log("game was draw");
    msg.innerText = "Game was Draw. Play again";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compchoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = "you win!";
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        
        msg.innerText = "you lose";
        msg.style.backgroundColor = "red";
    }
};
const playGame = (userChoice) =>{
    console.log("user choice =" , userChoice);
    const compchoice = genCompchoice();
    console.log("comp choice =", compchoice);

    if(userChoice === compchoice){
     
        //draw game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice ==="rock"){
            userWin = compchoice ==="papper" ? false : true;
        }else if(userChoice === "papper") {
            userWin = compchoice === "scissors" ? false : true;

        }else{
          userWin = compchoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compchoice);
    }

    
    
};

choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});