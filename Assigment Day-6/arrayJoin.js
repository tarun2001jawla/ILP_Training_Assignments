// Explain the properties of the join array method function via program

let fruits = ["Apple", "Banana", "Orange"];

let joinedString1 = fruits.join();
console.log(joinedString1)

let joinedString2 = fruits.join(" - ");
console.log(joinedString2);

let joinedString3 = fruits.join("");
console.log(joinedString3);

let emptyArray = [];
let emptyString = emptyArray.join("-");
console.log(emptyString);