let arr1 = [1, 2, 3, 4, 5];

// forEach method: Iterates over each element in the array
arr1.forEach(function(element) {
    console.log("forEach:", element);
});


let arr2 = [1, 2, 3, 4, 5];

// map method: Creates a new array by applying a function to each element of the array
let doubled = arr2.map(function(element) {
    return element * 2;
});

console.log("map:", doubled);


let arr3 = [1, 2, 3, 4, 5];

// filter method: Creates a new array with elements that pass the test implemented by the provided function
let evenNumbers = arr3.filter(function(element) {
    return element % 2 === 0;
});

console.log("filter:", evenNumbers);


let arr4 = [1, 2, 3, 4, 5];

// reduce method: Reduces the array to a single value by applying a function to each element and accumulating the result
let sum = arr4.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log("reduce:", sum);


let arr5 = [1, 2, 3, 4, 5];

// includes method: Determines whether an array includes a certain value among its entries, returning true or false as appropriate
let hasThree = arr5.includes(3);

console.log("includes:", hasThree);


let arr6 = [1, 2, 3, 4, 5];

// some method: Tests whether at least one element in the array passes the test implemented by the provided function
let hasEven = arr6.some(function(element) {
    return element % 2 === 0;
});

console.log("some:", hasEven);


let arr7 = [2, 4, 6, 8, 10];

// every method: Tests whether all elements in the array pass the test implemented by the provided function
let allEven = arr7.every(function(element) {
    return element % 2 === 0;
});

console.log("every:", allEven);
