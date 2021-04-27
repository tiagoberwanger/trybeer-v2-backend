const connection = require('../../models/connection');

const getMessagesByEmail = async (email) => {
  const messages = await connection()
    .then((db) => db.collection('messages')
    .find({ $or: [{ from: email }, { to: email }] })
    .toArray());
  return messages;
};

const createMessage = async (from, to, message, date) => {
  const newMessage = await connection()
    .then((db) => db.collection('messages').insertOne({ from, to, message, date }));
  return (newMessage.ops[0]);
};

module.exports = {
  getMessagesByEmail,
  createMessage,
};
