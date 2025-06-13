import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import ConnectMongoose from "../../../../../lib/ConnectMongoose/ConnectMongoose";
import ProductModel from "@/ProductModel/ProductModel";

interface Params {
  id: string;
}

export const GET = async (
  request: Request,
  { params }: { params: Params }
): Promise<NextResponse> => {
  try {
    await ConnectMongoose();
    const id = params?.id;
    if (!id) {
      return NextResponse.json({
        message: "Invalid ID",
        status: 400,
        success: false,
      });
    }

    const query = { _id: new ObjectId(id) };
    const res = await ProductModel.findById(query);

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
      data: error,
    });
  }
};
