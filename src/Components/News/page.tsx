import { ArrowRight, Clock4, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const News = () => {
  return (
    <div className="container mx-auto">
      <div className="lg:flex-row flex flex-col md:flex-wrap md:flex-row justify-center items-center gap-4 lg:gap-8">
        <div className="customShadow rounded-lg">
          <div>
            <div className="px-4">
              <Image
                src="/berger1.jpg"
                height={400}
                width={400}
                alt=""
                className="h-[230px] w-[320px] rounded-lg"
              />
            </div>
            <div className="px-10 pb-10">
              <div className="text-sm text-[#89b758] flex justify-between items-center mt-6 mb-3">
                <h2 className="flex items-center gap-2">
                  <User size={23} /> GLOREYA
                </h2>
                <h2 className="flex items-center gap-2">
                  <Clock4 size={20} /> 10 , March , 2025
                </h2>
              </div>
              <div>
                <h2 className="text-2xl">Labor Depar rules</h2>
                <p className="text-[#7a7a7a]  my-3 w-[260px]">
                  You’re cooking a meal, especially a holiday meal, to be
                </p>
                <button className="font-semibold flex items-center gap-2">
                  Read More <ArrowRight size={18} color="#7a7a7a" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="customShadow rounded-lg">
          <div>
            <div className="px-4">
              <Image
                src="/berger3.jpg"
                height={400}
                width={400}
                alt=""
                className="h-[230px] w-[320px] rounded-lg"
              />
            </div>
            <div className="px-10 pb-10">
              <div className="text-sm text-[#89b758] flex justify-between items-center mt-6 mb-3">
                <h2 className="flex items-center gap-2">
                  <User size={23} /> GLOREYA
                </h2>
                <h2 className="flex items-center gap-2">
                  <Clock4 size={20} /> 10 , April , 2024
                </h2>
              </div>
              <div>
                <h2 className="text-2xl">New restaurant town</h2>
                <p className="text-[#7a7a7a]  my-3 w-[260px]">
                  You’re cooking a meal, especially a holiday meal, to be
                </p>
                <button className="font-semibold flex items-center gap-2">
                  Read More <ArrowRight size={18} color="#7a7a7a" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="customShadow rounded-lg">
          <div>
            <div className="px-4">
              <Image
                src="/berger5.jpg"
                height={400}
                width={400}
                alt=""
                className="h-[230px] w-[320px] rounded-lg"
              />
            </div>
            <div className="px-10 pb-10">
              <div className="text-sm text-[#89b758] flex justify-between items-center mt-6 mb-3">
                <h2 className="flex items-center gap-2">
                  <User size={23} /> GLOREYA
                </h2>
                <h2 className="flex items-center gap-2">
                  <Clock4 size={20} /> 10 , October , 2024
                </h2>
              </div>
              <div>
                <h2 className="text-2xl">Starbucks invests $100M</h2>
                <p className="text-[#7a7a7a]  my-3 w-[260px]">
                  You’re cooking a meal, especially a holiday meal, to be
                </p>
                <button className="font-semibold flex items-center gap-2">
                  Read More <ArrowRight size={18} color="#7a7a7a" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
