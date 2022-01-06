import Sequelize from "sequelize"

import { DummyCreationAttributes } from "../models/Dummy"

module.exports = {
  up: async (queryInterface: Sequelize.QueryInterface) => {
    const dummy: DummyCreationAttributes[] = []
    for (let i = 0; i < 20; i++) {
      dummy.push({
        dummy: `dummy xxx ${i + 1}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      })
    }

    await queryInterface.bulkInsert("Dummy", dummy, {})
    return true
  },

  down: async (queryInterface: Sequelize.QueryInterface) => {
    return queryInterface.bulkDelete("Dummy", {}, {})
  },
}
