let peopleCount = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  peopleCount++;
  countEl.textContent = peopleCount;
}

function save() {
  let previousCount = " " + peopleCount + " - ";
  saveEl.textContent += previousCount;
  peopleCount = 0;
  countEl.textContent = 0;
}
