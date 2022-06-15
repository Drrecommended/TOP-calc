const numBtns = document.querySelectorAll(".btn__main");
const symBtns = document.querySelectorAll(".btn__sub");
const operation = document.querySelector(".operation");
const output = document.querySelector(".output");
const clearbtn = document.querySelector(".btn_clear");
const deletebtn = document.querySelector(".btn_delete");

let num1 = null,
num2 = null;

const bottomDisplayValue = (num) => {
  if (output.innerText.includes(".") && num === "decimal") return;
  if (num === "decimal") {
    num = ".";
    output.innerText += num;
    return;
  }
  if (output.innerText === "0") {
    output.innerText = "";
  }
  output.innerText += num;
  num1 = output.innerText;
};

const operate = (operator) => {
  switch (operator) {
    case "divide":
      divide(num1, num2);
      break;
    case "multiply":
      multiply(num1, num2);
      break;
    case "add":
      add(num1, num2);
      break;
    case "subtract":
      subtract(num1, num2);
      break;
  }
};

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const clearInput = () => {
  output.innerText = "0";
};

const deleteChar = () => {
  if (output.innerText == 0) {
    return;
  }
  output.innerText = output.innerText.slice(0, -1);
  if (output.innerText < 1) {
    output.innerText = 0;
  }
};

numBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    bottomDisplayValue(e.target.id);
  });
});

symBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    operate(e.target.id);
  });
});

clearbtn.addEventListener("click", clearInput);

deletebtn.addEventListener("click", deleteChar);
