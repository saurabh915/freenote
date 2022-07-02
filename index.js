const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors') 

connectToMongo();
const app = express()
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

// Available Routes
app.use('/routes/auth', require('./routes/auth'))
app.use('/routes/notes', require('./routes/notes'))

if(process.env.NODE_ENV =="production"){
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  })
}

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`)
})