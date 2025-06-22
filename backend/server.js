import express from 'express'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
dotenv.config({});
import userRoute from './Routes/user.js' 
import companyRoute from './Routes/company.js'
import jobRoute from './Routes/job.js'
import applicationRoute from './Routes/application.js'
const app=express();
const PORT= process.env.PORT || 3000;


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOption={
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOption));

//database connection
connectDB();


//api's
app.use("/api/v1/user",userRoute);  
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job",jobRoute);
app.use("/api/v1/application", applicationRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on PORT ${PORT}`)
})