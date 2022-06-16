const numBtns = document.querySelectorAll('.btn__main')
const symBtns = document.querySelectorAll('.btn__sub')
const operation = document.querySelector('.operation')
const output = document.querySelector('.output')
const resetbtn = document.querySelector('.btn_reset')
const deletebtn = document.querySelector('.btn_delete')

let num1 = null,
  num2 = null

const getNum = (num) => {
  if (output.innerText.includes('.') && num === 'decimal') return
  if (num === 'decimal') {
    num = '.'
    output.innerText += num
    return
  }
  if (output.innerText === '0') {
    output.innerText = ''
  }
  output.innerText += num
  num1 = output.innerText
}

const operate = (operator) => {
  updateUI(operator, num1, num2)
  switch (operator) {
    case 'divide':
      divide(num1, num2)
      break
    case 'multiply':
      multiply(num1, num2)
      break
    case 'add':
      add(num1, num2)
      break
    case 'subtract':
      subtract(num1, num2)
      break
  }
}

const add = (num1, num2) => {
  return num1 + num2
}

const subtract = (num1, num2) => {
  return num1 - num2
}

const multiply = (num1, num2) => {
  return num1 * num2
}

const divide = (num1, num2) => {
  return num1 / num2
}

//update UI
const updateUI = (operator, num1, num2) => {
    operation.innerText = `${num1} ${operator}`
}

const reset = () => {
  output.innerText = '0'
}

const deleteChar = () => {
  if (output.innerText == 0) {
    return
  }
  output.innerText = output.innerText.slice(0, -1)
  if (output.innerText < 1) {
    output.innerText = 0
  }
}

numBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    getNum(e.target.id)
  })
})

symBtns.forEach((button) => {
  button.addEventListener('click', (e) => {
    operate(e.target.id)
  })
})

resetbtn.addEventListener('click', reset)

deletebtn.addEventListener('click', deleteChar)
