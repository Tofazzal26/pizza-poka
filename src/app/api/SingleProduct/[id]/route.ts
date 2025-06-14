import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import ConnectMongoose from "../../../../../lib/ConnectMongoose/ConnectMongoose";
import ProductModel from "@/ProductModel/ProductModel";

export const GET = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  try {
    await ConnectMongoose();

    const id = context.params.id;

    if (!id) {
      return NextResponse.json({
        message: "Invalid ID",
        status: 400,
        success: false,
      });
    }

    const query = { _id: new ObjectId(id) };
    const res = await ProductModel.findById(query);

    if (!res) {
      return NextResponse.json({
        message: "Product not found",
        status: 404,
        success: false,
      });
    }

    return NextResponse.json({
      message: "Product Get Success",
      status: 200,
      success: true,
      data: res,
    });
  } catch (error) {
    return NextResponse.json({
      message: "There was a server error",
      status: 500,
      success: false,
      error: error,
    });
  }
};
