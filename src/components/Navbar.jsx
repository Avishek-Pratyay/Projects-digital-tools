import cartIcon from "/assets/shopping-cart.png";

export default function Navbar({ count }) {
  return (
    <div className="flex justify-between items-center px-10 py-4 shadow bg-white">
      <h1 className="text-2xl font-bold text-purple-600">DigiTools</h1>

      <div className="relative">
        <img src={cartIcon} className="w-7" />
        <span className="absolute -top-2 -right-2 bg-purple-600 text-white px-2 rounded-full text-xs">
          {count}
        </span>
      </div>
    </div>
  );
}