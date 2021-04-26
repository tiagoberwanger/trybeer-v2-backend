const { Router } = require('express');
const { createSale, 
  getAllSales, 
  getSaleById, 
  changeSaleStatus,
} = require('../services/SalesService');
const { TokenValidation } = require('../Auth/TokenValidation');

const SalesController = new Router();

SalesController.post('/', TokenValidation, createSale);

SalesController.put('/:id', changeSaleStatus);

SalesController.get('/:id', getSaleById);

SalesController.get('/', getAllSales);

module.exports = SalesController;