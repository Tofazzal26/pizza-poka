import { NextResponse } from "next/server";
import ConnectMongoose from "../../../../lib/ConnectMongoose/ConnectMongoose";
import UserModel from "@/UserModel/UserModel";

export const GET = async (): Promise<NextResponse> => {
  try {
    await ConnectMongoose();
    const res = await UserModel.find();
    return NextResponse.json({
      message: "All Payment get success",
      data: res,
      status: 200,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Data Not Get",
      data: error instanceof Error ? error.message : "Unknown error",
      status: 500,
      success: false,
    });
  }
};
