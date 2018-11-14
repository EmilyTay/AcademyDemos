const jwt = require('jsonwebtoken');

const secret = 'bookish';

function createTokenForUser(username) {
  return jwt.sign({ username: username }, secret);
}

function isTokenValid(token) {
  if (!token) {
      return false;
  }
  try {
      const decoded = jwt.verify(token, secret);
      return !!decoded;
  } catch (e) {
      return false;
  }
}

exports.createTokenForUser = createTokenForUser;
exports.isTokenValid = isTokenValid;