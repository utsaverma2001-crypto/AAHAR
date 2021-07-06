const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  username:{
    type:String,
    
  },
  branch:{
    type:String,
   
  },
  orders: [
    {
      foodItem: {
        type: String,
        required: true,
      },
      image:{
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalPrice: {
    type: Number,
  },
  isOpen: {
    type: Boolean,
    default: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('order', OrderSchema);
