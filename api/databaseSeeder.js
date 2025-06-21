const router = require('express').Router();
const User = require('./models/User');
const Product = require('./models/Product'); 
const users = require('./data/User');
const products = require('./data/Products');
const AsyncHandler = require('express-async-handler');

router.post('/users', AsyncHandler (
  async (req, res) => {
    await User.deleteMany({});
    const userSeeder = await User.insertMany(users);
    res.send({ userSeeder });
  }
));

router.post('/products', AsyncHandler (
  async (req, res) => {
    await Product.deleteMany({});
    const productSeeder = await Product.insertMany(products); // ✅ fixed here
    res.send({ productSeeder });
  }
));

module.exports = router;
