const http = require('http');
const express = require('express');
const path = require('path');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const bodyParse = require('body-parser');
import { data } from './models/entries';
import { users } from './models/users';
const diaryRouter = require('./routes/diaryRouter')(data);
const userRouter = require('./routes/userRouter')(users);
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: true }));

app.use('/api/v1/entries', diaryRouter);
app.use('/api/v1/users', userRouter);

app.use(express.json());
app.use(morgan('tiny'));
app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../UI')));
// app.use('/api/v1/entries', itemsRouter);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../UI/index.html'));
});

const server = http.createServer(app);

server.listen(port, err => {
  if (err) {
    console.log(err);
  }
  debug(`http://localhost: ${chalk.green(port)}`);
});
