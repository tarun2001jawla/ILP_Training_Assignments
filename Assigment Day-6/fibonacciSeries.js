// Print the fibonacci sequence?

function printFibonacciSeries(n){
    let fibSeries = [];
    let a = 0,b=1;

    for(let i=0;i<n;i++){
        fibSeries.push(a);
        let next = a+b;
        a = b;
        b = next;
    }
    return fibSeries;

}

const n = 5;
const fibSeries = printFibonacciSeries(n);

console.log(fibSeries);