const express = require('express')
const sls = require('serverless-http')
const app = express()
// throw Error('Well this broke.')
app.get('/', (req, res, next) => {
  res.status(200).send('API works.')
})
app.get('/error', (req, res, next) => {
  const err = new Error('Not found.')
  res.status(404).send(err.message)
})
app.get('/internal_error', (req, res, next) => {
  const err = new Error('This died...')
  throw err
})
// app.use((err, req, res, next) => {
//   throw err
// })
module.exports.server = sls(app)
