export default function Products({ products, addToCart, cart }) {
  return (
    <div className="grid md:grid-cols-3 gap-6 px-10">
      {products.map((p) => {
        const isAdded = cart.find((item) => item.id === p.id);

        return (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow-md p-6 relative"
          >
            {/* ICON */}
            <img src={p.icon} className="w-10 absolute top-4 left-4" />

            {/* TAG */}
            <span className="bg-purple-100 text-purple-600 text-xs px-3 py-1 rounded-full absolute top-4 right-4">
              {p.tagType}
            </span>

            <h2 className="text-lg font-bold mt-14">{p.name}</h2>
            <p className="text-gray-500 text-sm">{p.description}</p>

            <p className="text-xl font-bold mt-3">
              ${p.price}
              <span className="text-sm text-gray-400">/{p.period}</span>
            </p>

            <ul className="mt-3 text-sm">
              {p.features.map((f, i) => (
                <li key={i}>✔ {f}</li>
              ))}
            </ul>

            <button
  onClick={() => addToCart(p)}
  className={`w-full mt-5 py-2 rounded-full text-white ${
    isAdded
      ? "bg-green-500"
      : "bg-purple-600 hover:bg-purple-700"
  }`}
>
  {isAdded ? "✔ Added to cart" : "Buy Now"}
</button>
          </div>
        );
      })}
    </div>
  );
}