export default function Pricing() {
  return (
    <div className="py-20 bg-gray-50">

      {/* TITLE */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-3">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mb-12">
          Choose the perfect plan for your needs
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-8 px-10">

        {/* STARTER */}
        <div className="bg-white p-8 rounded-xl shadow-md text-left">
          <h3 className="font-semibold text-lg">Starter</h3>
          <p className="text-gray-500 mt-1">Perfect for getting started</p>

          <p className="text-4xl font-bold mt-4">$0</p>
          <p className="text-gray-400 mb-6">/Month</p>

          <ul className="space-y-2 text-sm text-gray-600">
  <li><span className="text-green-500 mr-2">✔</span>Access to 10 free tools</li>
  <li><span className="text-green-500 mr-2">✔</span>Basic templates</li>
  <li><span className="text-green-500 mr-2">✔</span>Community support</li>
</ul>

          <button className="mt-8 bg-purple-600 text-white w-full py-2 rounded-full hover:bg-purple-700">
            Get Started
          </button>
        </div>

        {/* PRO */}
        <div className="bg-purple-600 text-white p-8 rounded-xl shadow-lg relative text-left">

          {/* BADGE */}
          <span className="absolute left-1/2 -translate-x-1/2 -top-4 bg-yellow-400 text-black text-xs px-4 py-1 rounded-full font-semibold shadow">
            Most Popular
          </span>

          <h3 className="font-semibold text-lg mt-2">Pro</h3>
          <p className="mt-1">Best for professionals</p>

          <p className="text-4xl font-bold mt-4">$29</p>
          <p className="mb-6">/Month</p>

          <ul className="space-y-2 text-sm">
  <li><span className="text-white mr-2">✔</span>Access to all tools</li>
  <li><span className="text-white mr-2">✔</span>Premium templates</li>
  <li><span className="text-white mr-2">✔</span>Priority support</li>
</ul>

          <button className="mt-8 bg-white text-purple-600 w-full py-2 rounded-full font-semibold">
            Get Started
          </button>
        </div>

        {/* ENTERPRISE */}
        <div className="bg-white p-8 rounded-xl shadow-md text-left">
          <h3 className="font-semibold text-lg">Enterprise</h3>
          <p className="text-gray-500 mt-1">For large teams & companies</p>

          <p className="text-4xl font-bold mt-4">$99</p>
          <p className="text-gray-400 mb-6">/Month</p>

          <ul className="space-y-2 text-sm text-gray-600">
  <li><span className="text-green-500 mr-2">✔</span>Full access</li>
  <li><span className="text-green-500 mr-2">✔</span>Team features</li>
  <li><span className="text-green-500 mr-2">✔</span>Dedicated support</li>
</ul>

          <button className="mt-8 bg-purple-600 text-white w-full py-2 rounded-full hover:bg-purple-700">
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
}