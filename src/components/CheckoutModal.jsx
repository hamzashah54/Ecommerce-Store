import { useState } from "react";
import { useCart } from "../contexts/cart-context";

export default function CheckoutModal({ isOpen, onClose }) {
  const { clearCart } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    payment: "cod",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    clearCart();
    onClose();
    alert("✅ Order Placed Successfully!");
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-2 sm:px-4">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg relative">
        {/* Header */}
        <div className="flex justify-between items-center p-3 sm:p-4 border-b">
          <h2 className="text-base sm:text-lg font-bold text-[#0c1c3a]">
            Checkout
          </h2>
          <button
            onClick={onClose}
            className="text-white bg-[#0c1c3a] w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center rounded-full text-sm sm:text-base"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="p-4 sm:p-6 space-y-3 sm:space-y-4"
        >
          <input
            type="text"
            required
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-sm sm:text-base"
          />
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-sm sm:text-base"
          />
          <input
            type="tel"
            required
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-sm sm:text-base"
          />
          <input
            type="text"
            required
            name="address"
            placeholder="Full Address"
            value={form.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-sm sm:text-base"
          />
          <input
            type="text"
            required
            name="city"
            placeholder="City"
            value={form.city}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md text-sm sm:text-base"
          />

          {/* Payment */}
          <h1 className="text-base sm:text-lg text-[#0c1c3a] pl-1">Payment</h1>
          <div className="flex items-center gap-2 pl-1">
            <input
              type="radio"
              id="cod"
              name="payment"
              value="cod"
              checked={form.payment === "cod"}
              onChange={handleChange}
            />
            <label
              htmlFor="cod"
              className="text-[#0c1c3a] font-medium text-sm sm:text-base"
            >
              Cash on Delivery
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#0c1c3a] text-white py-2 sm:py-3 rounded hover:opacity-90 transition text-sm sm:text-base"
          >
            Complete Order
          </button>
        </form>
      </div>
    </div>
  );
}
