import { NextResponse } from "next/server";
import ConnectMongoose from "../../../../lib/ConnectMongoose/ConnectMongoose";
import ProductModel from "@/ProductModel/ProductModel";

export const GET = async (req: Request): Promise<NextResponse> => {
  try {
    await ConnectMongoose();
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search");
    const price = searchParams.get("priceFilter");
    const status = searchParams.get("productStatus");
    console.log(status, "status");

    let query: Record<string, any> = {};
    let sortOption: { [key: string]: 1 | -1 } = {};

    if (status) {
      query.product_status = status;
    }
    if (search) {
      const regex = new RegExp(`^${search}`, "i");
      query.title = { $regex: regex };
    }

    if (price === "asc") {
      sortOption["price"] = 1;
    } else if (price === "desc") {
      sortOption["price"] = -1;
    }

    const resp = await ProductModel.find(query).sort(sortOption);

    return NextResponse.json({
      message: "All Product Get Success",
      data: resp,
      status: 200,
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Data Not Get",
      data: error,
      status: 500,
      success: false,
    });
  }
};
