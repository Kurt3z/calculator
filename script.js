const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};

const modulo = function (a, b) {
    return a % b;
};

let firstNumber = 0;
let operator;
let secondNumber = 0;
let result;

const operate = function (operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '×':
            return multiply(num1, num2);
        case '÷':
            return divide(num1, num2);
        case '%':
            return modulo(num1, num2);
        default:
            break;
    }
};

//////////////////////////////////////////////////////
// DOM Elements
const numbersBtn = document.querySelectorAll('.number');
const operatorsBtn = document.querySelectorAll('.operator');
const lastNumberBox = document.querySelector('#last-number');
const currentNumberBox = document.querySelector('#current-number');
const equalsBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');
const deleteBtn = document.querySelector('#delete');

numbersBtn.forEach(btn => {
    btn.addEventListener('click', function (e) {
        currentNumberBox.textContent += e.target.textContent;
    });
});

clearBtn.addEventListener('click', function () {
    firstNumber, secondNumber, (result = 0);
    currentNumberBox.textContent = '';
    lastNumberBox.textContent = '';
});
