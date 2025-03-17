let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let updatedUserScore=document.querySelector("#user-score");
let updatedCompScore=document.querySelector("#computer-score");

let genCompCoice=()=>{
    let options=["rock","paper","scissors"];
    let ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}

let playGame =(userChoice)=>{
    console.log("user =",userChoice);
    let compChoice=genCompCoice();
    console.log("comp =",compChoice);
    // if game was draw.
    if(userChoice === compChoice){
        console.log("game was draw");
        msg.innerText="Game was Draw";
        msg.style.backgroundColor= "darkslategray";
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin=compChoice ==="paper" ? false:true;
        }
        else if(userChoice === "paper"){
            userWin=compChoice ==="rock" ? true:false;
        }
        else{
            userWin=compChoice ==="scissors" ? true:false;
        }
        // to print who won.
        if(userWin){
            console.log("you win");
            msg.innerText="You Win!";
            msg.style.backgroundColor="green";
            userScore++;
            updatedUserScore.innerText=userScore;
        }
        else{
            console.log("you lose");
            msg.innerText="You Lose!";
            msg.style.backgroundColor="red";
            compScore++;
            updatedCompScore.innerText=compScore;
        }
    }
}

choices.forEach((choice) => {
    let userChoice=choice.getAttribute("id");
    choice.addEventListener("click",()=>{
        playGame(userChoice);
    })
});