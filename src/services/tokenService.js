const TokenRepository = require("../repositories/tokenRepository");
const repository = new TokenRepository();

const save = async (token, id) => {
  return await repository.create(token, id);
};

const findByUserId = async (id) => {
  return await repository.findByUserId(id);
};

const remove = async (id) => {
  return await repository.remove(id);
};

module.exports = {
  save,
  findByUserId,
  remove,
};
