import { useState } from "react";
import Products from "./Products";
import Cart from "./Cart";

export default function ToggleSection(props) {
  const [view, setView] = useState("products");

  return (
    <div className="my-10">
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setView("products")}
          className={`px-6 py-2 rounded ${
            view === "products"
              ? "bg-purple-600 text-white"
              : "border"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setView("cart")}
          className={`px-6 py-2 rounded ${
            view === "cart"
              ? "bg-purple-600 text-white"
              : "border"
          }`}
        >
          Cart
        </button>
      </div>

      {view === "products" ? (
        <Products {...props} />
      ) : (
        <Cart {...props} />
      )}
    </div>
  );
}