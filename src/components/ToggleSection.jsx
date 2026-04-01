import { useState } from "react";
import Products from "./Products";
import Cart from "./Cart";

export default function ToggleSection({
  products,
  cart,
  addToCart,
  removeFromCart,
  checkout,
}) {
  const [view, setView] = useState("products");

  return (
    <div className="py-20 bg-gray-50">

      {/* BUTTONS */}
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setView("products")}
          className={`px-4 py-2 rounded ${
            view === "products" ? "bg-purple-600 text-white" : "bg-white border"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setView("cart")}
          className={`px-4 py-2 rounded ${
            view === "cart" ? "bg-purple-600 text-white" : "bg-white border"
          }`}
        >
          Cart ({cart.length})
        </button>
      </div>

      {/* PARAGRAPH */}
      {view === "products" && (
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-gray-500 text-lg">
            Choose from our curated collection of premium digital products designed.
          </p>
          <p className="text-gray-500 text-lg mt-2">
            To boost your productivity and creativity.
          </p>
        </div>
      )}

      {/* CONTENT */}
      {view === "products" ? (
        <Products products={products} addToCart={addToCart} cart={cart} />
      ) : (
        <Cart cart={cart} removeFromCart={removeFromCart} checkout={checkout} />
      )}
    </div>
  );
}