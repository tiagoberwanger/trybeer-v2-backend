const connection = require('../../models/connection');

const getLastMessageByEmail = async () => {
  const messages = await connection()
    .then((db) => db.collection('messages')
    .aggregate([
      { 
        $group: { 
          _id: '$from',
          lastDate: { $max: '$date' },
        },
      },
      {
        $project: {
          _id: 0,
          email: '$_id',
          lastDate: '$lastDate',
        },
      }])
    .toArray());
  return messages;
};

const getMessagesByEmail = async (email) => {
  const messages = await connection()
    .then((db) => db.collection('messages')
    .find({ $or: [{ from: email }, { to: email }] })
    .toArray());
  return messages;
};

module.exports = {
  getLastMessageByEmail,
  getMessagesByEmail,
};