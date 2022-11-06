let myleads = [];

const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

saveBtn.addEventListener("click", function () {
  console.log("Click");
  myleads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItmes = "";

  for (let i = 0; i < myleads.length; i++) {
    listItmes += `<li><a href="http://${myleads[i]}" target="_blank">${myleads[i]}</a></li>`;
  }
  ulEl.innerHTML = listItmes;
}
