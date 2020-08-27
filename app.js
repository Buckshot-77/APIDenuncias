const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.post('/', (request, response) => {
  const requestObject = request.body;
  const latitude = requestObject.latitude;
  const longitude = requestObject.longitude;
  console.log(latitude, longitude);
  response.json({
    status: 'success',
    data: requestObject,
  });
});

module.exports = app;
