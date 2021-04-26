const { Router } = require('express');
const { LoginService } = require('../services/LoginService');
const { LoginValidation } = require('../Middlewares/LoginValidation');

const LoginController = new Router();

LoginController.post('/', LoginValidation, LoginService);

module.exports = LoginController;