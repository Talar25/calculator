const numButtons = document.querySelectorAll("[data-number]");
const opButtons = document.querySelectorAll("[data-operation]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalButton = document.querySelector("[data-equals]");
const previousOperand = document.querySelector("[data-previous-operand]");
const currentOperand = document.querySelector("[data-current-operand]");

let current = "";
let previous = "";
let operator = "";

numButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    getNum(e.target.textContent);
  })
);

opButtons.forEach((button) =>
  button.addEventListener("click", (e) => {
    getOperator(e.target.textContent);
  })
);

equalButton.addEventListener("click", calculate);

clearButton.addEventListener("click", clear);

deleteButton.addEventListener("click", deleteNumber);

function getNum(number) {
  if (current.length < 10) {
    current += number;
    currentOperand.textContent = current;
  }
}

function getOperator(op) {
  if (current != "") {
    operator = op;
    previous = current;
    previousOperand.textContent = previous + " " + operator;
    current = "";
  }
}

function calculate() {
  if (current != "" && previous != "") {
    current = Number(current);
    previous = Number(previous);
    //logic

    if (operator === "+") previous += current;
    else if (operator === "-") previous -= current;
    else if (operator === "÷") previos /= current;
    else if (operator === "x") previous *= current;
    previous = Math.round(previous * 100) / 100;
    current = "";
    current = current.toString();
    previous = previous.toString();
    previousOperand.textContent = previous;
    currentOperand.textContent = previous;
    calculator = true;
  }
}

function clear() {
  current = "";
  previous = "";
  operator = "";
  previousOperand.textContent = previous;
  currentOperand.textContent = current;
}

function deleteNumber() {
  current = Number(currentOperand.textContent.toString().slice(0, -1));
  currentOperand.textContent = current;
}
