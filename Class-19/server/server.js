'use strict';

const express = require('express');
const cors = require('cors');
const { data } = require('./data.json');
const axios = require('axios');

require('dotenv').config();

const pg = require('pg'); // Require the Postgres 
const client = new pg.Client(process.env.DBURL); // Create a new Client from the Postgress that will take the database url (configuration url contains server, username, port number, database name)

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3005;

app.get('/', homeHandler);
app.get('/rec', handleRec);
app.get('/recipe/search', handleSearch);
app.get('/favrecipes', handleFavRecipes)
app.post('/favrecipes', handleAddFavRecipes)
app.get('/favrecipes/:id', getRecipeById)
// http://localhost:3000/favrecipes/1

app.put('/favrecipes/:id', updateFavRec);
app.delete('/favrecipes/:id', deleteRecById);

// Product EndPoint
app.get('/product', getAllProduct);
app.post('/product', addFavProduct);
app.put('/product/:id', updateProduct);
app.delete('/product/:id', deleteProduct);

app.use(errorHandler)

function homeHandler(req, res) {
  res.status(200).json({
    code: 200,
    message: 'Welcome to the home page!'
  })
}

async function handleRec(req, res) {

  const axiosCallApi = await axios.get(`${process.env.URL}/random?apiKey=${process.env.APIKEY}&number=10`)
  console.log(axiosCallApi)

  axiosCallApi.data.recipes.map(item =>
    new Recipe(item.title, item.summary, item.image, item.id)
  )

  res.status(200).json({
    code: axiosCallApi.status,
    elementNumber: axiosCallApi.numbers,
    recipes: Recipe.allData
  })
}

function handleSearch(req, res) {
  const searchQuery = req.query.search;
  // console.log(req.query)
  axios.get(`${process.env.URL}/complexSearch?apikey=${process.env.APIKEY}&query=${searchQuery}`).then(result => {
    res.status(200).json({
      code: 200,
      number: result.data.number,
      recipes: result.data.results
    })
  }).catch(err => {
    errorHandler(err, req, res)
  })
}

function handleFavRecipes(req, res) {
  const sql = `select * from fav_recipe`;
  client.query(sql).then(data => {
    data.rows.map(item => new Recipe(item.title, item.summary, item.image, item.id));

    res.json({
      count: data.rowCount,
      data: Recipe.allData
    })
  }).catch(err => {
    errorHandler(err, req, res);
  })
}

function handleAddFavRecipes(req, res) {
  const userInput = req.body;
  const sql = `insert into fav_recipe(title, ready_in_minutes, summary, image) values($1, $2, $3, $4) returning *`;

  const handleValueFromUser = [userInput.title, userInput.ready_in_minutes, userInput.summary, userInput.image];

  client.query(sql, handleValueFromUser).then(data => {
    res.status(201).json(data.rows)
  }).catch(err => errorHandler(err, req, res))
}

function getRecipeById(req, res) {
  // console.log(req.params)
  const id = req.params.id;
  const sql = `select * from fav_recipe where id = ${id}`;
  client.query(sql).then(data => {
    const recObj = new Recipe(data.rows[0].title, data.rows[0].summary, data.rows[0].image, data.rows[0].id)
    res.status(200).json(recObj)
  }
  )
}

function updateFavRec(req, res) {
  const id = req.params.id;
  const newData = req.body;
  const sql = `update fav_recipe set title = $1, summary = $2, image = $3, ready_in_minutes = $4 where id = $5 returning *`;
  const updatedValue = [newData.title, newData.summary, newData.image, newData.ready_in_minutes, id];
  client.query(sql, updatedValue).then(data =>
    res.status(202).json(data.rows)
  )
}

function deleteRecById(req, res) {
  const id = req.params.id;
  const sql = `delete from fav_recipe where id = ${id}`;
  client.query(sql).then(() => {
    return res.status(204).json({
      code: 204,
      message: `Row deleted successfuly with id: ${id}`
    })
  }).catch(err => errorHandler(err, req, res))
}

// Product
function getAllProduct(req, res) {
  Product.all = [];
  const sql = 'select * from product';
  client.query(sql).then(result => {
    result.rows.map(item =>
      new Product(item.title, item.product_id, item.description, item.brand, item.thumbnail, item.stock, item.price, item.rating)
    )

    res.status(200).json({
      code: 200,
      products: Product.all
    })
  }).catch(err => errorHandler(err, req, res))
}

function addFavProduct(req, res) {
  const userInput = req.body;
  
  const sql = `insert into product(title, product_id, description, brand, thumbnail, stock, price, rating) values($1, $2, $3, $4, $5, $6, $7, $8) returning *`;
  
  const sqlValues = [userInput.title, userInput.id, userInput.description, userInput.brand, userInput.thumbnail, userInput.stock, userInput.price, userInput.rating];

  client.query(sql, sqlValues).then(result => {
    res.status(201).json(result.rows)
  }).catch(err => errorHandler(err, req, res));
}

function updateProduct(req, res) {
  const id = req.params.id;
  const userInput = req.body;

  const sql = `update product set title = $1, description = $2, brand = $3 where product_id = $4 returning *`;

  const values = [userInput.title, userInput.description, userInput.brand, id];

  client.query(sql, values).then(result => {
    res.status(202).json({
      code: 202,
      product: result.rows
    })
  }).catch(err => errorHandler(err, req, res))
}

function deleteProduct(req, res) {
  const id = req.params.id;

  const sql = `delete from product where product_id = ${id}`;

  client.query(sql).then(result => {
    res.status(204).json(result.rowCount)
  }).catch(err => errorHandler(err, req, res))
}


function errorHandler(error, req, res) {
  res.status(500).json({
    code: 500,
    message: error.message || error
  })
}

function Recipe(title, summary, image, id) {
  this.title = title;
  this.summary = summary;
  this.image = image;
  this.id = id;
  Recipe.allData.push(this);
}

function Product(title, id, description, brand, thumbnail, stock, price, rating) {
  this.title = title;
  this.id = id;
  this.description = description;
  this.brand = brand;
  this.thumbnail = thumbnail;
  this.stock = stock;
  this.price = price;
  this.rating = rating;
  Product.all.push(this);
}

Product.all = [];
Recipe.allData = [];

client.connect().then(con => {
  console.log(con)
  app.listen(PORT, () => console.log(`Up and running on port ${PORT}`));
})