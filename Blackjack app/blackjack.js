let firstCard = 10;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

let currentHandState = document.getElementById("current-hand");

function startGame() {
  if (sum <= 20) {
    currentHandState.textContent = "Do you want to draw a new card?";
  } else if (sum === 21) {
    currentHandState.textContent = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    currentHandState.textContent = "You're out of the game!";
    isAlive = false;
  }
}
