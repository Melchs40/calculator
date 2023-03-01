//returns the text content of button pressed

let display = document.getElementById("display-box");
let equation = [];
let start = ""

const numberButtons = document.querySelectorAll(".number-button");
numberButtons.forEach(numberButton => {
    numberButton.addEventListener("click", displayButton)
});

function displayButton(event) {
    if (display.innerHTML == "+" || display.innerHTML == "-" || display.innerHTML == "*" || display.innerHTML == "/")  {
        display.innerHTML = "";
        display.innerHTML = event.target.textContent;
    } else display.innerHTML += event.target.textContent;
    console.log(display.innerHTML);
}

const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", createVariable)
});

function createVariable(event) {
    if (event.target.textContent == "+" || event.target.textContent == "-" || event.target.textContent == "*" || event.target.textContent == "/") {
        equation.push(Number(display.innerHTML));
        equation.push(event.target.textContent);
        display.innerHTML = event.target.textContent;
        
        console.log(display.innerHTML);
        console.log(equation);
    } else console.log("hi");
}





//various operator functions

function add (a, b) {
    return a + b;
};


function subtract (a, b) {
    return a - b;
};


function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    return a / b;
};

function operate (obj) {

    if (typeof obj[0] === "number") {
        let start = obj[0];
        for(let n = 0; n < obj.length; n++) {
            if (obj[n] == "+") {
               start = add(obj[n-1], obj[n+1]);
            } else if (obj[n] == "-") {
                start = subtract(obj[n-1], obj[n+1]);
            } else if (obj[n] == "*") {
                start = multiply(obj[n-1], obj[n+1]);
            } else start = divide(obj[n-1], obj[n+1]);
        }; return start;
    } else return "please start with a number";
}
