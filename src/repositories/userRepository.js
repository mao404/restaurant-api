const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const User = require("../models/user");

class UserRepository {
  constructor() {}

  async findAll(filter, options) {
    let where = {};
    if (filter.name) {
      where.name = {
        [Op.eq]: filter.name,
      };
    }
    if (filter.email) {
      where.email = {
        [Op.eq]: filter.email,
      };
    }
    if (filter.idNumber) {
      where.idNumber = {
        [Op.eq]: filter.idNumber,
      };
    }
    return await User.findAll({ where });
  }

  async findById(id) {
    return await User.findByPk(id);
  }

  async findByEmail(email) {
    return await User.findOne({ where: { email } });
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
