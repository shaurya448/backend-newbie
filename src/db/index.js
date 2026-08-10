import mongoose from "mongoose";
import { db_name } from "../constants.js";


const connectDB = async()=>{
        try {
            const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URL}/${db_name}`)
            console.log(`\n MongoDB connected !! DB HOST:${connectionInstance.connection.host}`)
        } catch (error) {
            console.log("Connection Failed:",error)
            process.exit(1)   
        }
   
}

export default connectDB
 