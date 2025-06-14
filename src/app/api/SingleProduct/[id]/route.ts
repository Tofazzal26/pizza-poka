import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import ConnectMongoose from "../../../../../lib/ConnectMongoose/ConnectMongoose";
import ProductModel from "@/ProductModel/ProductModel";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({
        message: "Invalid ID",
        status: 400,
        success: false,
      });
    }

    await ConnectMongoose();

    const query = { _id: new ObjectId(id) };
    const product = await ProductModel.findById(query);

    if (!product) {
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
      data: product,
    });
  } catch (error) {
    return NextResponse.json({
      message: "There was a server error",
      status: 500,
      success: false,
      error,
    });
  }
}
