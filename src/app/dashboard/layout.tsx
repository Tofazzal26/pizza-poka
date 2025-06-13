"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import {
  ChevronRight,
  DollarSign,
  LayoutDashboard,
  LogOut,
  User,
  ShoppingCart,
  Users,
  PackagePlus,
} from "lucide-react";
export interface UserRole {
  _id: string;
  email: string;
  userRole: "admin" | "moderator" | "user";
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const session = useSession();
  const email = session?.data?.user?.email;
  const [hasMounted, setHasMounted] = useState<boolean>(false);
  const useSingleUserRole = (email: string) => {
    const {
      data: SingleUserRole = {} as UserRole,
      isLoading,
      error,
    } = useQuery<UserRole>({
      queryKey: ["SingleUserRole", email],
      queryFn: async () => {
        const resp = await axios.get<{ data: UserRole }>(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/UserRole/${email}`
        );
        return resp.data.data;
      },
      enabled: !!email,
    });
    return { SingleUserRole, isLoading, error };
  };
  const { SingleUserRole, isLoading, error } = useSingleUserRole(
    email as string
  );

  console.log(SingleUserRole?.userRole);

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row mt-[85px] md:mt-[105px] lg:mt-[65px]">
        <div className="lg:hidden">
          <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn bg-[#89b657] px-2 py-2 text-white drawer-button"
              >
                <ChevronRight />
              </label>
            </div>
            <div className="drawer-side md:mt-[100px] mt-[80px]">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-gray-100 text-white min-h-full w-72 p-4 space-y-2">
                {/* Sidebar content here */}
                <li>
                  <Link
                    href={"/dashboard/my-profile"}
                    className={`${
                      pathname === "/dashboard/my-profile"
                        ? "bg-green-100 text-green-900 font-semibold"
                        : "hover:bg-green-50"
                    } flex text-sm lg:text-lg cursor-pointer items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md text-green-900`}
                  >
                    <User /> My Profile
                  </Link>
                </li>
                <li>
                  {SingleUserRole?.userRole === "user" ? (
                    <Link
                      href={"/dashboard/my-product"}
                      className={`${
                        pathname === "/dashboard/my-product"
                          ? "bg-green-100 text-green-900 font-semibold"
                          : "hover:bg-green-50"
                      } flex text-sm lg:text-lg cursor-pointer items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md text-green-900`}
                    >
                      <ShoppingCart /> My Product
                    </Link>
                  ) : (
                    ""
                  )}
                </li>
                <li>
                  {SingleUserRole?.userRole === "admin" ? (
                    <>
                      <Link
                        href={"/dashboard/admin-dashboard"}
                        className={`${
                          pathname === "/dashboard/admin-dashboard"
                            ? "bg-green-100 text-green-900 font-semibold"
                            : "hover:bg-green-50"
                        } flex text-sm lg:text-lg cursor-pointer items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md text-green-900`}
                      >
                        <LayoutDashboard /> Dashboard
                      </Link>
                      <Link
                        href={"/dashboard/all-user"}
                        className={`${
                          pathname === "/dashboard/all-user"
                            ? "bg-green-100 text-green-900 font-semibold"
                            : "hover:bg-green-50"
                        } flex text-sm lg:text-lg cursor-pointer items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md text-green-900`}
                      >
                        <Users /> All User
                      </Link>
                    </>
                  ) : (
                    ""
                  )}
                </li>
                <li>
                  <Link
                    href={"/"}
                    className="flex hover:bg-green-50 text-green-900 cursor-pointer text-sm lg:text-lg items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md"
                  >
                    <LogOut /> Exit
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:block hidden">
          <div className="bg-gray-100 text-white lg:w-[265px] px-2 p-4 md:h-full lg:h-[90vh] border-b-[1px] border-[#1c3020]">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-[#89b758]"></div>
              </div>
            ) : (
              <div className="lg:space-y-2 md:space-y-1 flex lg:flex-col md:flex-col lg:gap-0 md:gap-2 gap-4 flex-row">
                <Link
                  href={"/dashboard/my-profile"}
                  className={`${
                    pathname === "/dashboard/my-profile"
                      ? "bg-green-100 text-green-900 font-semibold"
                      : "hover:bg-green-50"
                  } flex text-sm lg:text-lg cursor-pointer items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md text-green-900`}
                >
                  <User /> My Profile
                </Link>
                <Link
                  href={"/dashboard/add-product"}
                  className={`${
                    pathname === "/dashboard/add-product"
                      ? "bg-green-100 text-green-900 font-semibold"
                      : "hover:bg-green-50"
                  } flex text-sm lg:text-lg cursor-pointer items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md text-green-900`}
                >
                  <PackagePlus /> Add Product
                </Link>
                {SingleUserRole?.userRole === "user" ? (
                  <Link
                    href={"/dashboard/my-product"}
                    className={`${
                      pathname === "/dashboard/my-product"
                        ? "bg-green-100 text-green-900 font-semibold"
                        : "hover:bg-green-50"
                    } flex text-sm lg:text-lg cursor-pointer items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md text-green-900`}
                  >
                    <ShoppingCart /> My Product
                  </Link>
                ) : (
                  ""
                )}
                {SingleUserRole?.userRole === "admin" ? (
                  <>
                    <Link
                      href={"/dashboard/admin-dashboard"}
                      className={`${
                        pathname === "/dashboard/admin-dashboard"
                          ? "bg-green-100 text-green-900 font-semibold"
                          : "hover:bg-green-50"
                      } flex text-sm lg:text-lg cursor-pointer items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md text-green-900`}
                    >
                      <LayoutDashboard /> Dashboard
                    </Link>
                    <Link
                      href={"/dashboard/all-user"}
                      className={`${
                        pathname === "/dashboard/all-user"
                          ? "bg-green-100 text-green-900 font-semibold"
                          : "hover:bg-green-50"
                      } flex text-sm lg:text-lg cursor-pointer items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md text-green-900`}
                    >
                      <Users /> All User
                    </Link>
                  </>
                ) : (
                  ""
                )}

                <Link href={"/"}>
                  <button className="flex hover:bg-green-50 text-green-900 cursor-pointer text-sm lg:text-lg items-center gap-2 px-2 py-2 lg:px-4 lg:py-3 w-full rounded-md">
                    <LogOut /> Exit
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
        <div className="lg:flex-1 md:flex-1">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
