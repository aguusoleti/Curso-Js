const express = require('express');
const app = express();
const {sumArray} = require('./utils');

app.use(express.json()); // for parsing application/json

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'hola',
  });
});

app.get('/test', (req, res) => {
  res.status(200).send({ message: 'test', })
});

app.post('/sum', (req, res) => {
  res.send({
    result: req.body.a + req.body.b,

  });
});
app.post('/producto', (req, res) => {
  const { a, b } = req.body;
  // if (!a || !b) {return res.sendStatus(400)}
  if (typeof a !== 'number' || typeof b !== 'number') return  res.sendStatus(400)
   res.send({
    result: a*b
  });
});
app.post('/sumArray', (req, res) => {
  const { array, num } = req.body;
   if (!array || !num && num !==0) return res.sendStatus(400)
  // if (typeof array !== 'number' || typeof num !== 'number') return res.sendStatus(400)

  return res.json({
  result: sumArray(array, num)ero

  });
});

module.exports = app; // Exportamos app para que supertest session la pueda ejecutar
