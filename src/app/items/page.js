import ProductCard from "@/components/ProductCard";

const ItemsPage = async () => {
  const res = await fetch("http://localhost:5000/meals", {
    cache: "no-store",
  });
  const items = await res.json();

  //   console.log(items);
  return (
    <div className="py-2">
      <h1 className="text-center text-5xl">All Items</h1>

      <div className="grid grid-cols-3 gap-8  w-[90%] mx-auto mt-10">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ItemsPage;
