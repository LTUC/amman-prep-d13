'use strict';

const express = require('express');
const cors = require('cors');
const pg = require('pg');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const client = new pg.Client(process.env.DATABASE_URL);

app.get('/', handleHome);
app.get('/team', getAllTeamMember);
app.post('/team', addNewTeamMember);
app.put('/team/:id', updateTeamMember);
app.delete('/team/:id', deleteTeamMember);

function handleHome(req, res) {
  res.status(200).json({
    code: 200,
    message: 'Welcome to home page'
  })
}

function getAllTeamMember(req, res) {
  const sql = `select * from team`;

  client.query(sql).then(result => {
    res.status(200).json({
      code: 200,
      count: result.rowCount,
      team: result.rows
    })
  }).catch(error => erorrHandler(error, req, res))
}

function addNewTeamMember(req, res) {
  const userDate = req.body;

  const sql = `insert into team(first_name, last_name, avatar, expertise, fb, tw) values ($1, $2, $3, $4, $5, $6) returning *`;

  const replacedValues = [userDate.first_name, userDate.last_name, userDate.avatar, userDate.expertise, userDate.fb, userDate.tw];

  client.query(sql, replacedValues).then(result => {
    res.status(201).json({
      code: 201,
      team: result.rows
    })
  }).catch(error => erorrHandler(error, req, res))
  
  // first_name varchar(255),
  // last_name varchar(255),
  // avatar varchar(1000),
  // expertise varchar(255),
  // fb varchar(255),
  // tw varchar(255),
}

function updateTeamMember(req, res) {
  const id = req.params.id;
  const userDate = req.body;

  const sql = `update team set first_name = $1, last_name = $2, avatar = $3, expertise = $4, fb = $5, tw = $6 where id = $7 returning *`;

  const replacedValues = [userDate.first_name, userDate.last_name, userDate.avatar, userDate.expertise, userDate.fb, userDate.tw, id];

  client.query(sql, replacedValues).then(result => {
    res.status(202).json({
      code: 202,
      team: result.rows
    })
  }).catch(error => erorrHandler(error, req, res))
}

function deleteTeamMember(req, res) {
  const id = req.params.id;

  const sql = `delete from team where id = ${id}`
  client.query(sql).then(result => {
    res.status(204).json({
      code: 204,
      team: result.rows
    })
  }).catch(error => erorrHandler(error, req, res))
}

function erorrHandler(err, req, res) {
  res.status(500).json({
    code: 500,
    error: err.message || err
  })
}

client.connect().then(() => {
  app.listen(PORT, () => console.log(`Up and running on port: ${PORT}`))
}).catch(err => console.log(err))