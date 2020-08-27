const express = require('express');
const morgan = require('morgan');

const complaintRoute = require('./routes/complaintRoute');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use('/v1/denuncias', complaintRoute);

module.exports = app;
