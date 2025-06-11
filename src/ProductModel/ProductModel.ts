import mongoose, { Schema, Document } from "mongoose";

interface IProduct extends Document {
  image: string;
  title: string;
  price: number;
  description: string;
  quantity: number;
  product_status: string;
}

const ProductSchema: Schema<IProduct> = new Schema({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  product_status: {
    type: String,
    required: true,
  },
});

const ProductModel =
  mongoose.models.Product || mongoose.model<IProduct>("Product", ProductSchema);

export default ProductModel;
