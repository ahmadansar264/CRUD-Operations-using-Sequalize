import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
            username: process.env.PGUSER,
            password: process.env.PGPASSWORD,
            database: process.env.PGDATABASE,
            host: process.env.PGHOST,
            dialect: "postgres",
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false,
                },
            },
            logging: false,
        });

export default sequelize;

export const connectDb = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}