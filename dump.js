//returns the text content of button pressed

const operation = [];

const buttons = document.querySelectorAll(".buttons");
buttons.forEach(button => {
   button.addEventListener('click', returnButton)
})
function returnButton(event) {
    if(event.target.textContent.includes("+") || event.target.textContent.includes("-") || event.target.textContent.includes("*") || event.target.textContent.includes("/")) {
        operation.push(event.target.textContent);
    } else operation.push(Number(event.target.textContent));
}



//various operator functions

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

function operate (obj) {
    if (obj[1] == "+") {
        return addition(Number(obj[0]), Number(obj[2]));
    } else if (obj[1] == "-") {
        return subtraction(Number(obj[0]), Number(obj[2]));
    } else if (obj[1] == "*") {
        return multiplication(Number(obj[0]), Number(obj[2]));
    } else if (obj[1] == "/") {
        return division(Number(obj[0]), Number(obj[2]));
    } else return "Please enter a valid operator";
};