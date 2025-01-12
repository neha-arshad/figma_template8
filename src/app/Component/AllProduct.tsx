import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  originalPrice?: number;
  isNew?: boolean;
  isSale?: boolean;
};

const ProductCard = ({ product }: { product: Product }) => (
  <div key={product.id} className="group relative rounded-lg bg-white">
    <div className="relative aspect-square overflow-hidden rounded-lg">
      {product.isNew && (
        <span className="absolute left-3 top-3 rounded-lg bg-emerald-500 px-2 py-1 text-white text-xs font-semibold">
          New
        </span>
      )}
      {product.isSale && (
        <span className="absolute left-3 top-3 rounded-lg bg-orange-500 px-2 py-1 text-white text-xs font-semibold">
          Sale
        </span>
      )}
      <Link href={`/product/${product.id}`}>
        <Image
          src={product.image}
          alt={product.title}
          height={400}
          width={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          aria-label={`View details of ${product.title}`}
        />
      </Link>
    </div>
    <div className="mt-4 flex items-center justify-between">
      <div>
        <h3 className="text-sm text-[#272343]">{product.title}</h3>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-lg font-medium text-[#272343]">
            ${product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </div>
      </div>
      <button
        className="rounded-full bg-[#F0F2F3] p-2 text-white transition-colors hover:bg-[#029FAE]"
        aria-label={`Add ${product.title} to cart`}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.52075 2.97917L4.42742 3.30917L5.31017 13.8261C5.34408 14.2399 5.53278 14.6258 5.83861 14.9066C6.14445 15.1875 6.54494 15.3427 6.96017 15.3413H16.961C17.3586 15.3418 17.743 15.1987 18.0434 14.9383C18.3439 14.6779 18.5402 14.3178 18.5963 13.9242L19.4672 7.91267C19.4904 7.7528 19.4819 7.58991 19.4421 7.43334C19.4023 7.27676 19.332 7.12956 19.2353 7.00015C19.1386 6.87075 19.0173 6.76168 18.8784 6.67918C18.7395 6.59667 18.5857 6.54236 18.4258 6.51934C18.3672 6.51292 4.73359 6.50834 4.73359 6.50834"
            stroke="#272343"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.9478 9.89542H15.4897"
            stroke="#272343"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.55786 18.5194C6.62508 18.5165 6.69219 18.5273 6.75515 18.551C6.81811 18.5748 6.87562 18.611 6.9242 18.6575C6.97279 18.7041 7.01145 18.76 7.03787 18.8219C7.06428 18.8837 7.0779 18.9503 7.0779 19.0176C7.0779 19.0849 7.06428 19.1515 7.03787 19.2134C7.01145 19.2753 6.97279 19.3312 6.9242 19.3777C6.87562 19.4243 6.81811 19.4605 6.75515 19.4842C6.69219 19.508 6.62508 19.5187 6.55786 19.5158C6.42942 19.5103 6.30808 19.4554 6.21914 19.3626C6.13021 19.2698 6.08057 19.1462 6.08057 19.0176C6.08057 18.8891 6.13021 18.7655 6.21914 18.6726C6.30808 18.5798 6.42942 18.5249 6.55786 18.5194Z"
            fill="#272343"
            stroke="#272343"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
);

export default function AllProduct() {
  const products: Product[] = [
    {
      id: 1,
      title: "Library Stool Chair",
      price: 20,
      image: "/Imagee.png",
      isNew: true,
    },
    {
      id: 2,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/Image1.png",
      isSale: true,
    },
    {
      id: 3,
      title: "Library Stool Chair",
      price: 20,
      image: "/Image2.png",
    },
    {
      id: 4,
      title: "Library Stool Chair",
      price: 20,
      image: "/Image3.png",
    },
    {
      id: 5,
      title: "Library Stool Chair",
      price: 20,
      image: "/Image3.png",
      isNew: true,
    },
    {
      id: 6,
      title: "Library Stool Chair",
      price: 20,
      originalPrice: 30,
      image: "/Image4.png",
      isSale: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-3xl font-semibold text-[#272343] tracking-tight mb-8">
        All Products
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
