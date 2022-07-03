const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
dotenv.config({path:'./config.env'});




const connectToMongo = ()=>{
    mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify:false }).then(()=>{
        console.log("connection successful");
    }).catch((err)=> console.log('no connection'));
}

module.exports = connectToMongo;