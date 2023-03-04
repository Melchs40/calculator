//returns the text content of button pressed

let display = document.getElementById("display-box");
let equation = [];
let start = ""

//returns numbers into the display and into the equation variable
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


//returns operators into the display and into the equation variable
const operatorButtons = document.querySelectorAll(".operator-button");
operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener("click", createVariable)
});

function createVariable(event) {
    if (event.target.textContent == "+" || event.target.textContent == "-" || event.target.textContent == "*" || event.target.textContent == "/") {
        if (display.innerHTML == "\n        ") {
            // do nothing
        } else {
            if (display.innerHTML == "+" || display.innerHTML == "-" || display.innerHTML == "*" || display.innerHTML == "/") {
                equation.splice(equation.length-1, 1);
            } else
                equation.push(Number(display.innerHTML));
                equation.push(event.target.textContent);
                display.innerHTML = event.target.textContent;
        
                console.log(display.innerHTML);
                console.log(equation);
        }
    } else console.log("hi");
}

//return the completed operation

const enterButton = document.getElementById("enter");
enterButton.addEventListener("click", runOperation); 

function runOperation(event) {
    if (display.innerHTML == "0" && equation[equation.length-1] == "/") {
        display.innerHTML = "&#128293 &#128293 &#128293 &#128293 &#128293";
        setTimeout(clearOperation, 1000);
    } else if (display.innerHTML == "+" || display.innerHTML == "-" || display.innerHTML == "*" || display.innerHTML == "/") {
        //do nothing
    } else {
        equation.push(Number(display.innerHTML));
        display.innerHTML = operate(equation);
        equation = [];
    }
};

function fireEmoji() {
    display.innerHTML = "\u1F525 \u1F525 \u1F525 \u1F525 \u1F525 \u1F525 \u1F525";
}

//clear the equation array

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearOperation);

function clearOperation() {
    equation = [];
    display.innerHTML = "\n        ";
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
               start = add(start, obj[n+1]);
            } else if (obj[n] == "-") {
                start = subtract(start, obj[n+1]);
            } else if (obj[n] == "*") {
                start = multiply(start, obj[n+1]);
            } else if (obj[n] == "/") {
                start = divide(start, obj[n+1]);
            } else continue;
        }; return start;
    } else return "please start with a number";
}
