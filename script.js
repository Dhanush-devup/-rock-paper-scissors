// console.log(getcomputerChoice())
function getcomputerChoice(){
    let num =Math.floor( Math.random()*3);
    let choice = ['rock','paper','scissor'];
    return choice[num];
}

function playRound (human , computer ) {
    human=human.toLowerCase()
    const winner = document.querySelector("#winner");
    if (human==computer){
        console.log("tie!!")
        winner.textContent="tie!!";
    }
    else if ( human=='rock') {
        if (computer=='paper') {
            console.log("You lose! paper beats rock")
            winner.textContent="You lose! paper beats rock";
            c++;
        }

        if (computer=='scissor') {
            console.log("You win! rock beats scissor")
            winner.textContent="You win! rock beats scissor";
            h++;
        }
    }
    else if ( human=='paper') {
        if (computer=='rock') {
            console.log("You win! paper beats rock")
            winner.textContent="You win! paper beats rock";
            h++;
        }

        if (computer=='scissor') {
            console.log("You lose! scissor beats paper")
            winner.textContent="You lose! scissor beats paper";
            c++;
        }
    }
    else if ( human=='scissor') {
        if (computer=='rock') {
            console.log("You lose! rock beats scissor")
            winner.textContent="You lose! rock beats scissor";
            c++;
        }

        if (computer=='paper') {
            console.log("You win! scissor beats paper")
            winner.textContent="You win! scissor beats paper";
            h++
        }
    }
    human_score.textContent = h ;
    computer_score.textContent = c;



    console.log(`your score: ${h}\ncomputer score: ${c}`)
    if ( h >= 5 || c >= 5 ){
        const dialoge = document.querySelector("dialog");
        const h2= document.querySelector("#msg");
        const para = document.querySelector("#final_scores");
        const btt = document.querySelector("#restart");
        h2.textContent = `${(c>h)?"Computer":"You"} won!`;
        para.textContent = `final scores:\nyour score:${h}\ncomputer score:${c}`;

        dialoge.showModal();

        btt.addEventListener("click",()=>{
            h=0;
            c=0;
            dialoge.close();
            human_score.textContent = h ;
            computer_score.textContent = c;
            const human_choice = document.querySelector("#human_choice");
            const computer_choice = document.querySelector("#computer_choice");

            human_choice.textContent = "";
            computer_choice.textContent = "";

    });


    }
}

function playGame(choice){
let c_choice = getcomputerChoice();
const human_choice = document.querySelector("#human_choice");
const computer_choice = document.querySelector("#computer_choice");

human_choice.textContent = choice;
computer_choice.textContent = c_choice;
console.log(`my choice : ${choice}\ncomputer choice: ${c_choice}`)
playRound(choice,c_choice);
}


let h=0,c=0;
const human_score = document.querySelector("#human_score");
const computer_score = document.querySelector("#computer_score");

human_score.textContent = h ;
computer_score.textContent = c;

const human_choice = document.querySelector(".choice");
human_choice.addEventListener("click",function (e){
    const h_choice = e.target.id;
    let arr = ["rock","paper","scissor"]; 
    if (arr.includes(h_choice))
        playGame(h_choice);
});




console.log(`final scores:\nyour score:${h}\ncomputer score:${c}`)

console.log(`${(c>h)?"Computer":"You"} won!`)