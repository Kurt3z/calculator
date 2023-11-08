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

// BOXES
const lastNumberBox = document.querySelector('#last-number');
const currentNumberBox = document.querySelector('#current-number');

// BUTTONS
const numbersBtn = document.querySelectorAll('.number');
const operatorsBtn = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('#equals');
const clearBtn = document.querySelector('#clear');

let displayValue = '';
let firstNumber;
let secondNumber;
let operator;

numbersBtn.forEach(btn => {
    btn.addEventListener('click', function (e) {
        displayValue += e.target.textContent;
        currentNumberBox.textContent = displayValue;
    });
});

operatorsBtn.forEach(btn => {
    btn.addEventListener('click', function (e) {
        displayValue = displayValue.split(' ');
        [firstNumber, operator, secondNumber] = [...displayValue];
        if (firstNumber && operator && secondNumber) {
            displayValue = operate(operator, +firstNumber, +secondNumber) + '';
            currentNumberBox.textContent = displayValue;
        }
        displayValue += ` ${e.target.textContent} `;
        console.log(displayValue);
    });
});

equalsBtn.addEventListener('click', function () {
    displayValue = displayValue.split(' ');
    [firstNumber, operator, secondNumber] = [...displayValue];

    if (firstNumber && operator && secondNumber) {
        displayValue = operate(operator, +firstNumber, +secondNumber);
        currentNumberBox.textContent = displayValue;
    }
});
