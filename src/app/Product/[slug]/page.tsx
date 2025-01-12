"use client";
import Image from "next/image";
import Instagram from "../../Component/Insta";

const Products = () => {
  const products = [
    {
      id: 1,
      image: "/Imagew.png",
      title: "Library Stool Chair",
      price: "$20",
      label: "New",
    },
    {
      id: 2,
      image: "/Image1.png",
      title: "Library Stool Chair",
      price: "$30",
      discountedPrice: "$20",
      label: "Sale",
    },
    {
      id: 3,
      image: "/Image2.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 4,
      image: "/Image4.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 5,
      image: "/Image5.png",
      title: "Library Stool Chair",
      price: "$20",
      label: "New",
    },
    {
      id: 6,
      image: "/Imagee.png",
      title: "Library Stool Chair",
      price: "$30",
      discountedPrice: "$20",
      label: "Sale",
    },
    {
      id: 7,
      image: "/imageee.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 8,
      image: "/Imagew.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 9,
      image: "/Image4.png",
      title: "Library Stool Chair",
      price: "$20",
      label: "New",
    },
    {
      id: 10,
      image: "/Image1.png",
      title: "Library Stool Chair",
      price: "$30",
      discountedPrice: "$20",
      label: "Sale",
    },
    {
      id: 11,
      image: "/Image2.png",
      title: "Library Stool Chair",
      price: "$20",
    },
    {
      id: 12,
      image: "/Image6.png",
      title: "Library Stool Chair",
      price: "$20",
    },
  ];

  return (
    <section className="lg:ml-44 lg:mr-44 my-10 mt-20">
      <h2 className="text-2xl font-bold text-[#272343] mb-8">All Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`relative bg-white shadow-md rounded-lg overflow-hidden ${
              index >= 4 && index < 8 ? "mt-6" : index >= 8 ? "mt-6" : ""
            }`}
          >
            {/* Product Label */}
            {product.label && (
              <span
                className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold rounded ${
                  product.label === "New"
                    ? "bg-green-500 text-white"
                    : "bg-[#F5813F] text-white"
                }`}
              >
                {product.label}
              </span>
            )}

            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.title}
              width={350}
              height={350}
              className="object-cover w-full"
            />

            {/* Product Details */}
            <div className="p-4 flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium text-[#272343]">
                  {product.title}
                </h3>
                {product.discountedPrice ? (
                  <div className="text-gray-300 font-semibold">
                    <span className="text-gray-600">
                      {product.discountedPrice}
                    </span>
                    <span className="ml-2 line-through">{product.price}</span>
                  </div>
                ) : (
                  <p className="text-gray-600 font-semibold">{product.price}</p>
                )}
              </div>

              {/* Cart Icon */}
              <button className="p-2 hover:bg-[#029FAE] rounded">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.52 2.98L4.43 3.31L5.31 13.83C5.34 14.24 5.53 14.63 5.84 14.91C6.14 15.19 6.54 15.34 6.96 15.34H16.96C17.36 15.34 17.74 15.2 18.04 14.94C18.34 14.68 18.54 14.32 18.6 13.92L19.47 7.91C19.49 7.75 19.48 7.59 19.44 7.43C19.4 7.28 19.33 7.13 19.24 7.00C19.14 6.87 19.02 6.76 18.88 6.68C18.74 6.6 18.59 6.54 18.43 6.52C18.37 6.51 4.73 6.51 4.73 6.51"
                    stroke="#272343"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.95 9.9H15.49"
                    stroke="#272343"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="6.56" cy="19.02" r="0.9" fill="#272343" />
                  <circle cx="16.9" cy="19.02" r="0.9" fill="#272343" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      <Instagram />
    </section>
  );
};

export default Products;
