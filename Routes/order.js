const express = require('express');
const Order = require('../Models/Order');
const router = express.Router();
const auth = require('../Middleware/auth');
const User = require("../Models/Auth");
router.get('/orders', auth, async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.send('Bruh moment');
  }
});

router.get('/userorder', auth, async (req, res) => {
  try {
    const result = await Order.find({ user: req.user.id });
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

router.post('/orders', auth, async (req, res) => {
  try {
    const user = req.user.id;
    const items=[];
    console.log(req.body);
    //console.log(req.body.cart);
    req.body.cart.map((x)=>items.push(x));
    // const user1=User.find({id:user});
    // let name1=user1.name;
    // let branch1=user1.branch;
    //console.log(req.body.username,req.body.branch);
   
    const order = new Order({
      user,
      username:req.body.username,
      branch:req.body.branch,
      orders: items,
      totalPrice: req.body.totall,
    });
    console.log(order);
    await order.save();
    res.json('sahi ja rahe h');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});


router.get('/orderplaced',async (req, res) => {
  try {
    const pendingOrders = await Order.find({ isOpen: true });
    console.log(pendingOrders);
    res.json(pendingOrders);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

router.put('/orderplaced/:id',auth,async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate(
      { _id: req.params.id },
      { isOpen: false },
      { new: true }
    );
    res.json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

router.post('/orderplaced/:id',auth, async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
