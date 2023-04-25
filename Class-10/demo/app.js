// let factSum = 1;
// let factNum = 10;
// while(factNum != 0) {
//   factNum *= 
// }

// function fact(n) {
//   let total = 1
//   if(n === 0 || n === 1) return total;
//   for(let i = 0; i < n; i++) {
//     total *= n - i;
//   }
//   return total;
// }

// console.log(fact(100))

// function factorial(n) {
//   if(n === 0 || n === 1) return 1;
//   else return n * factorial(n - 1)
// }

// console.log(factorial(100))

// function fab(n) {
//   if(n <= 1) return n;
//   // console.log(fab(n - 1))
//   return fab(n - 1) + fab(n - 2)
// }

// console.log(fab(19))


// let total = 100;
// let newTotal = total;

// total = 10;
// console.log(total)
// console.log(newTotal)

// let person = {
//   name: 'Saleh',
//   age: 24,
//   gender: 'male'
// }

// let newPerson = person;

// person.name = 'Alaa'

// let person3 = person
// console.log(person)
// console.log(newPerson)
// console.log(person3)

// let names = ['Sham', 'Anas', 'Ayah'];

// console.log(names)

// let newNames = names;
// newNames.push('Mohammed')

// console.log(newNames)

// const str = 'My name is Waleed';
// const regex = /^name/i;
// console.log(str.match(regex))
// console.log(regex.test(str))

// const str2 = 'abcddefg';
// const regex2 = /abcd{2}/
// console.log(regex2.test(str2))

const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im

const phoneNumber = '(123)123 123456'
console.log(phoneRegex.test(phoneNumber))
