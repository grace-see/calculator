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
    else if (operator.trim() === '-')
        return subtract(num1, num2);
    else if (operator.trim() === '*')
        return multiply(num1, num2);
    else if (operator.trim() === '/')
        return divide(num1, num2);
}

let num1, num2, operator;

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