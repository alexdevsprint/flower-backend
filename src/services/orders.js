import { OrdersCollection } from '../db/models/orders.js';

export const createOrder = async (orderData) => {
  const order = new OrdersCollection(orderData);
    await order.save();
  return order;
};