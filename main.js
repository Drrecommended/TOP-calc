const numberButtons = document.querySelectorAll(".number-btn");
const operators = document.querySelectorAll(".operator");
const operation = document.querySelector(".operation");
const input = document.querySelector(".input");
const equal = document.querySelector("#equal");
const resetBtn = document.querySelector(".btn_reset");

let operand,
  num1,
  num2 = null;

const collectInput = (e) => {
  let num = e.target.id;
  if (input.innerText === "0") {
    input.innerText = "";
  }
  input.innerText += num;
  if (operand) {
    num2 = parseInt(input.innerText);
  } else {
    num1 = parseInt(input.innerText);
  }
  console.log(num1, num2);
};

const getOperator = (e) => {
  if (operand !== null) operate();
  operand = e.target.innerText;
  displayOperation();
};

const operate = () => {
  let result;
  if (num2 === null) return;

  switch (operand) {
    case "÷":
      result = divide();
      break;
    case "×":
      result = multiply();
      break;
    case "−":
      result = subtract();
      break;
    case "+":
      result = add();
      break;
  }
  displayOperation(result);
};

const displayOperation = (result) => {
  if (num2 === null) {
    operation.innerText = `${num1} ${operand}`;
    input.innerText = "0";
  } else {
    operation.innerText = `${num1} ${operand} ${num2}`;
    input.innerText = result.toString();
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
  num1 = null;
  num2 = null;
};

numberButtons.forEach((number) =>
  number.addEventListener("click", collectInput)
);
operators.forEach((operator) =>
  operator.addEventListener("click", getOperator)
);

equal.addEventListener("click", operate);
resetBtn.addEventListener("click", reset);
