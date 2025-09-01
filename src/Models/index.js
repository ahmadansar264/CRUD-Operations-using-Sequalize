import Car from "./Car/car"
import User from "./User/user"
import serviceRecords from "./ServiceRecord/serviceRecord.js";

// Define associations
User.hasMany(Car, { foreignKey: "userId", onDelete: "CASCADE" });
Car.belongsTo(User, { foreignKey: "userId" });

Car.hasMany(serviceRecords, { foreignKey: "carId", onDelete: "CASCADE" });
serviceRecords.belongsTo(Car, { foreignKey: "carId" });

const db = {
    User,
    Car,
    serviceRecords
};
export default db;