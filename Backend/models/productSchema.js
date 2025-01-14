const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String,  trim: true },
  price: { type: Number, min: 0 },
  brand: { type: String,  },
  images: [{ url: String, altText: String }],
  ratings: {
    average: { type: Number, default: 0, min: 0, max: 5 },
     count: { type: Number, default: 0},
  },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
