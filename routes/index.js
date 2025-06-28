var express = require('express');
var router = express.Router();

const swaggerAutogen = require('swagger-autogen');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./../swagger-output.json');


/* GET home page. */
router.get('/api', swaggerUi.serve);

module.exports = router;
