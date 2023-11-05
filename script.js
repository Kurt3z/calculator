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

let firstNumber;
let operator;
let secondNumber;

const operate = function (operator, num1, num2) {
    switch (operator) {
        case '+':
            add(num1, num2);
            break;
        case '-':
            subtract(num1, num2);
        case 'x':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
        default:
            break;
    }
};
