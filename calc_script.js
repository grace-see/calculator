function add(num1, num2) {
    return (num1 + num2).toPrecision(6);
}

function subtract(num1, num2) {
    return (num1 - num2).toPrecision(6);
}

function multiply(num1, num2) {
    return (num1 * num2).toPrecision(6);
}

function divide(num1, num2) {
    if (num2 === 0) {
        isComputed = true; //we don't want to keep the error message
        return "CANNOT DIVIDE BY ZERO >:(";
    }   
    return (num1 / num2).toPrecision(6);
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

function containsOperator(expression) {
    if (expression.search(/\+|\-|\*|\//) !== -1)
        return true;
    return false;
}

const container = document.querySelector(".container");

const display = container.querySelector("#text-field");

let isComputed = false; //if you press equal, then the expression is "fully" computed

let decimalFlag = false; //can't type more than one decimal per value

//get the buttons & add event listeners
container.querySelector("#one").addEventListener("click", () => {
    if (isComputed) {
        display.value = "1";
        isComputed = false;
    }
    else
        display.value = display.value + "1";
});

container.querySelector("#two").addEventListener("click", () => {
    if (isComputed) {
        display.value = "2";
        isComputed = false;
    }
    else
        display.value = display.value + "2";
});

container.querySelector("#three").addEventListener("click", () => {
    if (isComputed) {
        display.value = "3";
        isComputed = false;
    }
    else
        display.value = display.value + "3";
});

container.querySelector("#four").addEventListener("click", () => {
    if (isComputed) {
        display.value = "4";
        isComputed = false;
    }
    else
        display.value = display.value + "4";
});

container.querySelector("#five").addEventListener("click", () => {
    if (isComputed) {
        display.value = "5";
        isComputed = false;
    }
    else
        display.value = display.value + "5";
});

container.querySelector("#six").addEventListener("click", () => {
    if (isComputed) {
        display.value = "6";
        isComputed = false;
    }
    else
        display.value = display.value + "6";
});

container.querySelector("#seven").addEventListener("click", () => {
    if (isComputed) {
        display.value = "7";
        isComputed = false;
    }
    else
        display.value = display.value + "7";
});

container.querySelector("#eight").addEventListener("click", () => {
    if (isComputed) {
        display.value = "8";
        isComputed = false;
    }
    else
        display.value = display.value + "8";
});

container.querySelector("#nine").addEventListener("click", () => {
    if (isComputed) {
        display.value = "9";
        isComputed = false;
    }
    else
        display.value = display.value + "9";
});

container.querySelector("#zero").addEventListener("click", () => {
    if (isComputed) {
        display.value = "0";
        isComputed = false;
    }
    else
        display.value = display.value + "0";
});

container.querySelector("#clear").addEventListener("click", () => {
    display.value = "";
});

container.querySelector("#add").addEventListener("click", () => {
    if (containsOperator(display.value))
        display.value = operate(display.value) + "+";
    else
        display.value = display.value + "+";
    decimalFlag = false;
});

container.querySelector("#subtract").addEventListener("click", () => {
    if (containsOperator(display.value))
        display.value = operate(display.value) + "-";
    else
        display.value = display.value + "-";
    decimalFlag = false;
});

container.querySelector("#multiply").addEventListener("click", () => {
    if (containsOperator(display.value))
        display.value = operate(display.value) + "*";
    else
        display.value = display.value + "*";
    decimalFlag = false;
});

container.querySelector("#divide").addEventListener("click", () => {
    if (containsOperator(display.value))
        display.value = operate(display.value) + "/";
    else
        display.value = display.value + "/";
    decimalFlag = false;
});

container.querySelector("#equal").addEventListener("click", () => {
    display.value = operate(display.value);
    isComputed = true;
    decimalFlag = false;
});

container.querySelector("#decimal").addEventListener("click", () => {
    if (!decimalFlag) {
        display.value = display.value + ".";
        decimalFlag = true;
    }  
});