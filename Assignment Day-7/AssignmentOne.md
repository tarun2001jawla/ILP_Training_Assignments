# Assignment Day-7

## 1. What are anonymous functions in JavaScript?
"Anonymous" as the name suggests, is something that does not have any "name" or "identity". Anonymous functions in JavaScript are functions that do not have any name.

```
// Example:
let greeting = function(name) {
  return `Hello, ${name}!`;
};

console.log(greeting("John")); // Output: Hello, John!
```

## 2. Explain strict comparison and Abstract comparison in JavaScript?
Abstract equality will attempt to resolve the data types via type coercion before making a comparison. Strict equality will return false if the types are different. 

```
console.log(3 == "3"); // true
console.log(3 === "3"); // false.
```

## 3. Difference between arrow functions and regular functions?

| Feature                | Arrow Functions                      | Regular Functions                    |
|------------------------|--------------------------------------|--------------------------------------|
| Syntax                 | Uses arrow (`=>`) syntax.           | Uses the `function` keyword.         |
| Binding of `this`      | Lexical binding: `this` is inherited| Dynamic binding: `this` is determined|
|                        | from the surrounding lexical context.| by how the function is called.       |
| Arguments object       | No `arguments` object.              | Has an `arguments` object that      |
|                        |                                      | contains all passed arguments.       |
| Use of `new` keyword   | Cannot be used as constructors.     | Can be used as constructors.        |
| Usage of `super`       | Does not have `super` keyword binding.| Has `super` keyword binding.      |
| Implicit return        | Automatically returns single expression | Requires explicit `return` statement |
|                        | results without using `return`.         | to return a value.                    |

## 4.What is Hoisting in JavaScript?
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

```
console.log(x); // Output: undefined
var x = 10;
``` 
## 5.JavaScript is a garbage collected programming language, explain how?


