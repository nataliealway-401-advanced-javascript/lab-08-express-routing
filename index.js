
'use strict';
require('dotenv');
const server = require('./lib/server');
const mongoose = require('mongoose');

const MONGODB_URI = 'mongodv://localhost:27017/class-08';

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(MONGODB_URI, mongooseOptions);


server.start(3000);