import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="bg-[#f2f6ed]">
      <div className="container mx-auto">
        <div>
          <div className="text-center pt-10 lg:pt-20">
            <div>
              <h2 className="text-base lg:text-[22px] font-extrabold uppercase text-[#89b758]">
                happy hour special
              </h2>
              <div className="leading-[50px] lg:leading-[80px]">
                <h2 className="text-[#29361a] text-[40px] lg:text-[80px] font-black">
                  We Serve <span className="text-[#89b758]">Sensational</span>
                </h2>
                <h2 className="text-[#29361a] text-[40px] lg:text-[80px] font-black">
                  Burger Fast Food
                </h2>
              </div>
              <div className="flex justify-center items-center mt-4 lg:mt-10">
                <Link href="/burger">
                  <button className="text-sm lg:text-[15px] flex items-center py-[12px] px-6 lg:py-[14px] lg:px-8 rounded-full gap-2 font-black text-white cursor-pointer uppercase bg-[#89b758]">
                    <ShoppingCart size={18} /> Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center relative justify-center">
              <div className="absolute lg:left-[100px] hidden lg:block lg:rotate-[-25deg] top-0">
                <Image
                  src="/leftbanner.png"
                  width={550}
                  height={550}
                  alt="food"
                  className="lg:w-[550px] lg:h-[550px] w-[300px] h-[300px]"
                />
              </div>
              <div className="z-10">
                <Image
                  src="/middlebanner.png"
                  width={700}
                  height={700}
                  alt="food"
                  className="lg:w-[700px] lg:h-[700px] w-[400px] h-[400px]"
                />
              </div>
              <div className="absolute lg:right-[120px] hidden lg:block rotate-[23deg] top-0">
                <Image
                  src="/rightbanner.png"
                  width={550}
                  height={550}
                  alt="food"
                  className="lg:w-[550px] lg:h-[550px] w-[300px] h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
