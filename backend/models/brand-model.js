import { DataTypes } from "sequelize";
import { sequelize } from "../config/db";

const Brand = sequelize.define("Brand", {
  brand_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  imagePath: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

export default Brand;
