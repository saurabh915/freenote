const mongoose = require('mongoose');
const dotenv = require('dotenv');
// const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
dotenv.config({path:'./config.env'});

const mongoURI ='mongodb+srv://saurabh99:patil99@cluster0.hjvio.mongodb.net/inotebook?retryWrites=true&w=majority';


const connectToMongo = ()=>{
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify:false }, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;