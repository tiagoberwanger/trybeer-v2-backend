const { Router } = require('express');
const { ProfileService } = require('../services/ProfileService');

const ProfileController = new Router();

ProfileController.put('/', ProfileService);

module.exports = ProfileController;