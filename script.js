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
        default:
            break;
    }
};

//////////////////////////////////////////////////////
// DOM Elements

// BOXES
const currentNumberBox = document.querySelector('#current-number');

// BUTTONS
const numbersBtn = document.querySelectorAll('.number');
const operatorsBtn = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('#equals');
const decimalBtn = document.querySelector('#decimal');
const deleteBtn = document.querySelector('#delete');
const clearBtn = document.querySelector('#clear');

let displayValue = '';
let firstNumber;
let secondNumber;
let operator;
let insertionValue = '';

const clear = function () {
    currentNumberBox.textContent = '';
    displayValue = '';
    firstNumber = 0;
    secondNumber = 0;
    operator = '';
};

numbersBtn.forEach(btn => {
    btn.addEventListener('click', function (e) {
        decimalBtn.disabled = false;
        displayValue += e.target.textContent;
        insertionValue += e.target.textContent;
        currentNumberBox.textContent = displayValue;

        if (insertionValue.includes('.')) {
            decimalBtn.disabled = true;
        }
    });
});

decimalBtn.addEventListener('click', function (e) {
    displayValue += e.target.textContent;
    insertionValue += e.target.textContent;
    currentNumberBox.textContent = displayValue;
});

operatorsBtn.forEach(btn => {
    btn.addEventListener('click', function (e) {
        insertionValue = '';
        decimalBtn.disabled = false;
        displayValue = displayValue.split(' ');
        [firstNumber, operator, secondNumber] = [...displayValue];

        if (operator === '÷' && secondNumber === '0') {
            alert("You can't divide a number by 0");
            clear();
            return;
        }

        if (firstNumber && operator && secondNumber) {
            displayValue = operate(operator, +firstNumber, +secondNumber) + '';
            displayValue += ` ${e.target.textContent} `;
            currentNumberBox.textContent = displayValue;
        } else {
            displayValue += ` ${e.target.textContent} `;
        }
    });
});

equalsBtn.addEventListener('click', function () {
    insertionValue = '';
    decimalBtn.disabled = false;
    displayValue = displayValue.split(' ');
    [firstNumber, operator, secondNumber] = [...displayValue];

    if (operator === '÷' && secondNumber === '0') {
        alert("You can't divide a number by 0");
        clear();
        return;
    }

    if (firstNumber && operator && secondNumber) {
        displayValue = '' + operate(operator, +firstNumber, +secondNumber);
        currentNumberBox.textContent = displayValue;
    }
});

deleteBtn.addEventListener('click', function () {
    displayValue = displayValue.slice(0, displayValue.length - 1).trim();
    currentNumberBox.textContent = displayValue;
});

clearBtn.addEventListener('click', function () {
    clear();
});
