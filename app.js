
function rollDice()
{
    let x = Math.random()*6+1;
    let y = Math.trunc(x);
    document.getElementById("res1").textContent = y;
    let images = document.querySelector(".imge");
    images.src = `images/dice-${y}.png`;
}

console.log(y);