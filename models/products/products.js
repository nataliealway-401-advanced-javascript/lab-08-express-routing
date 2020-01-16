'use strict';

// this js file is going to import the schema, import stuff from mongo.js, create a model and export it.

const Model = require('../mongo');
const schema = require('./products-schema');

class Products extends Model {
  constructor () { super(schema); }

}

module.exports = Products;