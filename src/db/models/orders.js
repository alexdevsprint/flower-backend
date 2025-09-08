import { Schema, model } from "mongoose";

const orderSchema = new Schema({
  name: String,
  email: String,
  phone: String,
  address: String,
  items: [
    {
      _id: String,
      name: String,
      price: Number,
      imageURL: String,
      quantity: Number,
    },
  ],
  totalPrice: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const OrdersCollection = model("Order", orderSchema);