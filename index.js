const screenResult = document.querySelector("#result");
const clear = document.querySelector("#clear")
const firstRow = document.querySelector("#firstRow");
const secondRow = document.querySelector("#secondRow");
const thirdRow = document.querySelector("#thirdRow");
const fourthRow = document.querySelector("#fourthRow");
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const multiply = document.querySelector("#multiply");
const divide = document.querySelector("#divide");
const equal = document.querySelector("#equal");
const dot = document.querySelector("#dot");

function calculator() {
zero.addEventListener("click", () => {
    return screenResult.textContent += 0
})
one.addEventListener("click", () => {
    return screenResult.textContent += 1
})
two.addEventListener("click", () => {
    return screenResult.textContent += 2
})
three.addEventListener("click", () => {
    return screenResult.textContent += 3
})
four.addEventListener("click", () => {
    return screenResult.textContent += 4
})
five.addEventListener("click", () => {
    return screenResult.textContent += 5
})
six.addEventListener("click", () => {
    return screenResult.textContent += 6
})
seven.addEventListener("click", () => {
    return screenResult.textContent += 7
})
eight.addEventListener("click", () => {
    return screenResult.textContent += 8
})
nine.addEventListener("click", () => {
    return screenResult.textContent += 9
})
plus.addEventListener("click", () => {
    return screenResult.textContent += "+"
})
minus.addEventListener("click", () => {
    return screenResult.textContent = "-"
})
multiply.addEventListener("click", () => {
    return screenResult.textContent = "*"
})
divide.addEventListener("click", () => {
    return screenResult.textContent = "/"
})
equal.addEventListener("click", () => {
    return screenResult.textContent = "="
})
dot.addEventListener("click", () => {
    return screenResult.textContent = "."
})
clear.addEventListener("click", () => {
    return screenResult.textContent = ""
})
}

calculator()