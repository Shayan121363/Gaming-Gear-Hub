const mongoose = require('mongoose');

const gearSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String, required: true }, // e.g., 'keyboard', 'mouse', 'headset'
  stock: { type: Number, default: 10 }
}, { timestamps: true });

module.exports = mongoose.model('Gear', gearSchema);
