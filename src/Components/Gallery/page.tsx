"use client";
import Image from "next/image";

const Gallery = () => {
  return (
    <div>
      <div className="">
        <div className="text-center pt-10 lg:pt-20">
          <h3 className="text-base lg:text-2xl text-[#89b758] uppercase">
            Gallery
          </h3>
          <h2 className="text-2xl lg:text-[64px] font-black text-[#29361a]">
            Vegan gallery
          </h2>
        </div>
        <section className="mt-5 lg:mt-10">
          <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
              <div className="col-span-2 sm:col-span-1 md:col-span-2 h-auto md:h-full flex flex-col">
                <Image
                  src={"/berger2.jpg"}
                  width={400}
                  height={400}
                  alt=""
                  className="w-full h-full object-cover object-center mx-auto rounded-md"
                />
              </div>
              <div className="col-span-2 sm:col-span-1 md:col-span-2 ">
                <Image
                  src={"/berger5.jpg"}
                  width={400}
                  height={400}
                  alt=""
                  className="w-full h-[57%] object-cover object-center mx-auto rounded-md"
                />

                <div className="grid gap-4 grid-cols-2 mt-4">
                  <Image
                    src={"/berger3.jpg"}
                    width={400}
                    height={400}
                    alt=""
                    className="w-full h-full object-cover object-center mx-auto rounded-md"
                  />

                  <Image
                    src={"/berger6.jpg"}
                    width={400}
                    height={400}
                    alt=""
                    className="w-full h-full object-cover object-center mx-auto rounded-md"
                  />
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1  md:col-span-1  h-auto md:h-full flex flex-col">
                <Image
                  src={"/berger4.jpg"}
                  width={400}
                  height={400}
                  alt=""
                  className="w-full h-full object-cover object-center mx-auto rounded-md"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;
