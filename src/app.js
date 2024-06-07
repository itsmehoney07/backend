import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static('public'));
app.use(cookieParser());
  
//routes import
// we can give any name to import only if we have export with default 
import router from "./routes/user.routes.js"

//routes declaration
//routes are declared as middlewares because we will write routes for each aspect inside a separate file
app.use("/api/v1/users", router);

export {app}
