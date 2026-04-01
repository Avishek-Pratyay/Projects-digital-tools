export default function Products({ products, addToCart }) {
  return (
    <div className="grid md:grid-cols-3 gap-8 px-10">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition"
        >

          {/* TAG */}
          <span className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full">
            {p.tagType}
          </span>

          {/* ICON */}
          <img src={p.icon} className="w-12 mt-4 mb-3" />

          {/* TITLE */}
          <h2 className="text-lg font-bold">{p.name}</h2>

          {/* DESCRIPTION */}
          <p className="text-gray-500 text-sm mt-1">
            {p.description}
          </p>

          {/* PRICE */}
          <p className="text-xl font-bold mt-3">
            ${p.price}
            <span className="text-sm text-gray-400">
              /{p.period}
            </span>
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