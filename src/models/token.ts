import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../loaders/sequelize/db";

interface TokenAttributes {
  id: number;
  token: string;
  UserId?: number;
  createdAt: Date;
  updatedAt?: Date;
}

interface TokenCreationAttributes extends Optional<TokenAttributes, "id" | "createdAt" | "updatedAt"> {}

class Token extends Model<TokenAttributes, TokenCreationAttributes> implements TokenAttributes {
  public id!: number;
  public token!: string;
  public UserId?: number;
  public readonly createdAt!: Date;
  public readonly updatedAt?: Date;
}

Token.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    token: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: null,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "Tokens",
  }
);

export default Token; 