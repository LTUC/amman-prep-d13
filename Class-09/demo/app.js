'use strict'

console.log('Connected to HTML');

// Constructor function
function Order(fullname, coffeeType, isHot, ingrediant, price = 0) {
  this.fullname = fullname;
  this.coffeeType = coffeeType;
  this.isHot = isHot;
  this.price = price;
  this.ingrediant = ingrediant;
  Order.allOrders.push(this);
}

Order.allOrders = [];

// const obj = new Order('Rama', 'Black');
// console.log(obj)

// ProtoType
// Generate a price
Order.prototype.generatePrice = function (max, min) {
  this.price = Math.floor(Math.random() * (max - min + 1)) + min;
}

// Render the data
Order.prototype.render = function () {
  const order = document.getElementById('order');
  order.innerHTML = '';

  for(let i = 0; i < Order.allOrders.length; i++){
    let sigleOrder = Order.allOrders[i];
    // Create an element
    // Append the element to the parent
    // Adding the text to the created element
    const divEle = document.createElement('div');
    order.appendChild(divEle);
  
    const h4Ele = document.createElement('h4');
    h4Ele.textContent = sigleOrder.fullname;
    divEle.appendChild(h4Ele)
  
    const pEle = document.createElement('p')
    pEle.textContent = `${sigleOrder.isHot ? 'Hot' : 'Cold'} ${sigleOrder.coffeeType} coffe, $${sigleOrder.price}`;
    divEle.appendChild(pEle);
  
    const ulEl = document.createElement('ul');
    order.appendChild(ulEl);
    for(let i = 0; i < sigleOrder.ingrediant.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = sigleOrder.ingrediant[i]
    }
  }

}

// Adding new Order from the form
function addNewOrder(e) {
  e.preventDefault();
  // console.log(e)
  // console.log(e.target.fullname.value)
  // console.log(e.target.coffeeType.value)
  let fullname = e.target.fullname.value;
  let coffeeType = e.target.coffeeType.value;
  let isHot = e.target.coffeeStatus.checked;
  let ingrediant = e.target.ingrediant.value.split(',');
  // console.log(ingrediant)

  const newOrder = new Order(fullname,coffeeType,isHot, ingrediant);
  newOrder.generatePrice(2, 20)
  newOrder.render()

// Order.orders.push(newOrder)
  // localStorage.setItem('order', JSON.stringify(newOrder))

  // console.log(Order.allOrders)
  saveData();

}

// Saving the data inside the LocalStorage
function saveData() {
  let data = JSON.stringify(Order.allOrders);
  localStorage.setItem('orders', data);
}

// Gitting the data from the LocalStorage
function getDataFromLocalStorage() {
  let stringObj = localStorage.getItem('orders');
  let parseObj = JSON.parse(stringObj);
  console.log(parseObj)
  if(parseObj !== null) {
    // Order.allOrders = parseObj;
    // console.log(Order.allOrders)
    for(let i = 0; i < parseObj.length; i++) {
      // console.log(parseObj[i])
      new Order(parseObj[i].fullname, parseObj[i].coffeeType, parseObj[i].isHot, parseObj[i].ingrediant, parseObj[i].price);
    }
    console.log(Order.allOrders)
    Order.allOrders[0].render()
  }
  
}

const orderForm = document.getElementById('orderForm')
// console.log(orderForm)
orderForm.addEventListener('submit', addNewOrder)
getDataFromLocalStorage();



// LocalStorage
// localStorage.setItem('name', 'Laith')
// localStorage.setItem('arr', ['abdullah', 'alaa', 'anas'])
// localStorage.setItem('obj', {name: 'ayah', age: '24'})

// console.log(localStorage.getItem('obj'))

// // localStorage.removeItem('obj')
// // localStorage.removeItem('arr')

// // localStorage.clear()

// let personObject = {
//   name: 'Murad',
//   age: 23,
//   nat: 'Jordinian',
//   class: 'Amman-prep-d13'
// }

// const convertedObj = JSON.stringify(personObject);
// console.log(personObject.name)
// console.log(convertedObj.name)

// // const conv = JSON.parse(convertedObj)
// // console.log(conv.name)

// localStorage.setItem('personObject', convertedObj)

// let anything = localStorage.getItem('personObject');
// console.log(anything)
// const convertAnything = JSON.parse(anything)
// console.log(convertAnything)