const router = require('express').Router();
const User = require('./models/User');
const Product = require('./models/Product'); 

const users = require('./data/User');
const products = require('./data/Products');
const AsyncHandler = require('express-async-handler');

router.post('/users', AsyncHandler (
    async(req,res)=>{
    await User.deleteMany({});
    const UserSeeder = await User.insertMany(users);
    res.send({ UserSeeder })
    }
)
);

router.post('/products', AsyncHandler (
    async(req,res)=>{
    await Product.deleteMany({});
    const PrdouctSeeder = await User.insertMany(products);
    res.send({ PrdouctSeeder })
    }
)
);

module.exports = router;
