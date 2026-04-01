import cartIcon from "/assets/shopping-cart.png";

export default function Navbar({ count }) {
  return (
    <div className="flex justify-between items-center px-10 py-4 bg-white shadow">

      {/* LEFT LOGO */}
      <h1 className="text-2xl font-bold text-purple-600">
        DigiTools
      </h1>

      {/* CENTER MENU */}
      <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
        <li className="hover:text-purple-600 cursor-pointer">Products</li>
        <li className="hover:text-purple-600 cursor-pointer">Features</li>
        <li className="hover:text-purple-600 cursor-pointer">Pricing</li>
        <li className="hover:text-purple-600 cursor-pointer">Testimonials</li>
        <li className="hover:text-purple-600 cursor-pointer">FAQ</li>
      </ul>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-6">

        {/* CART */}
        <div className="relative cursor-pointer">
          <img src={cartIcon} className="w-6" />
          <span className="absolute -top-2 -right-2 bg-purple-600 text-white px-2 text-xs rounded-full">
            {count}
          </span>
        </div>

        {/* LOGIN */}
        <button className="text-gray-600 hover:text-purple-600">
          Login
        </button>

        {/* GET STARTED */}
        <button className="bg-purple-600 text-white px-4 py-2 rounded-full">
          Get Started
        </button>

      </div>
    </div>
  );
}