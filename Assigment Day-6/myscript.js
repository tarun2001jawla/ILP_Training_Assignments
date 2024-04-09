let fruits = ["Apple", "Banana", "Orange"];

let myDiv = document.getElementById("myDiv");

let ul = document.createElement("ul");

fruits.forEach(function(fruit) {
    let li = document.createElement("li");
    li.textContent = fruit;
    ul.appendChild(li);

});
myDiv.appendChild(ul);
