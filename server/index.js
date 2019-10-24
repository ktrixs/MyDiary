const express = require('express');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '../UI')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../UI/index.html'));
});

app.get('/users', (req, res) => {
  res.json([
    {
      id: 1,
      firstName: 'Kayitare',
      lastName: 'Thierry',
      email: 'kayitarethiers20@gmail.com'
    },
    { id: 2, firstName: 'Gatesi', lastName: 'Angel', email: 'kayit@gmail.com' },
    {
      id: 3,
      firstName: 'Manzi',
      lastName: 'Gendeon',
      email: 'kayitare@gmail.com'
    }
  ]);
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  }
  debug(`http://localhost: ${chalk.green(port)}`);
});
