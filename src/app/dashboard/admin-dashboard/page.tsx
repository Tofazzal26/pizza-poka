"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  BadgeDollarSign,
  Box,
  DollarSign,
  MessageCircleMore,
  ShoppingBag,
  TrendingUp,
  Users,
} from "lucide-react";
import RevinueChart from "./RevinueChart";
interface AdminAllDataResponse {
  totalProduct: number;
  totalUser: number;
  message: string;
  success: boolean;
  status: number;
}

const AdminDashboard = () => {
  const isLoading = false;
  const monthlyRevenue = [
    1000, 1500, 800, 1200, 1800, 2200, 2000, 2500, 2100, 1700, 1900, 2300,
  ];

  const {
    data: totalData,
    isLoading: AllDataLoading,
    isError,
  } = useQuery<AdminAllDataResponse>({
    queryKey: ["AdminAllData"],
    queryFn: async () => {
      const resp = await axios.get<AdminAllDataResponse>(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/AdminAllData`
      );
      return resp.data;
    },
  });

  console.log(totalData);

  return (
    <div>
      <div>
        {isLoading ? (
          ""
        ) : (
          <div className="">
            {AllDataLoading ? (
              <div className="flex justify-center items-center mt-4">
                <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#89b758]"></div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
                <div className="flex items-center bg-white cursor-pointer customShadow rounded-lg py-8 px-8 hover:bg-blue-50 transition duration-200">
                  <div className="text-blue-500">
                    <BadgeDollarSign className="w-10 h-10" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      2385$
                    </h3>
                    <p className="text-gray-600">Total Revinue</p>
                  </div>
                </div>
                <div className="flex items-center bg-white customShadow cursor-pointer rounded-lg py-8 px-8 hover:bg-orange-50 transition duration-200">
                  <div className="text-orange-500">
                    <Box className="w-10 h-10" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {totalData?.totalProduct}
                    </h3>
                    <p className="text-gray-600">Total Products</p>
                  </div>
                </div>
                <div className="flex items-center bg-white customShadow cursor-pointer rounded-lg py-8 px-8 hover:bg-red-50 transition duration-200">
                  <div className="text-red-500">
                    <DollarSign className="w-10 h-10" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      2500$
                    </h3>
                    <p className="text-gray-600">Total Amount</p>
                  </div>
                </div>
                <div className="flex items-center bg-white customShadow cursor-pointer rounded-lg py-8 px-8 hover:bg-green-50 transition duration-200">
                  <div className="text-green-500">
                    <Users className="w-10 h-10" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold text-gray-800">
                      {totalData?.totalUser}
                    </h3>
                    <p className="text-gray-600">Total Users</p>
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-center items-center">
              <RevinueChart revenueData={monthlyRevenue} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
