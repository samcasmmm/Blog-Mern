const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/Auth');
const userRoute = require('./routes/UserRoute');
const postRoute = require('./routes/PostRoute');

dotenv.config();
app.use(express.json());

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('MONGODB connected'))
  .catch((err) => console.log(err));

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);

app.listen('5000', () => {
  console.log('Backend is Running at http://localhost/5000');
});
