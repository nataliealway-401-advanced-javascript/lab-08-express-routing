'use strict';

const { server } = require('../lib/server.js');
const supergoose = require('./supergoose.js');
const mockRequest = supergoose(server);

describe('server testing', () => {

  it('should respond properly on get to /categories', () => {
  
    return mockRequest
      .get('/api/v1/categories')
      .then(results => {
        expect(results.status).toBe(200);
  
      })
      .catch(console.error);
  
  });

  it('should respond properly on get to /products', () => {

    return mockRequest
      .get('/api/v1/products')
      .then(results => {
        expect(results.status).toBe(200);

      })
      .catch(console.error);

  });
  
});  