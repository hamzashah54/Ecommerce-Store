import { useEffect, useState } from "react";
import { useCart } from "../contexts/cart-context";

export default function SearchResults({ searchQuery }) {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setProducts(filtered);
      });
  }, [searchQuery]);

  return (
    <section className="w-full py-10 bg-[#fffdf0]">
      <div className="w-[90%] sm:w-[85%] max-w-7xl mx-auto mb-6 sm:mb-8">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#0c1c3a] mb-2">
          Products Detail
        </h2>
        <p className="text-gray-600 mb-4">
          {products.length} results found for{" "}
          <span className="font-semibold text-yellow-500">{searchQuery}</span>
        </p>
      </div>

      {/* Product Grid (3 x 3) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[85%] max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-lg shadow hover:shadow-lg overflow-hidden group"
          >
            {/* Badge */}
            <span className="absolute top-2 left-2 bg-black text-yellow-400 text-xs font-bold px-3 py-0.5 rounded">
              SALE
            </span>

            {/* Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-contain bg-[#1E2A38] p-6"
            />

            {/* Hover Buttons */}
            <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
              <button className="bg-white p-2 rounded-full shadow hover:bg-yellow-400 hover:text-white">
                ❤
              </button>
              <button
                onClick={() => addToCart(product)}
                className="bg-white p-2 rounded-full shadow hover:bg-yellow-400 hover:text-white"
              >
                🛒
              </button>
              <button className="bg-white p-2 rounded-full shadow hover:bg-yellow-400 hover:text-white">
                🔍
              </button>
            </div>

            {/* Details */}
            <div className="p-4 text-center bg-[#0c1c3a]">
              <h3 className="text-md font-semibold text-white mb-2 line-clamp-2">
                {product.title}
              </h3>
              <div className="flex justify-center items-center gap-2">
                <span className="text-green-600 font-bold text-lg">
                  ${product.price}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  ${(product.price + 50).toFixed(0)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}