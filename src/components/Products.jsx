import productData from "../data/products.json"; // your JSON file
import { toast } from "react-toastify";

export default function Products() {
  const addToCart = (product) => {
    // implement add to cart logic here
    toast.success(`${product.name} added to cart`);
  };

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {productData.map((p) => (
        <div
          key={p.id}
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition relative"
        >
          {/* ICON - TOP LEFT */}
          <img src={p.icon} className="w-10 absolute top-4 left-4" />

          {/* TAG - TOP RIGHT */}
          <span className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full absolute top-4 right-4">
            {p.tagType}
          </span>

          {/* TITLE */}
          <h2 className="text-lg font-bold mt-14">{p.name}</h2>

          {/* DESCRIPTION */}
          <p className="text-gray-500 text-sm mt-1">{p.description}</p>

          {/* PRICE */}
          <p className="text-xl font-bold mt-3">
            ${p.price}
            <span className="text-sm text-gray-400">/{p.period}</span>
          </p>

          {/* FEATURES */}
          <ul className="mt-3 space-y-1 text-sm text-gray-600">
            {p.features.map((f, i) => (
              <li key={i}>✔ {f}</li>
            ))}
          </ul>

          {/* BUTTON */}
          <button
            onClick={() => addToCart(p)}
            className="w-full mt-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-full"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
}