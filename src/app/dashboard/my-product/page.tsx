"use client";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
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
const MyProduct = () => {
  const [cartItems, setCartItems] = useState<Product[] | null>(null);

  useEffect(() => {
    const storedCarts = localStorage.getItem("carts");
    if (storedCarts) {
      try {
        const parsedCarts: Product[] = JSON.parse(storedCarts);
        setCartItems(parsedCarts);
      } catch (error) {
        console.error("Error parsing carts from localStorage:", error);
      }
    }
  }, []);

  const totalPrice = cartItems?.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleDelete = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't to Detele this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        const storedCarts = localStorage.getItem("carts");
        if (!storedCarts) return;
        const parsedCarts: Product[] = JSON.parse(storedCarts);
        const updatedCarts = parsedCarts.filter((item) => item._id !== id);
        localStorage.setItem("carts", JSON.stringify(updatedCarts));
        setCartItems(updatedCarts);
        Swal.fire({
          title: "Deleted!",
          text: "Your Product has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <div className="customShadow m-4 lg:m-8 lg:p-8 p-4">
        <div>
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl">Total Price: {totalPrice}$</h2>
            </div>
            <div>
              <button className="bg-[#89b758] text-lg px-5 py-[6px] text-white rounded-lg">
                Pay
              </button>
            </div>
          </div>
          <div>
            {cartItems === null ? (
              <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#89b758]"></div>
            ) : cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty</p>
            ) : (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                {cartItems?.map((item, idx) => (
                  <div
                    key={idx}
                    className="border-[1px] border-[#e5e7eb] p-4 rounded-lg"
                  >
                    <div className="flex gap-3 items-center">
                      <div>
                        <Image
                          src={item?.image}
                          height={100}
                          width={100}
                          alt="product"
                          className="w-[120px] h-[120px] rounded-lg"
                        />
                      </div>
                      <div>
                        <h2 className="text-gray-600 text-lg">
                          {item?.price * item?.quantity}$
                        </h2>
                        <h2 className="text-lg text-gray-600">{item?.title}</h2>
                        <h2 className="text-gray-600 text-lg">
                          Quantity:{" "}
                          <span className="text-black">{item?.quantity}</span>
                        </h2>
                        <button
                          onClick={() => handleDelete(item?._id)}
                          className="flex text-lg mt-1 cursor-pointer items-center gap-1 text-red-400"
                        >
                          <Trash2 size={20} /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProduct;
