'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

// Esoteric Resources
const errorHandler = require( '../src/middleware/error');
const notFound = require( '../src/middleware/404' );

// Routes 
const productRoutes = require('../routes/products-routes');
const categoryRoutes = require('../routes/products-routes.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes
app.use(categoryRoutes);
app.use(productRoutes);


// Catchalls
app.use(notFound);
app.use(errorHandler);


module.exports = {
  server: app,
  start: (port) => app.listen(port, () => console.log(`Server up on port ${port}`) ),
};