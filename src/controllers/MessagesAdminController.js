const { Router } = require('express');
const {  
  getLastMessageByEmail,
  getMessagesByEmail,
} = require('../models/adminMessages');

const MessagesAdminController = new Router();

MessagesAdminController.get('/search', async (req, res) => {
  const { q } = req.query;
  const messagesByEmail = await getMessagesByEmail(q);
  res.status(200).send(messagesByEmail);
});

MessagesAdminController.get('/', async (req, res) => {
  const messages = await getLastMessageByEmail();
  try {
    res.status(200).send(messages);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = MessagesAdminController;