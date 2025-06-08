import Image from "next/image";
import React from "react";

const WhoAreWe = () => {
  return (
    <div>
      <div className="flex lg:flex-row md:flex-row flex-col justify-center gap-4 lg:gap-8 items-center my-10 lg:my-20">
        <div>
          <Image
            src="/who.jpg"
            width={255}
            height={460}
            alt="food"
            className="lg:w-[255px] lg:h-[460px] w-[300px] h-[300px] rounded-md"
          />
        </div>
        <div className="customShadow text-center px-4 lg:px-8 py-10 lg:py-20 md:py-[70px]">
          <h2 className="text-lg lg:text-[24px] text-[#89b758] uppercase">
            who are we
          </h2>
          <h2 className="text-2xl lg:text-[48px] font-black lg:w-[480px] md:w-[350px] lg:leading-[50px] mx-auto">
            Best burger ideas & traditions from the whole world
          </h2>
          <p className="text-sm lg:text-base text-[#7a7a7a] lg:w-[450px] md:w-[350px] lg:mt-10">
            Back in 1993, three Kiwi guys including world-renowned chef Peter
            Moor set up the first Gloreya Burger Kitchen in Battersea, South
            London Burger Kitchen in{" "}
          </p>
        </div>
        <div>
          <Image
            src="/who2.jpg"
            width={255}
            height={460}
            alt="food"
            className="lg:w-[255px] lg:h-[460px] w-[300px] h-[300px] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
