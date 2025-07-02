import { Op, WhereOptions, FindOptions, Order as SequelizeOrder } from "sequelize";
import bcrypt from "bcrypt";
import User from "../models/user";
import Order from "../models/order";
import Menu from "../models/menu";

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

class UserRepository {
  constructor() {}

  async findAll(filters: UserFilters, pagination: UserPagination) {
    let where: WhereOptions = {};
    if (filters.name) {
      where.name = {
        [Op.like]: `%${filters.name}%`,
      };
    }
    if (filters.email) {
      where.email = {
        [Op.eq]: filters.email,
      };
    }
    if (filters.idNumber) {
      where.idNumber = {
        [Op.eq]: filters.idNumber,
      };
    }

    let config: FindOptions = {
      where,
      attributes: [
        "id",
        "name",
        "idNumber",
        "email",
        "telephone",
        "role",
        "enable",
        "lastLogin",
      ],
      include: [
        {
          model: Order,
        },
      ],
    };

    if (pagination.order) {
      config.order = pagination.order.split(";") as SequelizeOrder;
    }

    return await User.findAll(config);
  }

  async findById(id: number) {
    let config: FindOptions = {
      attributes: [
        "id",
        "name",
        "idNumber",
        "email",
        "telephone",
        "role",
        "enable",
        "lastLogin",
      ],
    };

    return await User.findByPk(id, config);
  }

  async findByEmail(email: string) {
    return await User.findOne({ where: { email } });
  }

  async findByIdNumber(idNumber: number) {
    return await User.findOne({ where: { idNumber: idNumber } });
  }

  async create(user: UserData) {
    user.password = await bcrypt.hash(user.password, 10);
    return await User.create(user);
  }

  async update(id: number, user: Partial<UserData>) {
    if (!user.password) {
      return await User.update(user, { where: { id: id } });
    } else {
      user.password = await bcrypt.hash(user.password, 10);
      return await User.update(user, { where: { id: id } });
    }
  }

  async remove(id: number) {
    return await User.destroy({ where: { id: id } });
  }
}

export default UserRepository; 