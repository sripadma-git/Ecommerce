const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/Products");

dotenv.config()
const PORT = process.env.PORT;


const mongoose = require("mongoose")

//connect db
// sripadmachintha
// nlkvPS9zlDOUSM9O

mongoose.connect(process.env.MONGOSEDB_URL).then(() => console.log("db connected")).then((err)=>{
    err;
})
app.listen(PORT || 5000,() => {
    console.log(`server listening on port ${PORT}`);
}); 


// mongodb+srv://sripadmachintha:nlkvPS9zlDOUSM9O@cluster0.ep84f55.mongodb.net/