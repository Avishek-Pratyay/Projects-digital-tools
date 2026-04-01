export default function Cart({ cart, removeFromCart, checkout }) {
  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">

      <h3 className="text-lg font-bold mb-4">Your Cart</h3>

      {cart.length === 0 ? (
        <p className="text-gray-500">No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="flex justify-between items-center bg-gray-100 p-3 rounded mb-2">
              <div className="flex items-center gap-3">
                <img src={item.icon} className="w-8" />
                <p>{item.name}</p>
              </div>

              <div>
                <span>${item.price}</span>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4 text-red-500 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* TOTAL */}
          <div className="flex justify-between mt-4 font-bold">
            <span>Total</span>
            <span>
              $
              {cart.reduce((total, item) => total + item.price, 0)}
            </span>
          </div>

          {/* BUTTON */}
          <button
            onClick={checkout}
            className="w-full mt-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-full"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
}