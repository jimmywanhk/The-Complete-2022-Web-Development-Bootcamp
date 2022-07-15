var dice1 = Math.floor(Math.random() * 6 + 1);
var dice2 = Math.floor(Math.random() * 6 + 1);
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + dice1 + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + dice2 + ".png");

if (dice1 > dice2) {
    document.getElementsByTagName("h1")[0].textContent = "🚩 Player 1 Wins!";
} else if (dice1 < dice2) {
    document.getElementsByTagName("h1")[0].textContent = "Player 2 Wins! 🚩";
} else {
    document.getElementsByTagName("h1")[0].textContent = "Draw!";
}