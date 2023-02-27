let numbers = "";

let operator = "";

//returns the text content of button pressed
const buttons = document.querySelectorAll(".buttons");
buttons.forEach(button => {
   button.addEventListener('click', returnButton)
})
function returnButton(event) {
    return(event.target.textContent)
}

function addition (...numbers) {
    let total = 0;
    for(let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
};

// function add (a, b) {
//     return a + b;
// };

function subtraction (...numbers) {
    let total = numbers[0];
    for(let i = 1; i < numbers.length; i++) {
        total -= numbers[i];
    };
    return total;
};

// function subtract (a, b) {
//     return a - b;
// };

function multiplication (...numbers) {
    let total = 1;
    for(let i = 0; i < numbers.length; i++) {
        total *= numbers[i];
    };
    return total;
};

// function multiply (a, b) {
//     return a * b;
// };

function division (...numbers) {
    let total = numbers[0];
    for(let i = 1; i < numbers.length; i++) {
        total /= numbers[i];
    };
    return total;
};

// function divide (a, b) {
//     return a / b;
// };

function operate (a, b, c) {
    if (b == "+") {
        return addition(a, c);
    } else if (b == "-") {
        return subtraction(a, c);
    } else if (b == "*") {
        return multiplication(a, c);
    } else if (b == "/") {
        return division(a, c);
    } else return "Please enter a valid operator";
};