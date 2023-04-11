'use strict';

// let fullname = 'waleed';
// console.log(fullname)


// Arrays
// let std1 = 'Mohammed'
// let std2 = 'Rama'
// let std3 = 'Omar'
// let std4 = 'Raghad'

let studentArr = ['Mohammed', 'Rama', 'Omar', 'Raghad'];
// let arr = ['Mohammed', 'Rama', 'Omar', 'Raghad', 12, true, ['class 1', 'class 2']];
// console.log(studentArr);
// console.log(arr.length);

// console.log(arr[6][1])




// studentArr[4] = 'Waleed';

// studentArr[14] = 'Saleh';

// Add to the end of the array and return the new length of the array
studentArr.push('Hamza');

// Adding to the begining of the array and return the new length of the array
studentArr.unshift('Abdullah')

// Remove the last element from an array
studentArr.pop();

// Remove the first element from an array
studentArr.shift();

studentArr.push('Ihab', 'Alaa', 'Ayah');

// Delete and replace an element in spec. index
// studentArr.splice(4, 1, 'Bashar')
// (starting index, how many item to delete, new added value)

console.log(studentArr);



// Looooops
// For
// i = i + 1; => i++
// for(let i = 0; i <= 5; i++) {
//   console.log(i)
// }


// for(let i = 0; i < studentArr.length; i++) {
//   console.log(studentArr[i])
// }

// let studentName = '';

// for (let i = 0; i < studentArr.length; i++) {
//   // console.log(studentArr[i])
//   if (studentArr[i] === 'Waleed') {
//     studentName = studentArr[i]
//   }
// }

// console.log(studentName)

// let numberArr = [12, 14, 1, 5, 8];
// let sum = 0;

// for (let i = 0; i < numberArr.length; i++) {
//   if (numberArr[i] !== 14) {
//     sum = sum + numberArr[i];
//   }
// }

// console.log(sum)

// While
// while(cond) {
//   excution;
// }

// let i = 0;
// while(i < 10) {
//   console.log(i)
//   i++;
// }


// let i = 0;
// while(i < studentArr.length) {
//   console.log(studentArr[i])
//   i++;
// }

// let username = prompt('Please enter you username');
// while(username !== 'farah') {
//   username = prompt('Please enter you username');
//   console.log(username)
// }

// Do While

// let username;
// do {
//   username = prompt('Please enter you username')
//   console.log(username)
// } while (username !== 'farah')

// console.log(username)


// Functions

let numberArr = [12, 14, 1, 5, 8];
let numberArr1 = [12, 20, 1, 5, 8];
let numberArr2 = [102, 140, 1, 55, 1];
let numberArr3 = [12, 14, 1, 5, 8];
let numberArr4 = [12, 14, 1, 5, 8];
let numberArr5 = [12, 14, 1, 5, 8];
let numberArr6 = [12, 14, 1, 5, 8];

// let sum = 0;

// for (let i = 0; i < numberArr.length; i++) {
//   if (numberArr[i] !== 14) {
//     sum = sum + numberArr[i];
//   }
// }

// console.log(sum)

// let sum1 = 0;

// for (let i = 0; i < numberArr1.length; i++) {
//   if (numberArr1[i] !== 14) {
//     sum1 = sum1 + numberArr1[i];
//   }
// }

// console.log(sum1)

function funcName() {
  // Block of Code
}

// sumArray(numberArr3)

function sumArray(arr) {
  let sum1 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 14) {
      sum1 = sum1 + arr[i];
    }
  }

  console.log(sum1)
  return sum1;

}

sumArray(numberArr)
sumArray(numberArr1)
sumArray(numberArr2);


let total = sumArray(numberArr) * sumArray(numberArr1) * sumArray(numberArr2);
console.log(total)


const totalFunction = function(param) {
  console.log(param)
}

totalFunction('test')

// Arrow function
const square = (param) => {
  return param * param;
}

let sq = square(50);
console.log(sq)

console.log(square(5))

const checkValue = (arr, userInput) => {
  for(let i = 0; i < arr.length; i++) {
    if(userInput === arr[i]) {
      return 'Yes'
    } 
    return 'No';
  }
}

let userInput = prompt('please enter something');

let compare = checkValue(['Mohammed', 'Assel', 'Ahmad', 'Omar'], userInput);

console.log(compare)