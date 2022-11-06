let myleads = [];

const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

//localStorage.setItem("myLeads", "www.leads.com");
//let testValue = localStorage.getItem("myLeads");
//console.log(testValue);
localStorage.clear();

saveBtn.addEventListener("click", function () {
  myleads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myleads));
  renderLeads();

  console.log(localStorage.getItem("myLeads"));
});

function renderLeads() {
  let listItmes = "";

  for (let i = 0; i < myleads.length; i++) {
    listItmes += `<li><a href="http://${myleads[i]}" target="_blank">${myleads[i]}</a></li>`;
  }
  ulEl.innerHTML = listItmes;
}
