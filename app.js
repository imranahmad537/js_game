
let current_player = 1;
let player1_score = 0;
let player2_score = 0;
let isGameover = false;


function rollDice()
{
    if(isGameover) return;
    
    let x = Math.random()*6+1;
    let roll_res = Math.trunc(x);

    if(current_player === 1){
        player1_score += roll_res;
        document.querySelector(".total1").textContent = player1_score;//total score
        document.querySelector(".current1").textContent = roll_res; // current score
        if(player1_score >= 20)
            {
                // player 1 win
                isGameover = true;
            }
           
    }
    else{
        player2_score += roll_res;
        document.querySelector(".total2").textContent = player2_score;//total score
        document.querySelector(".current2").textContent = roll_res; // current score
        if(player2_score >= 20)
            {
                // player 1 win
                isGameover = true
            }
          
    }

    current_player = (current_player === 1) ? 2 : 1;
    disabledButton();
    
}

function disabledButton(){
    let btn = document.querySelector(".roll");
    btn.disabled = true;
    setTimeout(() =>{
        btn.disabled = false;
    },1000)

}
// function gameover()
// {
//     isGameover = true;
// }

function diceImg(){
    let images = document.querySelector(".imge");
    images.src = `images/dice-${y}.png`;
}




   
//     tot += y;
//     if(tot==100)
//     {
//         tot = 0;
//         y = 0;
//         alert("Congratulation...")
//     }
//     document.querySelector(".total1").textContent = tot;
    


// console.log(y);