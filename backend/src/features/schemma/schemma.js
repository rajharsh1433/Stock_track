import mongoose, { Schema } from "mongoose";
const priceSchema = new mongoose.Schema({
    name: String,
    price: Number,
    timestamp: { type: Date, default: Date.now }
});

const Price = mongoose.model('Price', priceSchema);

export default Price;