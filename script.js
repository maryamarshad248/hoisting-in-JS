'use strict';

// hoisting by variables in global scope:

console.log(myName);
//console.log(job); // reference error
//console.log(birthYear); // reference error

var myName = 'Maryam';
let job = 'webDeveloper';
const birthYear = 1996;

// hoisting by function:

console.log(addOne(5));
// console.log(addTwo(5)); // reference error
// console.log(addThree(5)); // reference error
// function declaration
function addOne(num) {
  return num + 1;
}
addOne(5);

//function expression
const addTwo = function (num) {
  return num + 2;
};

addTwo(5);

// arrow function
const addThree = num => num + 3;
addThree(5);

// example
//console.log(undefined);

const numProducts = 10;
if (!numProducts) deletShoppingCart();
console.log(numProducts);

//var numProducts = 10; reference error
function deletShoppingCart() {
  console.log('deleted all products!');
}
deletShoppingCart();
