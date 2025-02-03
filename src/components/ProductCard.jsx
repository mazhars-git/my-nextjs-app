import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 my-10">
      <div className="relative w-full h-52 object-contain">
        <Image
          src={product.strMealThumb}
          width={1500}
          height={800}
          className="rounded-t-lg h-56"
        />
      </div>

      <div className="text-center py-5">
        <h2 className="text-2xl">{product.strMeal}</h2>
      </div>

      <div className="flex mt-6 justify-between items-center p-2">
        <Link
          href={`/product/${product.id}`}
          className="bg-black text-white py-2 px-5 rounded-lg transition-all"
        >
          Se Details
        </Link>
        <button className="bg-black text-white py-2 px-5 rounded-lg transition-all">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
