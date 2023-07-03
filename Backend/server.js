const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes');
const bp = require('body-parser');
const cors = require('cors')

app.use(express.json());
app.use(cors());

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));


mongoose.connect( "mongodb://127.0.0.1:27017/college").then(() => {
    console.log("connected")
}).catch(
   () => {console.log("not connected")}
);



app.use('/',router)


app.listen(8000,() => {
    console.log("app running")
})