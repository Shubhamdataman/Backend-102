const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORTNO || 3000;
app.listen(PORT,()=>{
    console.log(`App is running at port no ${PORT}`)
})
const dbConnnect= require("./config/Database");
dbConnnect();

const allroutes = require("./Routes/userRoutes");
app.use("/api/v1", allroutes);


app.get("/",(req,res)=>{
    res.send("MAI chal RHA shubham");
})
