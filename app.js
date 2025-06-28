var express = require('express');

// var path = require('path');
// var cookieParser = require('cookie-parser');
var logger = require('morgan');

const swaggerAutogen = require('swagger-autogen');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');
const swaggerJsDoc = require('swagger-jsdoc');

var app = express();

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    myapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'API documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./routes/users.js'], // files containing annotations as above
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

/* GET home page. */
// app.use('/', swaggerUi.serve);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

var options = {
  explorer: true
};

module.exports = app;
