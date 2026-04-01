export default function Cart({ cart, removeFromCart, checkout }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return <p className="text-center text-gray-500">Cart is empty</p>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">

      {cart.map((item, index) => (
        <div
          key={index}
          className="flex justify-between items-center border-b py-3"
        >
          <div className="flex gap-3 items-center">
            <img src={item.icon} className="w-8" />
            <p>{item.name}</p>
          </div>

          <div>
            <span>${item.price}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-4 text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* TOTAL */}
      <div className="flex justify-between mt-6 font-bold">
        <span>Total:</span>
        <span>${total}</span>
      </div>

      {/* CHECKOUT */}
      <button
        onClick={checkout}
        className="w-full mt-4 bg-purple-600 text-white py-2 rounded-full"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}