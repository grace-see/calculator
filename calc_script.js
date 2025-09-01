function add (num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator.trim() === '+')
        return add(num1, num2);
    else if (operator.trim === '-')
        return subtract(num1, num2);
    else if (operator.trim === '*')
        return multiply(num1, num2);
    else if (operator.trim === '/')
        return divide(num1, num2);
}

let num1, num2, operator;