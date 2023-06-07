const express = require('express');
const mongoose = require('mongoose');
const Product = require('./model/productModel');
const app = express();

app.use(express.json());

//routes

app.get('/', (req, res) => {
  res.send('Hello NODE API');
});

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/blog', (req, res) => {
  res.send('Hello Blog, My name is DevMarie');
});

app.post('/products', async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect('mongodb+srv://marie:marie1234@cluster0.ueg1rii.mongodb.net/')
  .then(() => {
    app.listen(3000, () => {
      console.log('Node API app is running on port 3000');
    });
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log(error);
  });