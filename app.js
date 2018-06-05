const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
  res.status(200).send('Hello World!');
});

app.get('/env', (req, res, next) => {
  res.status(200).send(process.env.NODE_ENV);
});

// 1. Regular Node.js server
// app.listen(3000);

// 2. Packaging the server up to be deployed on Lambda
const serverless = require('serverless-http');
module.exports.server = serverless(app);