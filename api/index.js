const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/Products");

dotenv.config()
const PORT = process.env.PORT;

//connect to MongoDB
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGOSEDB_URL).then(() => console.log("db connected")).then((err)=>{
    err;
})

//middleware
app.use(express.json())

// database seeder routes 
const databaseSeeder = require('./databaseSeeder')
const userRoute = require("./routes/User");
const productRoute = require("../api/routes/Product");
const orderRoute = require("./routes/order");


app.use('/api/seed',databaseSeeder)

// routes for Users
app.use('/api/users', userRoute);

// routes for Products
app.use('/api/products', productRoute);

// routes for order
app.use('/api/orders', orderRoute);

app.listen(PORT || 5000,() => { 
    console.log(`server listening on port ${PORT}`);
}); 

