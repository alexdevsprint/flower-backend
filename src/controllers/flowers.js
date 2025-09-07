import { getFlowersByShop } from "../services/flowers.js";

export const getFlowersByShopController = async (req, res) => {
  
  const { shopId } = req.query;
  const flowers = await getFlowersByShop(shopId);

  res.status(200).json({
    status: 200,
    message: "Successfully found flowers!",
    data: flowers,
  });
};



