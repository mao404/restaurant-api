const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
const User = require("../models/user");

class UserRepository {
  constructor() {}

  async findAll({ name, email, idNumber }, { limit, offset, order }) {
    let where = {};
    if (name) {
      where.name = {
        [Op.like]: `%${name}%`,
      };
    }
    if (email) {
      where.email = {
        [Op.eq]: email,
      };
    }
    if (idNumber) {
      where.idNumber = {
        [Op.eq]: idNumber,
      };
    }

    let config = {
      where,
      attributes: [
        "id",
        "name",
        "idNumber",
        "email",
        "telephone",
        "role",
        "enable",
      ],
    };

    if (order) {
      config.order = [order.split(";")];
    }

    return await User.findAll(config);
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
