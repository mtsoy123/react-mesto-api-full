const jwt = require('jsonwebtoken');
const UnauthorizedErr = require('../utils/errors/UnauthorizedErr');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const token = req.cookies.jwt;
  if (!token) {
    throw new UnauthorizedErr('111Пользователь не авторизован');
  }

  let payload;

  try {
    payload = jwt.verify(
      token,
      // 'secret-key',
      NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
    );
  } catch (err) {
    throw new UnauthorizedErr('222Пользователь не авторизован');
  }

  req.user = payload;
  next();
};
