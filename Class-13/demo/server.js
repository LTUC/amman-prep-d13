'use strict';

const express = require('express');
const cors = require('cors');

const data = require('./data.json');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', handleHome);
app.post('/city', createCity);
app.get('/city', handleCity);

app.use('*', notFoundPage)

function handleCity(req, res) {
  data.map(item =>
    new City(item.city, item.description, item.id)
  )
  res.status(200).json(City.allCity)
}

function handleHome(req, res) {
  console.log('testing the first url')
  res.status(200).json({
    statusCode: 200,
    message: 'Testing the first URL!'
  })
}

function createCity(req, res) {
  // console.log(req.body);
  let newCity = new City(req.body.name, req.body.dis, req.body.id);
  res.status(201).json(newCity)
}

function notFoundPage(req, res) {
  res.status(404).json({
    code: 404,
    responseTxt: 'Page Not Found!!'
  })
}

function City(name, discription, id) {
  this.cityName = name;
  this.discription = discription;
  this.id = id;
  City.allCity.push(this);
}

City.allCity = [];

app.listen(3000, () => console.log(`Up and Running on port 3000`));