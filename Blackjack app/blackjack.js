let player = {
  name: "Sergey",
  chips: 15,
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEL = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let startBtn = document.getElementById("start-game");
let newCardBtn = document.getElementById("new-card");

function updateChips() {
  if (player.chips <= 0) {
    playerEl.textContent = `Dear ${player.name}, your balance is $${player.chips}. Please, top up you account to continue playing`;
    document.getElementById("top-up").style.display = "block";
    document.getElementById("start-game").style.display = "none";
    document.getElementById("new-card").style.display = "none";
  } else {
    return (playerEl.textContent = `${player.name}: $${player.chips}`);
  }
}

function rickAstley() {
  document.getElementById("top-up").style.display = "none";
  document.getElementById("rick-astley").style.display = "block";
  playerEl.textContent = "";
}

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 11) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  hasBlackJack = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  //cards.push(firstCard);
  //cards.push(secondCard);
  sum = firstCard + secondCard;
  renderGame();
  updateChips();
}

function renderGame() {
  cardsEl.textContent = "Cards:";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += ` ${cards[i]}`;
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
    player.chips += 35;
  } else {
    message = "You're out of the game!";
    isAlive = false;
    player.chips -= 15;
    updateChips();
  }

  messageEL.textContent = message;
}

function newCard() {
  if (isAlive == true && hasBlackJack == false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  } else {
    //pass
  }
}
