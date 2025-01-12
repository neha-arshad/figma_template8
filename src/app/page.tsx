import Image from "next/image";
import Header from "./Component/Header";
import CompanyLogo from "./Component/CompanyLogo";
import FeaturedProduct from "./Component/FeaturedProduct";
import TopCategories from "./Component/TopCategories";
import HotCategories from "./Component/HotCategories";
import OurProducts from "./Component/OurProduct";

export default function Home() {
  return (
    <>
		<Header />
		<CompanyLogo />
		<FeaturedProduct />
		<TopCategories />
		<HotCategories />
		<OurProducts />
		</>
  );
}
