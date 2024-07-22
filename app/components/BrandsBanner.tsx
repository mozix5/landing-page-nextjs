import Image from "next/image";
import React from "react";
import brand from "@/public/svg/brand.svg";

const brands = [
  { logo: brand },
  { logo: brand },
  { logo: brand },
  { logo: brand },
  { logo: brand },
  { logo: brand },
];
const BrandsBanner = () => {
  return (
    <div className=" py-14 border-t-2 border-b-2">
      <div className="flex justify-between">
        {brands.map((brand, i) => {
          return <Image key={i} src={brand.logo} alt="brand" />;
        })}
      </div>
    </div>
  );
};

export default BrandsBanner;
