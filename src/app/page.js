import ProductCard from "@/components/ProductCard";
import React from "react";

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/posts");
  const products = await res.json();
  return (
    <div>
      <h1>Data Fetching, Caching, and Revalidating</h1>
      <div className="grid grid-col-3 gap-8  w-[90%]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
