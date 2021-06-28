const express = require('express');
const cors = require('cors');
const app = express();
// const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const path = require('path');

app.use(express.json({ extended: false }));
connectDB();

app.use(cors());
app.use("/admin",require('./Routes/food'));
app.use("/admin",require('./Routes/order'));
app.use(require('./Routes/auth'));


app.use(
  cors({
    origin: 'http://localhost:5000',
  })
);

const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('done!');
});
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
