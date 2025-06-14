import { NextRequest, NextResponse } from "next/server";
import ConnectMongoose from "../../../../../lib/ConnectMongoose/ConnectMongoose";
import UserModel from "@/UserModel/UserModel";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ email: string }> }
): Promise<NextResponse> => {
  try {
    const { email } = await params;

    await ConnectMongoose();

    const query = { email };
    const findUser = await UserModel.findOne(query).select("userRole");

    return NextResponse.json(
      {
        data: findUser,
        success: true,
        message: "Single user find success",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { data: error, success: false, message: "There was a server error" },
      { status: 400 }
    );
  }
};
