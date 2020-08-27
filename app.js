const express = require('express');
const morgan = require('morgan');

const complaintRoute = require('./routes/complaintRoute');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(complaintRoute);

module.exports = app;
