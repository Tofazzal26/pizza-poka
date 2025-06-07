"use client";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Header: React.FC = () => {
  const path = usePathname();
  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <Link href="/">
            <button className="flex uppercase items-center gap-2 text-[18px] cursor-pointer lg:text-[22px]">
              <Image
                className="lg:w-[50px] lg:h-[50px] w-[40px] h-[40px]"
                src="/logo1.png"
                width={50}
                height={50}
                alt="logo"
              />{" "}
              <h2>Pizza Poka</h2>
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <h2 className="text-[12px] lg:text-[14px] font-bold uppercase">
                {" "}
                <Link href="/" className={path === "/" ? "text-[#89b758]" : ""}>
                  Home
                </Link>{" "}
              </h2>
            </li>
            <li>
              <h2 className="text-[12px] lg:text-[14px] font-bold uppercase">
                {" "}
                <Link
                  href="/pizza"
                  className={path === "/pizza" ? "text-[#89b758]" : ""}
                >
                  Pizza
                </Link>{" "}
              </h2>
            </li>
            <li>
              <h2 className="text-[12px] lg:text-[14px] font-bold uppercase">
                {" "}
                <Link
                  href="/about"
                  className={path === "/about" ? "text-[#89b758]" : ""}
                >
                  About
                </Link>{" "}
              </h2>
            </li>
            <li>
              <h2 className="text-[12px] lg:text-[14px] font-bold uppercase">
                {" "}
                <Link
                  href="/contact"
                  className={path === "/contact" ? "text-[#89b758]" : ""}
                >
                  Contact
                </Link>{" "}
              </h2>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-4 lg:gap-8">
            <div className="relative">
              <Link
                href="/cart"
                className={path === "/cart" ? "text-[#ffb25a]" : ""}
              >
                <ShoppingCart size={18} />
              </Link>
              <span className="absolute top-[-10px] text-[10px] bg-[#89b758] flex items-center justify-center rounded-full w-[16px] h-[16px] right-[-10px]">
                0
              </span>
            </div>
            <button className="bg-[#89b758] text-[12px] font-bold uppercase text-white lg:text-[14px] px-5 py-2 rounded-full">
              Login
            </button>
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 translate-x-[-65px] w-[120px] p-2 shadow"
            >
              <ul className="menu menu-horizontal px-1">
                <li>
                  <h2 className="text-[12px] lg:text-[14px] font-bold uppercase">
                    {" "}
                    <Link
                      href="/"
                      className={path === "/" ? "text-[#89b758]" : ""}
                    >
                      Home
                    </Link>{" "}
                  </h2>
                </li>
                <li>
                  <h2 className="text-[12px] lg:text-[14px] font-bold uppercase">
                    {" "}
                    <Link
                      href="/pizza"
                      className={path === "/pizza" ? "text-[#89b758]" : ""}
                    >
                      Pizza
                    </Link>{" "}
                  </h2>
                </li>
                <li>
                  <h2 className="text-[12px] lg:text-[14px] font-bold uppercase">
                    {" "}
                    <Link
                      href="/about"
                      className={path === "/about" ? "text-[#89b758]" : ""}
                    >
                      About
                    </Link>{" "}
                  </h2>
                </li>
                <li>
                  <h2 className="text-[12px] lg:text-[14px] font-bold uppercase">
                    {" "}
                    <Link
                      href="/contact"
                      className={path === "/contact" ? "text-[#89b758]" : ""}
                    >
                      Contact
                    </Link>{" "}
                  </h2>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
