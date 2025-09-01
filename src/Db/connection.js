import { Sequelize } from "sequelize";

const connectDb = async () => {
    try {
        const sequelize = new Sequelize({
            username: "neondb_owner",
            password: "npg_ahFR39ICSWEl",
            database: "neondb",
            host: "ep-lingering-thunder-a1qia13p-pooler.ap-southeast-1.aws.neon.tech",
            dialect: "postgres",
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false,
                },
            },
            logging: false,
        });


        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }

}
export default connectDb;