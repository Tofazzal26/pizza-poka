"use client";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const OurTeam = () => {
  const [hover, setHover] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);

  return (
    <div className="bg-[#fff4e2] mt-10 lg:mt-20">
      <div>
        <div>
          <div className="text-center pt-10 lg:pt-20">
            <h3 className="text-base lg:text-2xl text-[#89b758] uppercase">
              Team
            </h3>
            <h2 className="text-2xl lg:text-[64px] font-black text-[#29361a]">
              Behind the taste
            </h2>
          </div>
          <div className="lg:mt-20 mt-10 pb-10 lg:pb-20">
            <div className="flex lg:flex-row flex-col justify-center items-center gap-4 lg:gap-8">
              <div
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="bg-[#fff7eb] ease-in hover:bg-white hover:transition-all transition-all rounded-lg customShadow p-6 w-full lg:w-72 text-center"
              >
                <div className="pt-6">
                  <div
                    className={`w-[150px] h-[150px] mx-auto rounded-full overflow-hidden  ease-in transition-all ${
                      hover ? "bg-green-600 " : "bg-[#ffe8c3]"
                    }`}
                  >
                    <Image
                      src={"/team1.png"}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      alt="chef"
                    />
                  </div>
                </div>
                <h2
                  className={`text-[22px] font-extrabold ${
                    hover ? "text-green-600" : "text-black"
                  } mt-8`}
                >
                  Sofia Richie
                </h2>
                <p className="text-gray-600 text-sm mt-2">Chief chef</p>
                <div className="flex justify-center space-x-4 my-6">
                  <a
                    href="#"
                    className="bg-white p-2 rounded-full shadow hover:shadow-lg"
                  >
                    <Facebook className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-2 rounded-full shadow hover:shadow-lg"
                  >
                    <Twitter className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-2 rounded-full shadow hover:shadow-lg"
                  >
                    <Linkedin className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-2 rounded-full shadow hover:shadow-lg"
                  >
                    <Instagram className="w-4 h-4 text-gray-600" />
                  </a>
                </div>
              </div>
              <div
                onMouseEnter={() => setHover2(true)}
                onMouseLeave={() => setHover2(false)}
                className="bg-[#fff7eb] ease-in hover:bg-white hover:transition-all transition-all rounded-lg customShadow p-6 w-full lg:w-72 text-center"
              >
                <div className="pt-6">
                  <div
                    className={`w-[150px] h-[150px] mx-auto rounded-full overflow-hidden  ease-in transition-all ${
                      hover2 ? "bg-green-600 " : "bg-[#ffe8c3]"
                    }`}
                  >
                    <Image
                      src={"/team2.png"}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      alt="chef"
                    />
                  </div>
                </div>
                <h2
                  className={`text-[22px] font-extrabold ${
                    hover2 ? "text-green-600" : "text-black"
                  } mt-8`}
                >
                  Himanul Islam
                </h2>
                <p className="text-gray-600 text-sm mt-2">Chief chef</p>
                <div className="flex justify-center space-x-4 my-6">
                  <a
                    href="#"
                    className="bg-white p-2 rounded-full shadow hover:shadow-lg"
                  >
                    <Facebook className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-2 rounded-full shadow hover:shadow-lg"
                  >
                    <Twitter className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-2 rounded-full shadow hover:shadow-lg"
                  >
                    <Linkedin className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-2 rounded-full shadow hover:shadow-lg"
                  >
                    <Instagram className="w-4 h-4 text-gray-600" />
                  </a>
                </div>
              </div>
              <div
                onMouseEnter={() => setHover3(true)}
                onMouseLeave={() => setHover3(false)}
                className="bg-[#fff7eb] ease-in hover:bg-white hover:transition-all transition-all rounded-lg customShadow p-6 w-full lg:w-72 text-center"
              >
                <div className="pt-6">
                  <div
                    className={`w-[150px] h-[150px] mx-auto rounded-full overflow-hidden  ease-in transition-all ${
                      hover3 ? "bg-green-600 " : "bg-[#ffe8c3]"
                    }`}
                  >
                    <Image
                      src={"/team3.png"}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      alt="chef"
                    />
                  </div>
                </div>
                <h2
                  className={`text-[22px] font-extrabold ${
                    hover3 ? "text-green-600" : "text-black"
                  } mt-8`}
                >
                  Emilia Clarke
                </h2>
                <p className="text-gray-600 text-sm mt-2">Chief chef</p>
                <div className="flex justify-center space-x-4 my-6">
                  <a
                    href="#"
                    className="bg-white p-2 rounded-full shadow hover:shadow-lg"
                  >
                    <Facebook className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-2 rounded-full shadow hover:shadow-lg"
                  >
                    <Twitter className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-2 rounded-full shadow hover:shadow-lg"
                  >
                    <Linkedin className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-2 rounded-full shadow hover:shadow-lg"
                  >
                    <Instagram className="w-4 h-4 text-gray-600" />
                  </a>
                </div>
              </div>
              <div
                onMouseEnter={() => setHover4(true)}
                onMouseLeave={() => setHover4(false)}
                className="bg-[#fff7eb] ease-in hover:bg-white hover:transition-all transition-all rounded-lg customShadow p-6 w-full lg:w-72 text-center"
              >
                <div className="pt-6">
                  <div
                    className={`w-[150px] h-[150px] mx-auto rounded-full overflow-hidden  ease-in transition-all ${
                      hover4 ? "bg-green-600 " : "bg-[#ffe8c3]"
                    }`}
                  >
                    <Image
                      src={"/team4.png"}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                      alt="chef"
                    />
                  </div>
                </div>
                <h2
                  className={`text-[22px] font-extrabold ${
                    hover4 ? "text-green-600" : "text-black"
                  } mt-8`}
                >
                  Tamim Islam
                </h2>
                <p className="text-gray-600 text-sm mt-2">Chief chef</p>
                <div className="flex justify-center space-x-4 my-6">
                  <a
                    href="#"
                    className="bg-white p-2 rounded-full shadow hover:shadow-lg"
                  >
                    <Facebook className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-2 rounded-full shadow hover:shadow-lg"
                  >
                    <Twitter className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-2 rounded-full shadow hover:shadow-lg"
                  >
                    <Linkedin className="w-4 h-4 text-gray-600" />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-2 rounded-full shadow hover:shadow-lg"
                  >
                    <Instagram className="w-4 h-4 text-gray-600" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
