//Sort an array by both ascending and descending order
const array = [5, 2, 8, 1, 4];

const ascendingOrder = array.sort();
console.log("Ascending Order:", ascendingOrder);

const descendingOrder = array.sort((a, b) => b - a);
console.log("Descending Order:", descendingOrder);