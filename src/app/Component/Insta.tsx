import React from "react";
import Image from "next/image";

const Instagram = () => {
  return (
    <div className="h-full bg-[#F0F2F3] mt-32">
      {/* Subscription Section */}
      <div className="py-16 text-center space-y-6">
        <h2 className="font-bold text-3xl mt-4">
          Or Subscribe To The Newsletter
        </h2>
        <div className="flex justify-center items-center gap-16">
          <div className="flex flex-col items-start mt-12">
            <span className="text-[#8F9499] text-[16px] font-semibold mb-2 ml-3">
              Email address...
            </span>
            <div className="w-[643px] h-[2px] bg-black"></div>
          </div>
          <div className="flex flex-col items-center mt-12">
            <span className="text-[16px] font-normal mb-2">SUBMIT</span>
            <div className="w-[91px] h-[2px] bg-black"></div>
          </div>
        </div>
      </div>

      {/* Instagram Products Section */}
      <div className="py-6 space-y-8">
        <h2 className="text-3xl font-bold text-center">
          Follow Products and Discounts On Instagram
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pb-24 px-4">
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/Image5.png"
              alt="Instagram product 1"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/Image4.png"
              alt="Instagram product 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/Image1.png"
              alt="Instagram product 3"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/Imagew.png"
              alt="Instagram product 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/Image2.png"
              alt="Instagram product 5"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src="/Image6.png"
              alt="Instagram product 6"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instagram;
