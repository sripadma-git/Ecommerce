const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/Products");

dotenv.config()
const PORT = process.env.PORT;

const mongoose = require("mongoose")
mongoose.connect(process.env.MONGOSEDB_URL).then(() => console.log("db connected")).then((err)=>{
    err;
})

app.use(express.json())
// database seeder routes 
const databaseSeeder = require('./databaseSeeder')
const userRoute = require("./routes/User");
app.use('/api/seed',databaseSeeder)

// routes for Users
app.use('/api/users', userRoute)
app.listen(PORT || 5000,() => { 
    console.log(`server listening on port ${PORT}`);
}); 

