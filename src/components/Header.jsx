import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../contexts/cart-context";
import CartSidebar from "./CartSidebar";
import { Search } from "lucide-react";

export function Header({
  isLoggedIn,
  setIsLoggedIn,
  tempQuery,
  setTempQuery,
  handleSearchSubmit,
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();
  const { getTotalItems } = useCart();

  function handleIconClick() {
    if (isLoggedIn) {
      setShowDropdown(!showDropdown);
    } else {
      navigate("/login");
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setShowDropdown(false);
  }

  return (
    <>
      <header className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 min-h-[70px] sm:h-[80px] shadow-md bg-[#0c1c3a] text-yellow-400 relative z-50">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <div className="flex justify-center items-center">
            <h1 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold">
              HS
            </h1>
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold">
              -Store
            </span>
          </div>
        </Link>

        {/* Desktop Navbar Links - Hidden on mobile */}
        <ul className="hidden lg:flex gap-4 xl:gap-6 text-white font-medium">
          <li className="hover:text-yellow-400 cursor-pointer transition-colors">
            Mens
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition-colors">
            Womens
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition-colors">
            Kids
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition-colors">
            Winter
          </li>
          <li className="hover:text-yellow-400 cursor-pointer transition-colors">
            Lifestyle
          </li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Search Box */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center gap-1 sm:gap-2"
          >
            <input
              type="text"
              placeholder="Search"
              value={tempQuery}
              onChange={(e) => setTempQuery(e.target.value)}
              className="w-32 mr-1 sm:w-32 md:w-40 lg:w-48 px-2 sm:px-3 py-1.5 sm:py-2 text-sm rounded-lg border border-gray-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-yellow-400 text-black w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-black hover:text-yellow-400 transition-colors"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </form>

          {/* User Icon */}
          <div className="relative">
            <button
              onClick={handleIconClick}
              className="flex items-center justify-center bg-yellow-400 text-black w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-black hover:text-yellow-400 transition-colors"
            >
              <i className="fa-solid fa-user text-sm sm:text-base"></i>
            </button>

            {isLoggedIn && showDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative flex items-center justify-center bg-yellow-400 text-black w-8 h-8 sm:w-10 sm:h-10 rounded-full hover:bg-black hover:text-yellow-400 transition-colors"
          >
            <i className="fa-solid fa-cart-shopping text-sm sm:text-base"></i>
            {getTotalItems() > 0 && (
              <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-red-500 text-white text-xs w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded-full">
                {getTotalItems()}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
