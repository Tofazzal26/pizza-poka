"use client";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { ArrowRightLeft, Heart, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "@/ReduxProvider/CreateSlice/CreateSlice";
import { RootState } from "@/ReduxProvider/Store/Store";
import { useSession } from "next-auth/react";

interface Product {
  image: string;
  title: string;
  price: number;
  description: string;
  quantity: number;
  product_status: string;
  _id: string;
  email: string;
}

const ProductDetails = () => {
  const params = useParams();
  const disPatch = useDispatch();
  const id: string = params?.id as string;
  const count = useSelector((state: RootState) => state.counter.value);
  const session = useSession();
  const router = useRouter();
  const { data: SingleProduct, isLoading: SingleProductLoading } = useQuery({
    queryKey: ["singleProduct", id],
    queryFn: async (): Promise<Product> => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/SingleProduct/${id}`
      );
      return res.data.data as Product;
    },
  });

  const {
    description = "",
    image = "",
    price = 0,
    product_status = "",
    title = "",
    _id = "",
  } = SingleProduct || {};

  const handleIncrement = () => {
    disPatch(increment());
  };
  const handleDecrement = () => {
    if (count > 1) {
      disPatch(decrement());
    }
  };

  const handleAddToCart = () => {
    if (session?.status === "unauthenticated") {
      return router.push("/api/login");
    }

    const userEmail: string = session?.data?.user?.email ?? "";
    let carts: Product[] = JSON.parse(localStorage.getItem("carts") || "[]");

    const existingIndex = carts.findIndex((item) => item._id === _id);

    if (existingIndex !== -1) {
      carts[existingIndex].quantity += count;
      localStorage.setItem("carts", JSON.stringify(carts));
      return toast.success("Quantity increased");
    }
    const productData: Product = {
      description,
      image,
      price,
      product_status,
      title,
      _id,
      quantity: count,
      email: userEmail,
    };

    carts.push(productData);
    localStorage.setItem("carts", JSON.stringify(carts));
    toast.success("Product added to cart successfully");
  };

  return (
    <div className="mt-[65px]">
      <div className="container mx-auto">
        <div className="py-10 lg:py-20">
          {SingleProductLoading ? (
            <div className="flex justify-center items-center">
              <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#89b758]"></div>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <div className="flex lg:flex-row flex-col gap-4 lg:gap-8">
                <div>
                  <Image
                    src={image ? image : "/berger1.jpg"}
                    height={400}
                    width={400}
                    alt=""
                    className="w-full lg:w-[400px] h-[400px]"
                  />
                </div>
                <div>
                  <div>
                    <h2 className="text-2xl">{title}</h2>
                    <h2 className="text-[#89b758] text-3xl mt-3">${price}</h2>
                    <div className="mt-3">
                      <h2 className="text-[#7a7a7a] pt-3 pb-4 text-lg border-y-[1px]  border-[#e5e5e5]">
                        Categories:{" "}
                        <span className="text-black">{product_status}</span>
                      </h2>
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="border-[1px] border-[#e5e5e5]">
                        <button
                          onClick={handleDecrement}
                          className="text-lg py-3 cursor-pointer px-6"
                        >
                          -
                        </button>
                        <button className="text-lg py-3  px-6 border-x-[1px] border-[#e5e5e5]">
                          {count}
                        </button>
                        <button
                          onClick={handleIncrement}
                          className="text-lg py-3 cursor-pointer px-6"
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={handleAddToCart}
                          className="text-xl flex  cursor-pointer items-center gap-2 bg-[#89b758] px-4 py-3 text-white"
                        >
                          <ShoppingCart /> ADD TO CART
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 mt-4">
                      <button className="flex items-center text-lg gap-2">
                        <Heart size={20} /> Add to Wishlist
                      </button>
                      <button className="flex items-center text-lg gap-2">
                        <ArrowRightLeft size={20} /> Compare
                      </button>
                    </div>
                    <p className="text-[#7a7a7a]  my-3 w-full lg:w-[400px]">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
