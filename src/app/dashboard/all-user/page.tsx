"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Truck } from "lucide-react";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
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
  userRole: string;
}
const AllUser = () => {
  const {
    isLoading,
    refetch,
    data: AllUser = [],
  } = useQuery<Product[]>({
    queryKey: ["AllUser"],
    queryFn: async (): Promise<Product[]> => {
      const resp = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/AllUser`
      );
      return resp?.data?.data || [];
    },
  });

  const handleRoleChange = async (id: string, role: string) => {
    let userRole: string = "";
    if (role === "user") {
      userRole = "moderator";
    } else if (role === "moderator") {
      userRole = "user";
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You want change role ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const reps = await axios.patch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/UserRoleUpdate/${id}`,
          { userRole }
        );
        if (reps?.data?.status === 200) {
          refetch();
        }

        Swal.fire({
          title: "Changed!",
          text: "Your file has been changed.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <div>
        <div className="bg-white md:px-8 md:py-2 overflow-auto">
          <h2 className="text-lg md:text-2xl my-4">All Users</h2>
          <div className="relative overflow-auto">
            <div className="overflow-x-auto rounded-lg">
              <table className="min-w-full bg-white border border-[#e5e5e5] mb-4">
                <thead>
                  <tr className="bg-[#2B4DC994] text-center text-xs md:text-sm font-thin text-white">
                    <th className="p-0">
                      <span className="block py-2 px-3 border-r border-gray-300 uppercase">
                        Email
                      </span>
                    </th>
                    <th className="p-0">
                      <span className="block py-2 px-3 border-r border-gray-300 uppercase">
                        User Role
                      </span>
                    </th>
                    <th className="p-0">
                      <span className="block py-2 px-3 border-r border-gray-300 uppercase">
                        Status
                      </span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {AllUser?.map((item, idx) => (
                    <tr
                      key={idx}
                      className="border-b border-[#e5e5e5] text-xs md:text-sm text-center text-gray-800"
                    >
                      <td className="p-2 md:p-4">{item?.email}</td>
                      <td className="p-2 md:p-4">{item?.userRole}</td>
                      <td className="p-2 md:p-4">
                        {item?.userRole === "user" ? (
                          <button
                            onClick={() =>
                              handleRoleChange(item._id, item.userRole)
                            }
                            className="bg-[#89b758] px-4 cursor-pointer py-[6px] text-white rounded-full"
                          >
                            Moderator
                          </button>
                        ) : item?.userRole === "moderator" ? (
                          <button
                            onClick={() =>
                              handleRoleChange(item._id, item.userRole)
                            }
                            className="bg-[#89b758] px-4 cursor-pointer py-[6px] text-white rounded-full"
                          >
                            User
                          </button>
                        ) : (
                          ""
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {isLoading ? (
                <div className="flex justify-center items-center mt-4 lg:mt-8">
                  <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#074c3e]"></div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
