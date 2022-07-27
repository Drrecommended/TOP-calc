const numberButtons = document.querySelectorAll(".number-btn");
const operators = document.querySelectorAll(".operator");
const operation = document.querySelector(".operation");
const input = document.querySelector(".input");
const equal = document.querySelector("#equal");
const power = document.querySelector(".power")
const resetBtn = document.querySelector(".btn_reset");
const deleteBtn = document.querySelector(".btn_delete");
const decimal = document.getElementById("#.");

let operand = null;
let num1;
let num2;
let displayValue = null;

const collectFormatInput = (e) => {
  let num = e.target.id;
  let inputText;
  if (
    (input.innerText == "0" && e.target.id == "0") ||
    displayValue ||
    (input.innerText.includes(".") && num == ".")
  )
    return;
  if (input.innerText === "0") {
    input.innerText = "";
  }

  input.innerText += num;
  inputText = input.innerText;

  if (operand) {
    num2 = parseFloat(inputText);
  } else {
    num1 = parseFloat(inputText);
  }
};

const getOperator = (e) => {
  if (num1 === undefined || (num2 && operand)) return;
  operand = e.target.innerText;
  operate();
};

const operate = () => {
  if (operand === null) return;
  switch (operand) {
    case "÷":
      displayValue = divide();
      break;
    case "×":
      displayValue = multiply();
      break;
    case "−":
      displayValue = subtract();
      break;
    case "+":
      displayValue = add();
      break;
  }
  handleDisplay(displayValue);
};


const handleDisplay = (displayValue) => {

  if (displayValue) {
    num1 = displayValue;
    num2 = undefined;
    operand = "";
    operation.innerText = "";
    input.innerText = `${num1}`;
    return;
  }
  if (num2 === undefined) {
    operation.innerText = `${num1} ${operand}`;
    input.innerText = "0";
  }
};

const add = () => {
  return num1 + num2;
};

const subtract = () => {
  return num1 - num2;
};

const multiply = () => {
  return num1 * num2;
};

const divide = () => {
  return num1 / num2;
};


const reset = () => {
  operation.innerText = "";
  input.innerText = "0";
  operand = null;
  displayValue = null;
  num1 = undefined;
  num2 = undefined;
};

const clearEntry = () => {
  if (displayValue == input.textContent) return;
  if (input.innerText !== "0") {
    input.innerText = input.innerText.slice(0, -1);
  }
  if (input.innerText === "") {
    input.innerText = "0";
  }
};

numberButtons.forEach((number) =>
  number.addEventListener("click", collectFormatInput)
);
operators.forEach((operator) =>
  operator.addEventListener("click", getOperator)
);

equal.addEventListener("click", operate);
resetBtn.addEventListener("click", reset);
deleteBtn.addEventListener("click", clearEntry);

