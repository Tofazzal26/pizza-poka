import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import ConnectMongoose from "../../../../lib/ConnectMongoose/ConnectMongoose";
import UserModel from "@/UserModel/UserModel";
interface User {
  email: string;
  password: string;
}

export const POST = async (request: Request): Promise<Response> => {
  try {
    await ConnectMongoose();
    const user: User = await request.json();

    const exist = await UserModel.findOne({ email: user?.email });
    if (exist) {
      return NextResponse.json({
        message: "User already created, please login",
        success: true,
        status: 409,
      });
    }

    const hashPassword = bcrypt.hashSync(user.password, 14);
    const newUser = new UserModel({ ...user, password: hashPassword });
    await newUser.save();

    return NextResponse.json({
      data: newUser,
      message: "User created successfully",
      success: true,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "There was a server error",
      success: false,
      status: 500,
    });
  }
};
