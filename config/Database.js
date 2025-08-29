const mongoose = require("mongoose");
require("dotenv").config();

const dbConnnect =()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    .then(()=>{
        console.log("DB Connected Successfully")
    })
    .catch((error)=>{
        console.log("Db not connected");
        process.exit(1);
    })
}
module.exports=dbConnnect;