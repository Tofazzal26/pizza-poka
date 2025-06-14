import { NextRequest, NextResponse } from "next/server";
import ConnectMongoose from "../../../../../lib/ConnectMongoose/ConnectMongoose";
import UserModel from "@/UserModel/UserModel";
import { ObjectId } from "mongodb";

export const PATCH = async (
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) => {
  try {
    const { id } = await params;

    await ConnectMongoose();

    const { userRole } = await req.json();

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({
        message: "Invalid user ID",
        success: false,
        status: 400,
      });
    }

    const updatedUser = await UserModel.findByIdAndUpdate(
      new ObjectId(id),
      { userRole },
      { new: true }
    );

    if (!updatedUser) {
      return NextResponse.json({
        message: "User not found",
        success: false,
        status: 404,
      });
    }

    return NextResponse.json({
      message: "User role updated successfully",
      success: true,
      status: 200,
      user: updatedUser,
    });
  } catch (error) {
    console.error("Error updating user role:", error);
    return NextResponse.json({
      message: "There was a server error",
      success: false,
      status: 500,
    });
  }
};
