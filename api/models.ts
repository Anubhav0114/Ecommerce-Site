// exampleModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface Product extends Document {
  productId: number;
  name: string;
  clicks: number;
  views: number;
  createdAt: number;
  detail: string;
}

const productSchema: Schema = new Schema({
  productId: {type: Number, required: true},
  name: { type: String, required: true },
  clicks: { type: Number, required: true },
  views: { type: Number, required: true },
  createdAt: { type: Number, required: true },
  detail: { type: String, required: true }
});

export default mongoose.model<Product>('ProductModel', productSchema);
