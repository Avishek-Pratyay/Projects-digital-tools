export default function Cart({ cart, removeFromCart, checkout }) {
  if (cart.length === 0) {
    return <p className="text-center text-gray-500">Cart is empty</p>;
  }

  return (
    <div className="max-w-xl mx-auto">
      {cart.map((item) => (
        <div className="flex justify-between items-center border p-4 mb-2 rounded">
          <div className="flex gap-3 items-center">
            <img src={item.icon} className="w-10" />
            <p>{item.name}</p>
          </div>

          <div>
            <span>${item.price}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-3 text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={checkout}
        className="bg-green-500 text-white w-full py-2 mt-4 rounded"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}