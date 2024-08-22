function calculateCircleArea(radius) {
    const pi = 3.14159;
    return pi * radius * radius;
}

let radius = prompt("Masukkan jari-jari lingkaran:");
radius = parseFloat(radius);
console.log(`Luas lingkaran dengan jari-jari ${radius} adalah ${calculateCircleArea(radius)}`);

function squareNumbers(numbers) {
    return numbers.map(function(number) {
        return number * number;
    });
}

let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = squareNumbers(numbers);
console.log(`Array angka kuadrat: ${squaredNumbers}`);
