import { NextResponse } from "next/server";
import ConnectMongoose from "../../../../lib/ConnectMongoose/ConnectMongoose";
import ProductModel from "@/ProductModel/ProductModel";

export const POST = async (request: Request): Promise<NextResponse> => {
  try {
    await ConnectMongoose();
    const data = await request.json();
    const res = await ProductModel.create(data);

    return NextResponse.json(
      { message: "Product data added successfully", success: true, data: res },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "There was a server error", success: false, data: error },
      { status: 500 }
    );
  }
};
