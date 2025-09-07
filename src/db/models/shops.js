import { model, Schema } from 'mongoose';

const shopsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    }
  }
  
);

export const ShopsCollection = model('Shop', shopsSchema);