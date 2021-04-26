const jwt = require('jsonwebtoken');
const { users } = require('../../models');
const { secret } = require('../Auth/TokenValidation');

const STATUS_OK = 200;
const STATUS_CONFLICT = 409;
const STATUS_INTERNAL_SERVER_ERROR = 500;

const RegisterService = async (req, res, _next) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await users.findOne({ where: { email } });
    if (user && user.email) {
      return res.status(STATUS_CONFLICT).json({ message: 'E-mail already in database.' });
    }
    await users.create({ name, email, password, role });
    const jwtConfig = {
      expiresIn: '14d',
      algorithm: 'HS256',
    };
    const payload = { name, email, role };
    const token = jwt.sign({ data: payload }, secret, jwtConfig);
    const data = { ...payload, token };
    res.status(STATUS_OK).json(data);
  } catch (error) {
    return res.status(STATUS_INTERNAL_SERVER_ERROR).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  RegisterService,
};