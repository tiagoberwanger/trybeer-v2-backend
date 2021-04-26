const STATUS_UNAUTHORIZED = 401;
const STATUS_INTERNAL_SERVER_ERROR = 500;

const validateEmail = (email) => {
  const mailRegex = /^\S+@\S+$/;
  return mailRegex.test(email);
};

const validateEmailAndPassword = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(STATUS_UNAUTHORIZED).json({ message: 'All fields must be filled' });
  }
  if (!validateEmail(email) || password.length < 6) {
    return res.status(STATUS_UNAUTHORIZED).json({ message: 'Incorrect username or password' });
  }
};

const LoginValidation = async (req, res, next) => {
  try {
    validateEmailAndPassword(req, res);
  } catch (err) {
    return res.status(STATUS_INTERNAL_SERVER_ERROR).json({ err: 'Server Internal Error' });
  }
  next();
};

module.exports = {
  LoginValidation,
};
