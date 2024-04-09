// Swap two numbers by reference?

const numbers  = {a:10,b:20};

function swapNumbersByReference(obj){
    const temp = obj.a;  // temp = 10 
    obj.a = obj.b;  // obj.a = 20
    obj.b = temp;   // obj.b = 10

   return obj; 

}

console.log("Before swapping:",numbers); // {a:10,b:20}
swapNumbersByReference(numbers);
console.log("After swapping:",numbers); // {a:20,b:10}
