import { Bell } from "lucide-react";
import Image from "next/image";
import React from "react";

const Connect = () => {
  return (
    <div className="bg-[#89b657] py-2">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col md:flex-row gap-4 lg:gap-0 justify-between items-center">
          <div>
            <h2 className="text-[26px] lg:text-[36px] font-black text-white">
              Let's connect!
            </h2>
            <p className="text-white lg:mt-4 mt-2 mb-4 lg:mb-8">
              Sign up for our newsletter & get a 10% off bill offers and
              invites!
            </p>
            <div className="flex lg:flex-row md:flex-row flex-col items-center gap-2 lg:gap-4">
              <input
                type="text"
                className="bg-white rounded-full px-8 lg:py-3 py-[12px] w-[300px] lg:w-[360px] outline-none"
                placeholder="Your email address"
              />
              <button className="flex cursor-pointer lg:px-6 px-5 py-[12px] lg:py-[13px] items-center text-sm gap-2 bg-[#29361a] rounded-full text-white">
                <Bell size={18} /> SUBSCIBE
              </button>
            </div>
          </div>
          <div>
            <Image
              src="/newsLetter.png"
              width={400}
              height={400}
              alt="newsletter"
              className="lg:h-[410px] h-[300px] w-[250px] lg:w-[310px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
