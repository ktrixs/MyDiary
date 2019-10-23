const express = require('express');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();

const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../UI/index.html'));
});

app.listen(port, errs => {
  if (errs) {
    console.log(errs);
  }
  debug(`running on port ${chalk.green(port)}`);
});
