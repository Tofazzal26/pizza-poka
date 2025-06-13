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

const AdminDashboard = () => {
  const isLoading = false;
  const monthlyRevenue = [
    1000, 1500, 800, 1200, 1800, 2200, 2000, 2500, 2100, 1700, 1900, 2300,
  ];
  return (
    <div>
      <div>
        {isLoading ? (
          ""
        ) : (
          <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">
              <div className="flex items-center bg-white cursor-pointer customShadow rounded-lg py-8 px-8 hover:bg-blue-50 transition duration-200">
                <div className="text-blue-500">
                  <BadgeDollarSign className="w-10 h-10" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-semibold text-gray-800">44</h3>
                  <p className="text-gray-600">Total Revinue</p>
                </div>
              </div>
              <div className="flex items-center bg-white customShadow cursor-pointer rounded-lg py-8 px-8 hover:bg-orange-50 transition duration-200">
                <div className="text-orange-500">
                  <Box className="w-10 h-10" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-semibold text-gray-800">200</h3>
                  <p className="text-gray-600">Total Products</p>
                </div>
              </div>
              <div className="flex items-center bg-white customShadow cursor-pointer rounded-lg py-8 px-8 hover:bg-red-50 transition duration-200">
                <div className="text-red-500">
                  <DollarSign className="w-10 h-10" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    1200$
                  </h3>
                  <p className="text-gray-600">Total Amount</p>
                </div>
              </div>
              <div className="flex items-center bg-white customShadow cursor-pointer rounded-lg py-8 px-8 hover:bg-green-50 transition duration-200">
                <div className="text-green-500">
                  <Users className="w-10 h-10" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-semibold text-gray-800">190</h3>
                  <p className="text-gray-600">Total Users</p>
                </div>
              </div>
            </div>
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
