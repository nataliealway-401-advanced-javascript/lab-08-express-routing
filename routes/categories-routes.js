'use strict';

//import express framework
const express = require('express');

//create router to be exported
const categoriesRouter = express.Router();

const Categories = require('../models/categories/categories');
const categories = new Categories(); 

// mock database
// let db = [];

//define all routes for categories and their callBacks
categoriesRouter.get('/api/v1/categories', getCategories);
categoriesRouter.post('/api/v1/categories', postCategories);
categoriesRouter.get('/api/v1/categories/:id', getCategory);
categoriesRouter.put('/api/v1/categories/:id', putCategories);
categoriesRouter.delete('/api/v1/categories/:id', deleteCategories);

// ROUTE HANDLER FUNCTIONS
function getCategories(request,response,next) {
  // expects an array of object to be returned from the model
  categories.get()
    .then( data => {
      console.log(data);
      const output = {
        count: data.length,
        results: data,
      };
      response.status(200).json(output);
    })
    .catch(next);
}

function getCategory(request,response,next) {
  // expects an array with the one matching record from the model
  categories.get(request.params.id)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

function postCategories(request,response,next) {
  // expects the record that was just added to the database
  categories.post(request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

function putCategories(request,response,next) {
  // expects the record that was just updated in the database
  categories.put(request.params.id, request.body)
    .then( result => response.status(200).json(result) )
    .catch( next );
}

function deleteCategories(request,response,next) {
  // Expects no return value (resource was deleted)
  categories.delete(request.params.id)
    .then( result => response.status(200).json(result))
    .catch( next );
}

module.exports = categoriesRouter;