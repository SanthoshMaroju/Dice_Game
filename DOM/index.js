// window.alert("Working");

var player1 = Math.random();
player1 = Math.floor(player1 * 6) + 1;
var dice1 = "images/dice" + player1 + ".png";
// console.log(dice1);

var player2 = Math.random();
player2 = Math.floor(player2 * 6) + 1;
var dice2 = "images/dice" + player2 + ".png";

if (player1 == player2) {
    document.querySelector("h1").innerHTML = "DRAW!";
} else if (player1 > player2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
document.querySelectorAll("img")[0].setAttribute("src", dice1);
document.querySelectorAll("img")[1].setAttribute("src", dice2);