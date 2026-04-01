import userIcon from "/assets/user.png";
import playIcon from "/assets/play.png";
import rocketIcon from "/assets/rocket.png";

export default function Steps() {
  return (
    <div className="py-20 bg-white text-center">

      {/* TITLE */}
      <h2 className="text-3xl font-bold mb-3">
        Get Started in 3 Steps
      </h2>

      <p className="text-gray-500 mb-10">
        Start using our tools in just a few simple steps
      </p>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8 px-10">

        {/* STEP 1 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <div className="bg-purple-100 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
            <img src={userIcon} className="w-6" />
          </div>
          <h3 className="font-bold">Create Account</h3>
          <p className="text-gray-500 text-sm mt-2">
            Sign up quickly and get access to all tools.
          </p>
        </div>

        {/* STEP 2 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <div className="bg-purple-100 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
            <img src={playIcon} className="w-6" />
          </div>
          <h3 className="font-bold">Choose Products</h3>
          <p className="text-gray-500 text-sm mt-2">
            Browse and select the tools you need.
          </p>
        </div>

        {/* STEP 3 */}
        <div className="bg-gray-50 p-6 rounded-xl shadow">
          <div className="bg-purple-100 w-14 h-14 flex items-center justify-center rounded-full mx-auto mb-4">
            <img src={rocketIcon} className="w-6" />
          </div>
          <h3 className="font-bold">Start Using</h3>
          <p className="text-gray-500 text-sm mt-2">
            Boost your workflow instantly.
          </p>
        </div>

      </div>
    </div>
  );
}