import mongoose from "mongoose";

const ConnectMongoose = async (): Promise<void> => {
  try {
    const res = await mongoose.connect(process.env.Mongoose_URI as string);
    // console.log("Mongoose Connect Successfully");
  } catch (error) {
    // console.error("MongoDB connection failed:", error);
  }
};

export default ConnectMongoose;
