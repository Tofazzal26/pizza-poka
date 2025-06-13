import { NextRequest, NextResponse } from "next/server";
import ConnectMongoose from "../../../../lib/ConnectMongoose/ConnectMongoose";
import ProductModel from "@/ProductModel/ProductModel";
import UserModel from "@/UserModel/UserModel";

export const GET = async (req: NextRequest): Promise<NextResponse> => {
  try {
    await ConnectMongoose();

    const totalProduct: number = await ProductModel.countDocuments();
    const totalUser: number = await UserModel.countDocuments();

    return NextResponse.json({
      totalProduct,
      totalUser,
      message: "All Data Get Success",
      success: true,
      status: 200,
    });
  } catch (error: any) {
    return NextResponse.json({
      message: "There was a server error",
      success: false,
      status: 500,
      error: error?.message || "Unknown error",
    });
  }
};
