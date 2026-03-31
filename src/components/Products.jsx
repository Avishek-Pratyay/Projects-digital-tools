export default function Products({ products, addToCart }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 px-10">
      {products.map((p) => (
        <div
          key={p.id}
          className="border rounded-xl p-5 shadow hover:shadow-lg transition"
        >
          <span className="bg-purple-100 text-purple-600 px-2 py-1 text-xs rounded">
            {p.tagType}
          </span>

          <img src={p.icon} className="w-12 my-3" />

          <h2 className="font-bold text-lg">{p.name}</h2>
          <p className="text-gray-500 text-sm">{p.description}</p>

          <p className="text-purple-600 font-bold mt-2">
            ${p.price} / {p.period}
          </p>

          <ul className="text-sm mt-2 space-y-1">
            {p.features.map((f, i) => (
              <li key={i}>✔ {f}</li>
            ))}
          </ul>

          <button
            onClick={() => addToCart(p)}
            className="bg-purple-600 text-white w-full mt-4 py-2 rounded"
          >
            Buy Now
          </button>
        </div>
      ))}
    </div>
  );
}