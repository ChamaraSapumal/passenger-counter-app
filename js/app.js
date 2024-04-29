let count = 0;
let total = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("sum-el");

function increment() {
  count += 1;
  countEl.innerHTML = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  total = total + count;
  sum();
  reset();
}

function reset() {
  count = 0;
  countEl.innerHTML = count;
}

function sum() {
  totalEl.innerHTML = total;
}
