let tableEl = document.querySelector("table");
let selectedTd;

tableEl.addEventListener("click", (event)=>
{
    const target = event.target;
    const closestTr = target.closest("tr");

    if(target.tarName === "TH"){
        return;
    }

    if (selectedTd != undefined) {
        selectedTd.classList.remove("active"); // removing class
      }

    selectedTd = closestTr;
    closestTr.classList.add("active")
});

document.addEventListener("click", (event) => {
    const id= event.target.dataset.toggleId;
    
    if (!id) return; // ignore all

    const el = document.getElementById(id);

    el.hidden = !el.hidden;
});

const formEl = document.querySelector("#donate-form");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const donateAmount = event.target.querySelector("input").value;
  
    alert(`Thank you for donating ₹${donateAmount}.`);
});