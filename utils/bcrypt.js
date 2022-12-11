const bcrypt = require("bcrypt");

const generateHash = async (password) => {
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  return passwordHash;
};

module.exports = generateHash;
