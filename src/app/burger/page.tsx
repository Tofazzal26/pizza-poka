"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { ArrowRight, Clock4, Search, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
interface Product {
  image: string;
  title: string;
  price: number;
  description: string;
  quantity: number;
  product_status: string;
  _id: string;
}

const Burger = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(6);
  const [myCart, setMyCart] = useState<Product[]>([]);

  const router = useRouter();
  const session = useSession();

  const handleSearch = async (
    e: React.ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    e.preventDefault();
    const text: string = e.target.value;
    setSearch(text);
  };

  const { data: allProductData, isLoading: allProductLoading } = useQuery({
    queryKey: [
      "allProduct",
      search,
      sortOrder,
      status,
      itemPerPage,
      currentPage,
    ],
    queryFn: async (): Promise<{ data: Product[]; totalProduct: number }> => {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/AllProduct?search=${search}&priceFilter=${sortOrder}&productStatus=${status}&size=${itemPerPage}&page=${currentPage}`
      );
      return res.data as { data: Product[]; totalProduct: number };
    },
  });
  const allProduct = allProductData?.data || [];
  const totalProduct = allProductData?.totalProduct || 0;

  const numberOfPage = Math.ceil(totalProduct / itemPerPage);
  const pages = [];
  for (let index = 1; index <= numberOfPage; index++) {
    pages.push(index);
  }

  const handleCurrentPage = (crnPage: any) => {
    setCurrentPage(crnPage);
  };

  const handleNextPage = () => {
    if (currentPage < numberOfPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleAddToCart = async (prd: Product) => {
    if (session?.status === "unauthenticated") {
      return router.push("/api/login");
    }
    const userEmail: string = session?.data?.user?.email ?? "";
    const updatedProduct: Product & { email: string; prdID: string } = {
      ...prd,
      email: userEmail,
      prdID: prd._id,
      quantity: 1,
    };
    let carts: Product[] = JSON.parse(localStorage.getItem("carts") || "[]");
    const existing = carts.find((item) => item._id === updatedProduct.prdID);

    if (existing) {
      return toast.error("Product Already Added");
    }
    carts.push(updatedProduct);
    localStorage.setItem("carts", JSON.stringify(carts));
    setMyCart(carts);
    toast.success("Product Add to Cart Successfully");
  };

  return (
    <div className="mt-[65px]">
      <div className="container mx-auto">
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-1 customShadow">
              <div>
                <div className="p-6 space-y-4">
                  {/* Price Sort */}
                  <div>
                    <label className="text-sm lg:text-base uppercase font-semibold mb-2 text-gray-700">
                      Filter by price
                    </label>
                    <div className="flex gap-2 lg:gap-3 mt-2 lg:mt-4">
                      <button
                        onClick={() => setSortOrder("asc")}
                        className={`px-4 text-sm py-2 rounded-full border border-[#d5d5d5] ${
                          sortOrder === "asc"
                            ? "bg-[#89b758] text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        Ascending
                      </button>
                      <button
                        onClick={() => setSortOrder("desc")}
                        className={`px-4 py-2 text-sm rounded-full border border-[#d5d5d5] ${
                          sortOrder === "desc"
                            ? "bg-[#89b758] text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        Descending
                      </button>
                    </div>
                  </div>
                  {/* Product Status Filter */}
                  <div>
                    <label className=" text-sm lg:text-base uppercase font-semibold mb-2 text-gray-700">
                      Product Status
                    </label>
                    <div className="flex gap-2 lg:gap-3 mt-2 lg:mt-4">
                      <button
                        onClick={() => setStatus("New")}
                        className={`px-4 text-sm py-2 rounded-full border border-[#d5d5d5] ${
                          status === "New"
                            ? "bg-[#89b758] text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        New
                      </button>
                      <button
                        onClick={() => setStatus("Recommended")}
                        className={`px-4 text-sm py-2 rounded-full border border-[#d5d5d5] ${
                          status === "Recommended"
                            ? "bg-[#89b758] text-white"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        Recommended
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="mt-4">
                <div>
                  <div className="relative">
                    <input
                      onChange={handleSearch}
                      className="bg-gray-100 outline-none lg:px-8 px-4 py-3 lg:py-4 rounded-none w-full lg:text-base text-sm"
                      type="text"
                      placeholder="Search by Name..."
                    />
                    <div className="absolute right-3 lg:right-4 cursor-pointer top-3 lg:top-4">
                      <Search className="text-gray-600" />
                    </div>
                  </div>
                  <div className="my-8">
                    {allProductLoading ? (
                      <div className="flex justify-center items-center">
                        <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#89b758]"></div>
                      </div>
                    ) : (
                      <div>
                        <div
                          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8
"
                        >
                          {allProduct?.map((item, idx) => (
                            <div className="customShadow" key={idx}>
                              <div>
                                <div className="relative">
                                  <Image
                                    src={item?.image}
                                    height={400}
                                    width={400}
                                    className="h-[230px] w-full "
                                    alt="product image"
                                  />
                                  <div className="bg-[#89b758] flex justify-center items-center w-[60px] h-[35px] top-0 right-0  absolute">
                                    <h2 className="text-white">
                                      ${item?.price}
                                    </h2>
                                  </div>
                                  {item?.product_status === "Recommended" ? (
                                    <div className="bg-[#89b758] flex justify-center items-center w-[130px] h-[35px] bottom-0 left-0  absolute">
                                      <h2 className="text-white">
                                        {item?.product_status}
                                      </h2>
                                    </div>
                                  ) : (
                                    <div className="bg-[#89b758] flex justify-center items-center w-[60px] h-[35px] bottom-0 left-0  absolute">
                                      <h2 className="text-white">
                                        {item?.product_status}
                                      </h2>
                                    </div>
                                  )}
                                </div>
                                <div className="px-8 pb-8">
                                  <div>
                                    <h2 className="text-2xl mt-4">
                                      {item?.title}
                                    </h2>
                                    <p className="text-[#7a7a7a]  my-3 w-[260px]">
                                      {item?.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                      <button
                                        onClick={() => handleAddToCart(item)}
                                        className="font-semibold flex cursor-pointer items-center gap-2"
                                      >
                                        Add Cart
                                        <ShoppingCart
                                          size={16}
                                          color="#89b758"
                                        />
                                      </button>
                                      <button
                                        onClick={() =>
                                          router.push(`/burger/${item?._id}`)
                                        }
                                        className="font-semibold cursor-pointer flex items-center gap-2"
                                      >
                                        Read More{" "}
                                        <ArrowRight size={18} color="#89b758" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div
                          className={` ${
                            allProductLoading ? "hidden" : ""
                          } space-x-2 mt-8 text-center`}
                        >
                          <button
                            onClick={handlePrevPage}
                            className="bg-[#89b758] px-4 py-2 cursor-pointer text-white rounded-md"
                          >
                            Prev
                          </button>
                          {pages.map((item, index) => (
                            <button
                              key={index + 1}
                              onClick={() => handleCurrentPage(index + 1)}
                              className={`border-[1px] cursor-pointer text-base border-[#89b758] px-4 py-2 text-[#89b758] rounded-md ${
                                currentPage === index + 1
                                  ? "bg-[#89b758] text-white"
                                  : ""
                              }`}
                            >
                              {index + 1}
                            </button>
                          ))}
                          <button
                            onClick={handleNextPage}
                            className="bg-[#89b758] cursor-pointer px-4 py-2 text-white rounded-md"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
