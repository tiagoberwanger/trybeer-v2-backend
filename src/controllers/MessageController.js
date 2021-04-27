const { Router } = require('express');
const {  
  getMessagesByEmail,
  createMessage,
} = require('../models/messages');

const MessageController = new Router();

MessageController.get('/', async (req, res) => {
  const { email } = req.headers;
  const messagesByEmail = await getMessagesByEmail(email);
  res.status(200).send(messagesByEmail);
});

MessageController.post('/', async (req, res) => {
  const { from, to, message, date } = req.body;
  const newMessage = await createMessage(from, to, message, date);
  res.status(200).send(newMessage);
});

module.exports = MessageController;