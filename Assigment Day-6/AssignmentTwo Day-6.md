# Assignment-2 Day-6

## 1. Why do we use functions in JavaScript?

- Functions are used to perform a specific task.
- Functions are used to avoid code repetition.
- Functions are used to make code reusable.
- Functions are used to make code readable.
- Functions are used to make code maintainable.

## 2. What is Function Invocation?

Function Invocation is used to execute the function code and it is common to use the term "call a function" instead of "invoke a function". The code inside a function is executed when the function is invoked.

Example:
```javascript
function myFunction() {
  alert("Hello World!");
}
myFunction();

## 3.Does a function behave like an object in Javascript? Prove it by an example

In JavaScript, functions are objects, because they can be passed to other functions, returned from functions, and assigned to variables and properties.

Example:
```
function displayFavoriteDish() {
  const favDish = 'pizza';

  console.log(`My favorite dish is ${favDish}`);
}
displayFavoriteDish.options = ['pizza', 'pasta', 'burger'];
console.log(displayFavoriteDish);



## 4.What are Events in Javascript?
Events are things that happen in the system you are programming, which the system tells you about so your code can react to them.
Example : if the user clicks a button on a webpage, you might want to react to that action by displaying an information box

## 5. What is a string?
The JavaScript string is an object that represents a sequence of characters.

There are 2 ways to create string in JavaScript:
By string literal:
   let stringName="Hello, World!";  
By string object (using new keyword):
    let stringName=new String("Hello, World!");  

## 6.What is an array? Is it static or dynamic in Javascript?
The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
In Javascript arrays are dynamic only in the sense we can perform adding, removing elements based on index values. 

## 7. Difference between Map and Set?
-Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
 Example : 
let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj = Object.fromEntries(map.entries()); // make a plain object
console.log(obj.orange);
-A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
  Example: 
    let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
set.add(john);
set.add(pete);
set.add(mary);
for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}


## 8. Difference between Array and Map?
| Feature          | Array                | Map                 |
|------------------|----------------------|---------------------|
| Data Structure   | Ordered collection   | Collection of key-value pairs |
| Key              | Index-based (integer, starts from 0) | Any data type (string, object, etc.) |
| Value            | Element value        | Value associated with the key |
| Adding elements | Can add elements at the end of the array using `push()` or at any index using assignment | Use `set()` method to add key-value pairs |
| Accessing elements | Can access elements using index (`array[index]`) | Can access values using keys (`map.get(key)`) |


## 9. What are array methods? List a few names?
Array methods are functions built-in to JavaScript that we can apply to our arrays. Each method has a unique function that performs a change or calculation to our array.
-1. map( )
-2. filter( )
-3. reduce( )
-4. sort( )
-5. concat( )
-6. every( )
-7. find( )
-8. findIndex() 
etc are some of common used array methods in Javascript

## 10.. In how many ways can we traverse through an array in Javascript?
. Using the `for` Loop
Using the `forEach` Method
Using a for...of 
etc are some common ways to iterate over a aarray in javscript 
