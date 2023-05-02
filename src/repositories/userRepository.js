const { where } = require("sequelize");
const bcrypt = require("bcrypt");
const User = require("../models/user");

class UserRepository {
  constructor() {}

  async findAll() {
    return await User.findAll();
  }

  async findById(id) {
    return await User.findByPk(id);
  }

  async findByIdNumber(idNumber) {
    return await User.findOne({ where: { idNumber: idNumber } });
  }

  async create(user) {
    user.password = await bcrypt.hash(user.password, 10);
    return await User.create(user);
  }

  async update(id, user) {
    if (!user.password) {
      return await User.update(user, { where: { id: id } });
    } else {
      user.password = await bcrypt.hash(user.password, 10);
      return await User.update(user, { where: { id: id } });
    }
  }

  async remove(id) {
    return await User.destroy({ where: { id: id } });
  }
}

module.exports = UserRepository;