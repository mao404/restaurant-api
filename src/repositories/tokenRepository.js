const Token = require("../models/token");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

class TokenRepository {
  constructor() {}

  async create(token) {
    token.UserId = token.id;
    let cryptoToken = crypto.randomBytes(32).toString("hex");
    token.token = await bcrypt.hash(cryptoToken, 10);
    await Token.create(token);
    return { cryptoToken };
  }

  async findByUserId(UserId) {
    return await Token.findOne({ where: { UserId } });
  }

  async remove(UserId) {
    return await Token.destroy({ where: { UserId } });
  }
}

module.exports = TokenRepository;
