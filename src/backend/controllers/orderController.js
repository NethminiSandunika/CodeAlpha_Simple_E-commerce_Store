// src/backend/controllers/orderController.js
const Order = require('../models/orderModel');

const createOrder = async (req, res) => {
  const { products, total } = req.body;
  const order = new Order({ products, total });

  try {
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createOrder };
