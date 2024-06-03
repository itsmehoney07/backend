//require("dotenv").config({path: './env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})


connectDB();





















/*
import express from "express"
const app = express();
;( async ()=>{
    try{
        mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.log("error", error);
        });
        try{
            app.listen(`${process.env.PORT}`,()=>{
                console.log(`App is listen at port ${process.env.PORT}`);
            });
        }catch(error){console.log("error", error)}

    }catch(error){
        console.error("error ", error);
    }
})()
*/
