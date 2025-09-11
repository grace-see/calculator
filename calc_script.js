function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0)
        return "CANNOT DIVIDE BY ZERO >:(";
    return num1 / num2;
}

function operate(expression) {
    //parse the expression to get each element
    let operatorIndex = expression.search(/\+|\-|\*|\//);
    let operator = expression[operatorIndex];
    let num1 = Number(expression.substring(0, operatorIndex));
    let num2 = Number(expression.substring(operatorIndex+1, expression.length));
    if (operator.trim() === '+')
        return add(num1, num2);
    else if (operator.trim() === '-')
        return subtract(num1, num2);
    else if (operator.trim() === '*')
        return multiply(num1, num2);
    else if (operator.trim() === '/')
        return divide(num1, num2);
}

const container = document.querySelector(".container");

const display = container.querySelector("#text-field");

//get the buttons & add event listeners
container.querySelector("#one").addEventListener("click", () => {
    display.value = display.value + "1";
});

container.querySelector("#two").addEventListener("click", () => {
    display.value = display.value + "2";
});

container.querySelector("#three").addEventListener("click", () => {
    display.value = display.value + "3";
});

container.querySelector("#four").addEventListener("click", () => {
    display.value = display.value + "4";
});

container.querySelector("#five").addEventListener("click", () => {
    display.value = display.value + "5";
});

container.querySelector("#six").addEventListener("click", () => {
    display.value = display.value + "6";
});

container.querySelector("#seven").addEventListener("click", () => {
    display.value = display.value + "7";
});

container.querySelector("#eight").addEventListener("click", () => {
    display.value = display.value + "8";
});

container.querySelector("#nine").addEventListener("click", () => {
    display.value = display.value + "9";
});

container.querySelector("#zero").addEventListener("click", () => {
    display.value = display.value + "0";
});

container.querySelector("#clear").addEventListener("click", () => {
    display.value = "";
});

container.querySelector("#add").addEventListener("click", () => {
    if (display.value.search(/\+|\-|\*|\//) !== -1)
         display.value = operate(display.value) + "+";
    else
        display.value = display.value + "+";
});

container.querySelector("#subtract").addEventListener("click", () => {
    if (display.value.search(/\+|\-|\*|\//) !== -1)
        display.value = operate(display.value) + "-";
    else
        display.value = display.value + "-";
});

container.querySelector("#multiply").addEventListener("click", () => {
    if (display.value.search(/\+|\-|\*|\//) !== -1)
        display.value = operate(display.value) + "*";
    else
        display.value = display.value + "*";
});

container.querySelector("#divide").addEventListener("click", () => {
    if (display.value.search(/\+|\-|\*|\//) !== -1)
        display.value = operate(display.value) + "/";
    else
        display.value = display.value + "/";
});

container.querySelector("#equal").addEventListener("click", () => {
    display.value = operate(display.value);
});