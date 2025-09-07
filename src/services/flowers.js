import { FlowersCollection } from '../db/models/flowers.js';

export const getFlowersByShop = async (shopId) => {
  const flowers = await FlowersCollection.find({ shopId: shopId });
  return flowers;
};