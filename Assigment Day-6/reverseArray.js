// Reverse an array? Input: [1, 2, 3, 4, 5, 6]

const inputArray  = [1, 2, 3, 4, 5, 6];
const reverseArray = (array) => {
    let reversedArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}
console.log("Original array is :",inputArray)
const reversedArray = reverseArray(inputArray);
console.log('Reversed array is:',reversedArray);

