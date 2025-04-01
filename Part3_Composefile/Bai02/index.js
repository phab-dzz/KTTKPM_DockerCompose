const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

app.use(express.json());

// Kết nối MongoDB
mongoose.connect('mongodb://mongo:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Định nghĩa model và endpoint API
const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  age: Number
}));

// POST /users endpoint
app.post('/users', async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).send(user);
});

// GET /users endpoint
app.get('/users', async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
