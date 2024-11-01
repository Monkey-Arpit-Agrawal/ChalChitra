import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const DB_CONNECT = async () => {
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) ;
        console.log(`MongoDB Connected !! \n ${connectInstance.connection.host}`);     
    } catch (error) {
        console.log('MongoDB Connection Error . Error : ' , error) ;
        process.exit(1)
    }
}

export default DB_CONNECT