const { Router } = require('express');
const products = require('../services/ProductsService');

const STATUS_OK = 200;
const STATUS_INTERNAL_SERVER_ERROR = 500;

const ProductsController = new Router();

ProductsController
  .get('/', async (_req, res) => {
    try {
      const allProducts = await products.getAll();
  
      return res.status(STATUS_OK).json(allProducts);
    } catch (error) {
      console.log(error.message);
      return res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
    }
  });

module.exports = ProductsController;