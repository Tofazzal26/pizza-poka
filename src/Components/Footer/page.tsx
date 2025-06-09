import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#222222] pt-10 pb-5 lg:pt-20 lg:pb-10">
      <div className="container mx-auto">
        <div>
          <div className="flex lg:flex-row lg:gap-0 gap-6 flex-col justify-between">
            <div>
              <div>
                <button className="flex uppercase items-center gap-2 text-[18px] cursor-pointer lg:text-[22px] text-white">
                  <Image
                    className="lg:w-[50px] lg:h-[50px] w-[40px] h-[40px]"
                    src="/logo1.png"
                    width={50}
                    height={50}
                    alt="logo"
                  />{" "}
                  <h2>Burger Poka</h2>
                </button>
              </div>
              <p className="text-[#aaaaaa] w-[300px] mt-4">
                We like to keep our fans up-to-date. By accepting our terms, you
                agree to receive.
              </p>
            </div>
            <div>
              <h2 className="text-white text-xl lg:text-2xl">Book a table</h2>
              <ul className="text-[#aaaaaa] mt-4">
                <li>The Burger and Sliders Truck</li>
                <li>Burger & Sliders Street Eats</li>
              </ul>
              <h2 className="text-xl text-[#89b657]">(+88) 01306-700357</h2>
            </div>
            <div>
              <h2 className="text-white text-xl lg:text-2xl">Opening hours</h2>
              <ul className="text-[#aaaaaa] mt-4">
                <li>Monday – Friday</li>
                <li>10.00 AM – 11.00 PM</li>
              </ul>
            </div>
            <div>
              <h2 className="text-white text-xl lg:text-2xl">Address</h2>
              <ul className="text-[#aaaaaa] mt-4">
                <li>1200 8th Ave,</li>
                <li>Dhaka, Bangladesh</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="text-[#aaaaaa] flex lg:flex-row flex-col justify-between items-center border-t-2 border-[#3c3c3c] lg:mt-10 mt-5 pt-4  lg:pt-8 lg:gap-0 gap-4">
              <ul className="flex items-center gap-4 lg:gap-8 ">
                <li>About us</li>
                <li>Menu</li>
                <li>Blog</li>
                <li>Gallery</li>
                <li>Faq</li>
                <li>Contact</li>
              </ul>
              <h2>© 2025 Pizza Poka. All rights reserved</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
