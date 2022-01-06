import { DataTypes, Model, Optional } from "sequelize"
import sequelizeConnection from "../configTS"
import { DummyDef } from "../../types/dummy"

export interface DummyCreationAttributes extends Optional<DummyDef, "id"> {}
export interface DummyOutputAttributes extends Required<DummyDef> {}

class Dummy extends Model<DummyDef, DummyCreationAttributes> implements DummyDef {
  public id!: number
  public dummy!: string

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Dummy.init(
  {
    id: {
      type: DataTypes.BIGINT.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    dummy: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    sequelize: sequelizeConnection,
  }
)

export default Dummy
