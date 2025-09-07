import { model, Schema } from 'mongoose';

const flowersSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    shopId: {
      type: Schema.Types.ObjectId,
      ref: 'Shop',
    },
  }
);

export const FlowersCollection = model('Flower', flowersSchema);