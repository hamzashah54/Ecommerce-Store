import { useState } from "react";
import { useCart } from "../contexts/cart-context";
import CheckoutModal from "./CheckoutModal";

export default function CartSidebar({ isOpen, onClose }) {
  const { cart, removeFromCart, updateQuantity, getSubtotal } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <>
      {/* Overlay background */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-96 md:w-[400px] bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 sm:p-6 border-b">
          <h2 className="text-lg sm:text-xl font-bold text-[#0c1c3a]">
            Shopping Cart
          </h2>
          <button
            onClick={onClose}
            className="text-white bg-[#0c1c3a] w-8 h-8 flex items-center justify-center rounded-full hover:bg-opacity-80 transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="p-4 sm:p-6 flex flex-col gap-3 sm:gap-4 overflow-y-auto h-[calc(100vh-200px)] sm:h-[70%]">
          {cart.length === 0 ? (
            <p className="text-gray-500 text-center py-8">Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center border rounded-lg p-3 sm:p-4 gap-3 bg-gray-50"
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm sm:text-base line-clamp-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">${item.price}</p>
                  {/* Quantity Controls */}
                  <div className="flex items-center border rounded-md w-24 sm:w-28 justify-between bg-white">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 py-1 text-[#0c1c3a] hover:bg-[#0c1c3a] hover:text-white transition-colors text-sm"
                    >
                      -
                    </button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 py-1 text-[#0c1c3a] hover:bg-[#0c1c3a] hover:text-white transition-colors text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors p-2 flex-shrink-0"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 sm:p-6 border-t bg-gray-50">
            <div className="flex justify-between font-semibold mb-3 sm:mb-4 text-lg">
              <span>Subtotal</span>
              <span>${getSubtotal().toFixed(2)}</span>
            </div>
            <button
              onClick={() => setIsCheckoutOpen(true)}
              className="w-full bg-[#0c1c3a] text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors font-medium"
            >
              Proceed to Checkout
            </button>
            <p className="text-center text-[#8E8E93] text-xs sm:text-sm mt-3">
              Shipping, Tax & Discount calculated at Checkout
            </p>
            <CheckoutModal
              isOpen={isCheckoutOpen}
              onClose={() => setIsCheckoutOpen(false)}
            />
          </div>
        )}
      </div>
    </>
  );
}
