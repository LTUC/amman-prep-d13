'use strict'

console.log('Connected to HTML');

// Constructor function
function Order(fullname, coffeeType, isHot, ingrediant) {
  this.fullname = fullname;
  this.coffeeType = coffeeType;
  this.isHot = isHot;
  this.price = 0;
  this.ingrediant = ingrediant;
}

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

  // Create an element
  // Append the element to the parent
  // Adding the text to the created element
  const divEle = document.createElement('div');
  order.appendChild(divEle);

  const h4Ele = document.createElement('h4');
  h4Ele.textContent = this.fullname;
  divEle.appendChild(h4Ele)

  const pEle = document.createElement('p')
  pEle.textContent = `${this.isHot ? 'Hot' : 'Cold'} ${this.coffeeType} coffe, $${this.price}`;
  divEle.appendChild(pEle);

  const ulEl = document.createElement('ul');
  order.appendChild(ulEl);
  for(let i = 0; i < this.ingrediant.length; i++) {
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = this.ingrediant[i]
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
  console.log(newOrder)
}

const orderForm = document.getElementById('orderForm')
// console.log(orderForm)
orderForm.addEventListener('submit', addNewOrder)
