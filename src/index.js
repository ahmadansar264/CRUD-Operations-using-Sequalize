import dotenv from "dotenv";
dotenv.config({
    path:'./.env'
});

import express from "express";
import connectDb from "./Db/connection.js";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {

    res.send("Hello World!");
});

connectDb()
.then(() => {
    app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    });
})
.catch((err) => {
    console.log("Failed to connect to the database:", err);
});
