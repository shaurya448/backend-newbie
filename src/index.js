import dns from "dns";

dns.setServers(["8.8.8.8"]);

import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listne(process.env.PORT || 8000, ()=>{
        console.log(`app is listening on port ${process.env.PORT}`)
    })
})
.catch((err)=>{
    console.log("MONGO DB ERROR:",err);
})






/*
import express from "express"
const app = express()


(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGO_DB_URL}/${db_name}`)
        app.on("error",(error)=>{
            console.log("ERROR:",error)
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`app is listening on port ${process.env.PORT}`)
        })

    } catch (error) {
        console.error("ERROR: ",error)
        throw error
    }
})()

*/

