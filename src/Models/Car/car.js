import sequelize from "../../Db/connection";
import { DataTypes } from "sequelize";

const Car = sequelize.define(
    "Car",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        make: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100], // Make name length between 1 and 100 characters
            },
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100], // Model name length between 1 and 100 characters
            },
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
                min: 1886, // The year the first car was invented 
                max: new Date().getFullYear() + 1, // Allow next year's models
            },
        },
        mileage: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isInt: true,
                min: 0, // Mileage cannot be negative
            },
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: "cars",
        timestamps: true,
    }
);

export default Car;