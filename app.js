const express = require('express');
const { json } = require('body-parser');
const path = require('path');
const createMail = require('./routes/new');

const app = express();

app.use(json());

app.use(createMail);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

module.exports = app;
