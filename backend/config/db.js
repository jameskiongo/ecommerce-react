require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb connection success")
    } catch (error) {
        console.error("mongodb connection fail");
        process.exit(1);
    }
};
module.exports = connectDb;

