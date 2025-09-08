import { getAllShops } from "../services/shops.js";

export const getShopsController = async (req, res) => {
  const shops = await getAllShops();

  res.status(200).json({
    status: 200,
    message: "Successfully found shops!!!",
    data: shops,
  });
};
