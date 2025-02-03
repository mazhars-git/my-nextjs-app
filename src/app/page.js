import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import React from "react";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/meals", {
    next: {
      revalidate: 5,
    },
  });
  //   console.log(res);

  const products = await res.json();
  return (
    <div>
      <h1 className="text-5xl text-center">
        Data Fetching, Caching, and Revalidating
      </h1>
      <div className="grid grid-cols-3 gap-8  w-[90%] mx-auto mt-10">
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="text-center">
        <Link
          href={`/items`}
          className="bg-black text-white py-2 px-5 rounded-lg transition-all"
        >
          Se More
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
