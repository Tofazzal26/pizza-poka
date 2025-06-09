import { MessageCircleMore } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <div className="mt-[65px]">
        <div>
          <div>
            <div className="text-center pt-6">
              <h2 className="text-2xl lg:text-[64px] font-black text-[#29361a]">
                About
              </h2>
            </div>
          </div>
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
                Our Story
              </h2>
              <h2 className="text-2xl lg:text-[48px] font-black lg:w-[480px] md:w-[350px] lg:leading-[50px] mx-auto">
                Burgers Reimagined from Every Corner of the Globe
              </h2>
              <p className="text-sm lg:text-base text-[#7a7a7a] lg:w-[450px] md:w-[350px] lg:mt-10">
                Our story starts in 1993, when a trio of Kiwi burger
                enthusiasts, including the celebrated chef Peter Moor, brought
                their vision to life with Gloreya Burger Kitchen in South
                London’s Battersea.
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
          <div>
            <div>
              <div className="text-center mt-4 lg:pt-6">
                <h3 className="text-base lg:text-2xl text-[#89b758] uppercase">
                  testimonial
                </h3>
                <h2 className="text-2xl lg:text-[64px] font-black text-[#29361a]">
                  Clients review
                </h2>
              </div>
              <div className="my-5 lg:my-10">
                <div className="flex items-center md:flex-row lg:flex-row flex-col gap-3 lg:gap-6 justify-center">
                  <div className="flex lg:flex-row flex-col gap-3 lg:gap-6 items-center">
                    <div>
                      <Image
                        src="/testi.png"
                        width={400}
                        height={400}
                        alt="testimonial"
                        className="lg:w-[300px] lg:h-[300px] w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="text-lg lg:text-[24px] w-full lg:w-[400px]">
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country in which
                      </p>
                      <div className="mt-2">
                        <h2 className="text-lg lg:text-[26px] font-semibold">
                          Nina Margaret
                        </h2>
                        <p className="text-[#7f7f7f] lg:text-base text-sm">
                          CEO, apple
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex lg:flex-row flex-col gap-3 lg:gap-6 items-center">
                    <div>
                      <Image
                        src="/testi2.png"
                        width={400}
                        height={400}
                        alt="testimonial"
                        className="lg:w-[300px] lg:h-[300px] w-full h-full"
                      />
                    </div>
                    <div>
                      <p className="text-lg lg:text-[24px] w-full lg:w-[400px]">
                        A small stream of data named Ryzen flows by their system
                        and powers it with the essential processing cores. It is
                        a tech-topian architecture in which innovation meets
                        performance.
                      </p>
                      <div className="mt-2">
                        <h2 className="text-lg lg:text-[26px] font-semibold">
                          Himanul Islam
                        </h2>
                        <p className="text-[#7f7f7f] lg:text-base text-sm">
                          CEO, AMD
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 lg:mt-20">
                  <div>
                    <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center gap-4">
                      <div>
                        <Link href="/pizza">
                          <Image
                            src="/review2.png"
                            width={605}
                            height={280}
                            className="lg:h-[280px] lg:w-[605px]"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div>
                        <Link href="/pizza">
                          <Image
                            src="/review1.png"
                            width={605}
                            height={280}
                            className="lg:h-[280px] lg:w-[605px]"
                            alt=""
                          />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <div className="flex lg:flex-row md:flex-row flex-col justify-center items-center gap-4 mt-4">
                        <div>
                          <Link href="/pizza">
                            <Image
                              src="/review3.png"
                              width={350}
                              height={255}
                              className="h-[255px] w-full lg:w-[398px]"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div>
                          <Link href="/pizza">
                            <Image
                              src="/review4.png"
                              width={350}
                              height={255}
                              className="h-[255px] w-full lg:w-[398px]"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div>
                          <Link href="/pizza">
                            <Image
                              src="/review5.png"
                              width={350}
                              height={255}
                              className="h-[255px] w-full lg:w-[398px]"
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
