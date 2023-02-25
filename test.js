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

function mulitplication (...numbers) {
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