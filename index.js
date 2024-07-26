function add(a, b) {
    return a + b
}
function subtract(a, b) {
    return a - b
}
function multiply(a, b) {
    return a * b
}
function divide(a, b) {
    if(b === 0) {
        return display.textContent = "Can't do that!"
    }
    return a / b
}

const display = document.querySelector("#result");
const buttons = document.querySelectorAll("button");

let firstNum;
let operator;
let secondNum;

function operate(firstNum, operator, secondNum) {
    switch(operator) {
        case "+":
            return add(firstNum, secondNum);
        case "-":
            return subtract(firstNum, secondNum);
        case "*":
            return multiply(firstNum, secondNum);
        case "/":
            return divide(firstNum, secondNum)
    }
}

buttons.forEach(button => {
    if(button.className === "number" || button.id === "dot") {
        button.addEventListener("click", () => {
        display.textContent += button.textContent
        })
    }
    else if(button.className === "operator") {
        button.addEventListener("click", () => {
            display.textContent.slice(0, );
            firstNum = display.textContent;
            operator = button.textContent;
            console.log(firstNum + " this is the firstNum");
            console.log(operator)
            display.textContent = "";
        })
    }
    else if(button.id === "equal") {
        button.addEventListener("click", () => {
            display.textContent.slice(0, );
            secondNum = display.textContent;
            console.log(secondNum + " this is the secondNum");
            display.textContent = operate(+firstNum, operator, +secondNum);
        })
    }
    else if(button.id === "clear") {
        button.addEventListener("click", () => {
        display.textContent = ""
    })
    }
})