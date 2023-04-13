'use strict';

console.log('test the links');

// let obj = {
//   prop1: 'testing the first one',
//   prop2: 'testing the second one'
// }

// // console.log(obj)

// let person = {
//   firstName: 'Rama',
//   lastName: 'Almomani',
//   age: 24,
//   state: 'Single',
//   gender: 'Female',
//   nat: 'Jordinian'
// }

// console.log(person)
// console.log(person.firstName + ' ' + person.lastName);

// let personPar = `${person.firstName} ${person.lastName}, ${person.age} years old, she is ${person.state}, and her nationality is ${person.nat}`;

// console.log(personPar)

// let person2 = {
//   firstName: 'Ihab',
//   lastName: 'Alsalhi',
//   state: 'Single',
//   gender: 'Male',
//   nat: 'Jordinian',
//   age: 24,
//   personPar: function() {
//     let p = `${this.firstName} ${this.lastName}, ${this.age} years old, he is ${this.state}, and his nationality is ${this.nat}`
//     return p;
//   }
// }

// console.log(person2.personPar())

// // Eye color
// person2.eyeColor = 'Black';
// person2['hairColor'] = 'Black';
// console.log(person2)

// Constructor Function
function Person(firstName, lastName, state, gender, nat, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.state = state;
  this.gender = gender;
  this.nat = nat;
  this.age = age;
  // this.personPar = function() {
  //   let p = `${this.firstName} ${this.lastName}, ${this.age} years old, he is ${this.state}, and his nationality is ${this.nat}`
  //   return p;
  // }
}

// console.log(Person)

let rama = new Person('Rama', 'Almomani', 'Sigle', 'Female', 'Jordinian', 24);
let ihab = new Person('Ihab', 'Alsalhi', 'Single', 'Male', 'Jordinain', 24)


Person.prototype.personPar = function() {
  let p = `${this.firstName} ${this.lastName}, ${this.age} years old, he is ${this.state}, and his nationality is ${this.nat}`
  return p;
}

console.log(ihab.personPar())
console.log(rama)

const personParagraph = document.getElementById('personParagraph');

personParagraph.textContent = rama.personPar();

const ihabParagraph = document.createElement('p');
ihabParagraph.textContent = ihab.personPar();

const parentEle = document.getElementById('persons');
parentEle.appendChild(ihabParagraph)

// console.log(personParagraph)


const h1 = document.createElement('h1');
h1.textContent = 'Mohammed';
h1.setAttribute('id', 'newH1')

console.log(h1);

// const header = document.getElementsByTagName('header');
// header[0].appendChild(h1)

const mainHeader = document.getElementById('mainHeader');
mainHeader.appendChild(h1)