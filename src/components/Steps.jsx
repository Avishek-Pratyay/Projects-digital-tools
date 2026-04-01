import userIcon from "/assets/user.png";
import playIcon from "/assets/package.png";
import rocketIcon from "/assets/rocket.png";

export default function Steps() {
  return (
    <div className="py-20 bg-white text-center">

      <h2 className="text-3xl font-bold mb-3">Get Started in 3 Steps</h2>
      <p className="text-gray-500 mb-10">Start using premium digital tools in minutes,not hours.</p>

      <div className="grid md:grid-cols-3 gap-8 px-10">

        {/* STEP 1 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow relative">
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">01</div>
          <div className="bg-purple-100 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
            <img src={userIcon} className="w-6" />
          </div>
          <h3 className="font-bold">Create Account</h3>
          <p className="text-gray-500 text-sm mt-2">Sign up for free in seconds.No credit card required to get started.</p>
        </div>

        {/* STEP 2 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow relative">
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">02</div>
          <div className="bg-purple-100 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
            <img src={playIcon} className="w-6" />
          </div>
          <h3 className="font-bold">Choose Products</h3>
          <p className="text-gray-500 text-sm mt-2">Browse our catalog and select the tools that fit your needs.</p>
        </div>

        {/* STEP 3 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow relative">
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-sm">03</div>
          <div className="bg-purple-100 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
            <img src={rocketIcon} className="w-6" />
          </div>
          <h3 className="font-bold">Start Creating</h3>
          <p className="text-gray-500 text-sm mt-2">Download and start using your premium tools immediately.</p>
        </div>

      </div>
    </div>
  );
}