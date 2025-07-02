import UserRepository from "../repositories/userRepository";
const repository = new UserRepository();

interface UserFilters {
  name?: string;
  email?: string;
  idNumber?: number;
}

interface UserPagination {
  limit?: number;
  offset?: number;
  order?: string;
}

interface UserData {
  name: string;
  idNumber: number;
  email: string;
  telephone: number;
  password: string;
  role?: string;
  enable?: boolean;
  lastLogin?: Date;
}

const findAll = async (filter: UserFilters, options: UserPagination) => {
  return await repository.findAll(filter, options);
};

const findById = async (id: number) => {
  return await repository.findById(id);
};

const findByEmail = async (email: string) => {
  return await repository.findByEmail(email);
};

const findByIdNumber = async (idNumber: number) => {
  return await repository.findByIdNumber(idNumber);
};

const save = async (user: UserData) => {
  return await repository.create(user);
};

const update = async (id: number, user: Partial<UserData>) => {
  return await repository.update(id, user);
};

const remove = async (id: number) => {
  return await repository.remove(id);
};

export {
  findAll,
  findById,
  findByEmail,
  findByIdNumber,
  save,
  update,
  remove,
}; 