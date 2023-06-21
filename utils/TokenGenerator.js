const jwt = require("jsonwebtoken");

// Token Generator
const makeToken = (data, expiryTimeInHours) => {
  const expirationDate = new Date();
  expirationDate.setHours(new Date().getHours() + expiryTimeInHours);
  // Be sure to configure .env with the JWT_SECRET_KEY
  return jwt.sign({ data, expirationDate }, process.env.JWT_SECRET_KEY);
};

module.exports = makeToken;
