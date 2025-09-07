import { ShopsCollection } from '../db/models/shops.js';

export const getAllShops = async () => {
  const shops = await ShopsCollection.find();
  return shops;
};
