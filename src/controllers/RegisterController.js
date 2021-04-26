const { Router } = require('express');
const { RegisterService } = require('../services/RegisterSevice');

const RegisterController = new Router();

RegisterController.post('/', RegisterService);

module.exports = RegisterController;