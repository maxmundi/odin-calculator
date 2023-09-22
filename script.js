let firstNumber = "";
let operator = "";
let secondNumber = "";

let inputDisplay = "";
let outputDisplay = "";


/* operation functions*/
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function remainder(a, b) {
    return a % b;
}

function operate(firstNum, oper, secondNum) {
    outputDisplay = eval(oper)(parseInt(firstNum), parseInt(secondNum));
    document.querySelector("#output").innerText = outputDisplay;
}

function displayInput(input) {
    elements = inputDisplay.split("");
    if (input == "." && !("123456789").includes(elements[elements.length - 1])) {
        return;
    }
    if (["/", "x", "+", "-", "%"].includes(input)) {
        inputDisplay += " " + input + " ";
    } else {
        inputDisplay += input;
    }
    document.querySelector("#input").innerText = inputDisplay;
}

function clear() {
    inputDisplay = "";
    outputDisplay = "";
    document.querySelector("#input").innerText = inputDisplay;
    document.querySelector("#output").innerText = outputDisplay;
}

function equals(string) {
    let array = string.split(" ");
    if (array[1] == "+") {
        array[1] = "add"
    }
    if (array[1] == "-") {
        array[1] = "subtract"
    }
    if (array[1] == "x") {
        array[1] = "multiply"
    }
    if (array[1] == "%") {
        array[1] = "remainder"
    }
    if (array[1] == "/") {
        array[1] = "divide"
    }
    operate(array[0], array[1], array[2]);
}

document.querySelectorAll(".input").forEach(button => button.addEventListener("click", () => displayInput(button.innerText)));

document.querySelector("#clear").addEventListener("click", () => clear());

document.querySelector("#equals").addEventListener("click", () => equals(inputDisplay));