import Image from "next/image";
const Header = () => {
  return (
    <header className="bg-[#F0F2F3] rounded-lg px-8 py-6 h-[600px] flex items-center justify-between lg:ml-48 lg:mr-52">
      {/* Left Section - Text */}
      <div className="max-w-md text-start">
        <h1 className="text-sm uppercase mb-2 text-gray-500">
          Welcome to Chairy
        </h1>
        <p className="text-5xl text-[#272343] font-inter font-bold mb-6 leading-tight">
          <span className="block">Best Furniture</span>
          <span className="block">Collection For Your</span>
          <span className="block">Interior</span>
        </p>

        {/* Button */}
        <button className="bg-[#029FAE] mt-5 text-[#FFFF] px-7 py-3 rounded-lg font-semibold shadow-md flex items-center gap-2 hover:bg-gray-100 transition">
          Shop Now
          <svg
            width="18"
            height="12"
            viewBox="0 0 18 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 1.5L17 6M17 6L12.5 10.5M17 6H1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Right Section - Image */}
      <div className="mr-24">
        <Image
          src="/headerimage.png"
          alt="Product Image"
          width={350}
          height={350}
        />
      </div>
    </header>
  );
};

export default Header;
