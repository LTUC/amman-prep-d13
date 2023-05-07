'use strict';

const express = require('express');
const cors = require('cors');
const {data} = require('./data.json');
const axios = require('axios');

require('dotenv').config();

const app = express();
app.use(cors());

const PORT = process.env.PORT || 3005;

app.get('/', homeHandler);
app.get('/rec', handleRec);
app.get('/recipe/search', handleSearch)


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

Recipe.allData = [];

app.listen(PORT, () => console.log(`Up and running on port ${PORT}`));