/*
js Data Type
Primitive Data Type
- Number
- Boolean
- String
- undefined
- Null
- Symbol

Reference Type
- Object
- Arrays
- Function
*/

// Declaring a variable
var varName = 'value'
var studentsNameArray = '';

// Number
var num1 = 15;
console.log('This is the value of Num1 variable: ',num1);

var num2 = 129.5;
console.log('This is the value of Num2 variable: ',num2);

var total = num1 - num2;
console.log(total)

var num3 = Math.random();
console.log(num3)

console.log(typeof num1, typeof num2, typeof total, typeof num3)

//  String
var str = 'This is a string type';
var sent = 'My name is ';
var username = "Waleed";
var concat = sent + username;
console.log(concat);

// Null and Undefined
var fullName = null;
console.log(fullName)

var fullName = undefined;
console.log(fullName)

// var fullName = 'Raghad';

// Boolean
var bool = false;
console.log(typeof bool)


// Logical operator
let b1 = !true; // False
let b2 = true && false; // False
let b3 = true || false; // True
let b4 = 25 == '25'; // True
let b5 = 25 === '25'; // False
let b6 = 14 === 10+1+3; // True

console.log(14 === 10+1+3)

// Alert
// let fName = 'Mohammed';
// alert(fName +' '+'This website is not for you!!!!');

// let userInputForUsername = prompt('Please enter you username!')

// let userInputForColorWithDefault = prompt('Please enter a Color!', 'Red')

// console.log(userInputForUsername);

// let result = confirm('Are you Sure?');
// console.log(result)


// // Conditional stat
// let value = 12;

// if(value % 2 === 0) {
//   console.log('Even number')
// } else {
//   console.log('Odd number')
// }

// let color = prompt('Please enter a Color!');

// if (color.toLocaleLowerCase() === 'red') {
//   // Red != red
//   console.log('Horray!!')
// } else if(color.toLocaleLowerCase() === 'blue') {
//   console.log('almost')
// } else {
//   console.log('way to long')
// }


// let userNumbers = prompt('Please enter a Number!');
// console.log(typeof userNumbers)
// switch (userNumbers % 2) {
//   case 0:
//     console.log('Even Number');
//     break;
//   case 1:
//     console.log('Odd number')
//     break;
//   default:
//     console.log('Ivalid input')
//     break;
// }

let age = prompt('Please enter you age!');
console.log((age))
// if(parseInt(age)) {
  if(age <= 18) {
    alert('Not Allowed')
  } else if (age > 18 && age < 40) {
    alert('allowed')
  } else if (age > 40 && age < 65){
    alert('test 50')
  } else {
    alert('test grater than 65')
  }

// }