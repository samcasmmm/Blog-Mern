const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/Auth');
const userRoute = require('./routes/UserRoute');
const postRoute = require('./routes/PostRoute');
const categoryRoute = require('./routes/CategoryRoute');
const multer = require('multer');
const path = require('path');

dotenv.config();
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/images')));

mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('MONGODB connected'))
  .catch((err) => console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  res.status(200).json('File has been uploaded');
});

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);
app.use('/api/categories', categoryRoute);

app.listen('5000', () => {
  console.log('Backend is Running at http://localhost/5000');
});
