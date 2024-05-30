// sampleData.js
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const { connectDB } = require('./config/db');

connectDB();

const sampleProducts = [
  {
    name: 'Product 1',
    price: 10.0,
    description: 'Description for Product 1',
    image: 'image1.jpg',
  },
  {
    name: 'Product 2',
    price: 20.0,
    description: 'Description for Product 2',
    image: 'image2.jpg',
  },
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(sampleProducts);
    console.log('Sample data imported!');
    process.exit();
  } catch (error) {
    console.error('Error importing data:', error);
    process.exit(1);
  }
};

importData();
