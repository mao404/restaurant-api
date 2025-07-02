import TokenRepository from "../repositories/tokenRepository";
const repository = new TokenRepository();

interface TokenData {
  id: number;
}

const save = async (user: { id: number }): Promise<{ cryptoToken: string }> => {
  return await repository.create({ id: user.id });
};

const findByUserId = async (id: number) => {
  return await repository.findByUserId(id);
};

const remove = async (id: number) => {
  return await repository.remove(id);
};

export {
  save,
  findByUserId,
  remove,
}; 