const mongoose = require('mongoose');

const db = 'mongodb+srv://utsaverma:123abc@cluster0.d9kko.mongodb.net/CanteenDatabase?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB connected to ...');
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
