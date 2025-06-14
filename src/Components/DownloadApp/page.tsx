import Image from "next/image";
import React from "react";

const DownloadApp = () => {
  return (
    <div className="container mx-auto">
      <div className="my-20">
        <div className="flex lg:flex-row flex-col justify-center items-center gap-5 lg:gap-20">
          <div>
            <h2 className="text-lg lg:text-2xl uppercase text-[#89b758]">
              download app
            </h2>
            <div className="leading-[60px] mt-2">
              <h2 className="text-2xl lg:text-[56px]">
                Download the app. Click
              </h2>
              <h2 className="text-2xl lg:text-[56px]">sit back and enjoy.</h2>
            </div>
            <p className="text-[#7a7a7a] w-full lg:w-[580px] mt-3 lg:mt-6">
              As well known and we are very busy all days advice you. advice you
              to call us of before arriving, so we can guarantee your seat.
              advice you to call us of before arriving, so we can
            </p>
            <div className="flex items-center gap-4 lg:gap-8 mt-5 lg:mt-10">
              <Image
                src={"/play_store.png"}
                width={100}
                height={100}
                alt=""
                className="lg:w-[200px] lg:h-[65px] w-[150px] h-[50px]"
              />
              <Image
                src={"/app_store.png"}
                width={100}
                height={100}
                alt=""
                className="lg:w-[200px] lg:h-[65px] w-[150px] h-[50px]"
              />
            </div>
          </div>
          <div>
            <Image
              src={"/app_image.png"}
              width={400}
              height={400}
              alt=""
              className="lg:w-[365px] lg:h-[600px] w-[200px] h-[365px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
