const express =require("express");
const app =express();
const bodyParser= require("body-parser");
const pino = require('express-pino-logger')();
const cors = require("cors");
const path =require("path");
const mongoose =require("mongoose");
const port=process.env.port || 5000;
const uri="mongodb+srv://juno-admin:juno123@juno.4tpvo.mongodb.net/test-juno?retryWrites=true&w=majority";
const router =require("./routes/index.js")
//
app.use(express.json({ limit: '10kb' })); // Body limit is 10
app.use(cors());
app.use(pino);
//mongodb connection
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    console.log("MongoDB is running")
)

//API routes
app.use('/', router)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

app.listen(port,function(){
    console.log("express is running");
})