// Initialize an array of numbers
const numArray = [10, 20, 30, 40, 50, 60];

// Get the length of the array
const length = numArray.length;

// Use the reduce method to calculate the sum of all numbers in the array
const sum = numArray.reduce((acc, curr) => {
    return acc + curr;
},0);

// Calculate the average by dividing the sum by the length of the array
const avg = sum / length;

// Log the average to the console
console.log("Average:", avg);