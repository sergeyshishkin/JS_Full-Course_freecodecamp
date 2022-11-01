// document.getElementById("count-el").innerText = 5

let peopleCount = 0;
let countEl = document.getElementById("count-el");

function increment() {
  peopleCount++;
  console.log(peopleCount);
  countEl.innerText = peopleCount;
}
