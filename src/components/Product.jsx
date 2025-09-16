import { useEffect, useState } from "react"
import { useCart } from "../contexts/cart-context"

export default function Products() {
  const [products, setProducts] = useState([])
  const [filter, setFilter] = useState("All")
  const { addToCart } = useCart()

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err))
  }, [])

  const filtered =
    filter === "All" ? products : products.filter((p) => p.category.toLowerCase().includes(filter.toLowerCase()))

  return (
    <section className="w-full py-6 sm:py-8 lg:py-12">
      <div className="w-[90%] sm:w-[85%] lg:w-[80%] max-w-6xl mx-auto text-center mb-6 sm:mb-8 px-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2 text-[#0c1c3a]">Product Overview</h2>
        <p className="text-[#0c1c3a] text-sm sm:text-base">Check out most promising products bought by our buyers</p>
      </div>

      <div className="flex justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 flex-wrap px-4">
        {["All", "Men", "Women", "Electronics", "Jewelery"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border text-xs sm:text-sm font-medium transition ${
              filter === cat
                ? "bg-yellow-400 text-black border-yellow-400"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-[90%] sm:w-[85%] lg:w-[80%] max-w-6xl mx-auto px-4">
        {filtered.slice(0, 6).map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-lg shadow hover:shadow-lg overflow-hidden group transition-shadow"
          >
            {/* Badge */}
            <span className="absolute top-2 left-2 bg-black text-yellow-400 text-xs font-bold px-2 sm:px-3 py-0.5 rounded z-10">
              SALE
            </span>

            {/* Image */}
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="w-full h-32 sm:h-40 md:h-48 object-contain bg-[#1E2A38] p-3 sm:p-4"
            />

            {/* Hover Buttons */}
            <div className="absolute top-2 right-2 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <button className="bg-white p-1.5 rounded-full shadow hover:bg-yellow-400 hover:text-white text-sm transition-colors">
                ❤
              </button>

              <button
                onClick={() => addToCart(product)}
                className="bg-white p-1.5 rounded-full shadow hover:bg-yellow-400 hover:text-white text-sm transition-colors"
              >
                🛒
              </button>

              <button className="bg-white p-1.5 rounded-full shadow hover:bg-yellow-400 hover:text-white text-sm transition-colors">
                🔍
              </button>
            </div>

            {/* Details */}
            <div className="p-3 sm:p-4 text-center bg-[#0c1c3a]">
              <h3 className="text-xs sm:text-sm font-semibold text-white text-left mb-2 line-clamp-2 min-h-[2.5rem]">
                {product.title}
              </h3>
              <div className="flex justify-start items-center gap-2">
                <span className="text-green-400 font-bold text-base sm:text-lg">${product.price}</span>
                <span className="text-gray-400 line-through text-xs sm:text-sm">
                  ${(product.price + 50).toFixed(0)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}