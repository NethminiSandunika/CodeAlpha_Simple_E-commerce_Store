// src/backend/models/orderModel.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  total: Number,
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
