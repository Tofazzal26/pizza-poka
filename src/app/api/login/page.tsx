"use client";

import { AuthBurgerPoka } from "@/BurgerProvider/BurgerProvider";
import { Eye, EyeOff, Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FormEvent } from "react";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
const Login = () => {
  const burgerContext = useContext(AuthBurgerPoka);
  if (!burgerContext) {
    throw new Error("AuthBurgerPoka must be used within a BurgerProvider");
  }
  const { loading, setLoading } = burgerContext;
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const session = useSession();

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    setLoading(true);
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (resp?.status === 401) {
      toast.error("Please enter a valid email and password");
    }
    if (resp?.status === 200) {
      router.push("/");
      toast.success("Login Success");
    }
  };

  const handleGoogleLogin = async (provider: string): Promise<void> => {
    // await signIn(provider);
  };

  const handleGithubLogin = async (provider: string): Promise<void> => {
    // await signIn(provider);
  };
  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/");
    }
  }, [session, router]);

  return (
    <div className="mt-[65px]">
      <div className="container mx-auto">
        <div>
          <div className="flex justify-center items-center my-[20px] md:my-[100px]">
            <div className="border-2 rounded-md border-[#e5e5e5]">
              <div className="md:px-[60px] px-[20px] pb-[20px] md:pb-14">
                <h1 className="text-center text-lg md:text-2xl my-4 md:my-10">
                  LOGIN
                </h1>
                <form onSubmit={handleSubmit}>
                  <div>
                    <label className="text-gray-500">
                      Username or email address *
                    </label>
                    <br />
                    <input
                      type="text"
                      name="email"
                      className="md:py-[10px] py-2 mt-2 mb-4 px-3 w-full lg:w-full md:w-[400px] md:px-5 bg-[#f3f4f7] border-[1px] border-[#e5e5e5] outline-none rounded-none"
                    />
                  </div>
                  <div className="relative">
                    <label className="text-gray-500">Password *</label>
                    <br />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      className="md:py-[10px] py-2 mt-2 px-3 w-full md:w-[400px] lg:w-full md:px-5 bg-[#f3f4f7] border-[1px]  outline-none border-[#e5e5e5] rounded-none"
                    />
                    {showPassword ? (
                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-[45px] right-[10px] cursor-pointer"
                      >
                        <Eye size={20} className="text-gray-500" />
                      </span>
                    ) : (
                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-[45px] right-[10px] cursor-pointer"
                      >
                        <EyeOff size={20} className="text-gray-500" />
                      </span>
                    )}
                  </div>
                  {loading ? (
                    <div className="bg-[#89b758] cursor-pointer w-full py-[10px] mt-4">
                      <h2 className="text-white flex items-center justify-center text-lg">
                        <Loader className="animate-spin" size={25} />
                      </h2>
                    </div>
                  ) : (
                    <button className="bg-[#89b758] text-white cursor-pointer text-lg w-full py-[10px] mt-4">
                      Login
                    </button>
                  )}
                </form>
                <div>
                  <h2 className="mt-4 text-gray-500">
                    Do not Have An Account ?{" "}
                    <Link href="/api/register" className="text-[#89b758]">
                      Register
                    </Link>
                  </h2>
                </div>
                <div className="mt-4 flex justify-center items-center gap-2">
                  <button
                    onClick={() => handleGoogleLogin("google")}
                    className="flex px-4 py-2 justify-center cursor-pointer items-center gap-2 border-2 border-[#e5e5e5]"
                  >
                    <Image
                      src="/google.png"
                      alt="google"
                      width={30}
                      height={30}
                    />
                    Continue to Google
                  </button>
                  <button
                    onClick={() => handleGithubLogin("github")}
                    className="flex px-4 py-2 cursor-pointer justify-center items-center gap-2 border-2 border-[#e5e5e5]"
                  >
                    <Image
                      src="/github.png"
                      alt="google"
                      width={30}
                      height={30}
                    />
                    Continue to Github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
