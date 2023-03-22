import { DataTypes, Model, } from "sequelize"
import sequelize from "../sequelize"

class Product extends Model {
	/**
	 * Helper method for defining associations.
	 * This method is not a part of Sequelize lifecycle.
	 * The `models/index` file will call this method automatically.
	 */
	static associate(models) { return }
}

Product.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			field: "name",
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			field: "description",
			allowNull: true,
		},
		price: {
			type: DataTypes.NUMBER,
			field: "price",
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: false,
		underscored: true,
	}
)
export default Product
