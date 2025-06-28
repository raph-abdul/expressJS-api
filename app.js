const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { specs, swaggerUi } = require('./swagger');

const  app = express();

var subscribeRouter = require('./routes/subscribe');
var unsubscribeRouter = require('./routes/unsubscribe');
var usersRouter = require('./routes/users');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/subscribe.js', subscribeRouter);
app.use('/unsubscribe.js', unsubscribeRouter)
app.use('/users.js', usersRouter);

var options = {
  explorer: true
};

module.exports = app;
