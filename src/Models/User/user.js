import sequalize from "../../Db/connection.js";
import { DataTypes } from "sequelize";

const User = sequalize.define(
    "User",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }
    },
    {
        tableName: "users",
        timestamps: true,
    }
);
export default User;