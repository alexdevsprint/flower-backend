import { createOrder  } from "../services/orders.js";

export const createOrdersController = async (req, res) => {
  

    const order = await createOrder(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a contact!`,
    data: order,
  });
};
