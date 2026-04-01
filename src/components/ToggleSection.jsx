import { useState } from "react";
import Products from "./Products";
import Cart from "./Cart";

export default function ToggleSection(props) {
  const [view, setView] = useState("products");

  return (
    <div className="py-16 bg-gray-50">

      {/* TITLE */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">
          Premium Digital Tools
        </h2>
        <p className="text-gray-500 mt-2">
          Choose from our curated collection of premium tools designed
          to boost your productivity and creativity.
        </p>
      </div>

      {/* TOGGLE BUTTONS */}
      <div className="flex justify-center gap-3 mb-10">
        <button
          onClick={() => setView("products")}
          className={`px-5 py-2 rounded-full text-sm ${
            view === "products"
              ? "bg-purple-600 text-white"
              : "bg-white border"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setView("cart")}
          className={`px-5 py-2 rounded-full text-sm ${
            view === "cart"
              ? "bg-purple-600 text-white"
              : "bg-white border"
          }`}
        >
          Cart ({props.cart.length})
        </button>
      </div>

      {/* CONTENT */}
      {view === "products" ? (
        <Products {...props} />
      ) : (
        <Cart {...props} />
      )}
    </div>
  );
}