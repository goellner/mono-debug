import Sequelize from "sequelize"
import { ModelAttributes } from "sequelize"
import Dummy from "../models/Dummy"

module.exports = {
  up: async (queryInterface: Sequelize.QueryInterface, sequelize: typeof Sequelize) => {
    await queryInterface.createTable("Dummy", {
      id: {
        type: Sequelize.BIGINT.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      dummy: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: sequelize.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"),
      },
    } as ModelAttributes<Dummy>)
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    await queryInterface.dropTable("Dummy")
  },
}
