function addition (...numbers) {
    let total = 0;
    for(let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
};

function subtraction (...numbers) {
    let total = numbers[0];
    for(let i = 1; i < numbers.length; i++) {
        total -= numbers[i];
    };
    return total;
};

function mulitplication (...numbers) {
    let total = 1;
    for(let i = 0; i < numbers.length; i++) {
        total *= numbers[i];
    };
    return total;
};

function division (...numbers) {
    let total = numbers[0];
    for(let i = 1; i < numbers.length; i++) {
        total /= numbers[i];
    };
    return total;
};