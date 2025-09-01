import sequelize from "../../Db/connection";
import { DataTypes } from "sequelize";

const serviceRecord = sequelize.define(
    "serviceRecord",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        serviceDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
            },
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        cost: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                isDecimal: true,
                min: 0, // Cost cannot be negative
            },
        },
    })