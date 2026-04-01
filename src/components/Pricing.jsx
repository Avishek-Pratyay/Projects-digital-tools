export default function Pricing() {
  return (
    <div className="py-20 bg-gray-50 text-center">

      <h2 className="text-3xl font-bold mb-10">
        Simple, Transparent Pricing
      </h2>
      
      

      <div className="grid md:grid-cols-3 gap-8 px-10">

        {/* BASIC */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold mb-2">Basic</h3>
          <p className="text-3xl font-bold">$0</p>
          <ul className="text-gray-500 mt-4 space-y-1">
            <li>✔ Free tools</li>
            <li>✔ Limited access</li>
          </ul>
          <button className="mt-6 border px-4 py-2 rounded">
            Get Started
          </button>
        </div>

        {/* PRO (HIGHLIGHTED) */}
        <div className="bg-purple-600 text-white p-6 rounded-xl shadow scale-105">
          <h3 className="font-bold mb-2">Pro</h3>
          <p className="text-3xl font-bold">$29</p>
          <ul className="mt-4 space-y-1">
            <li>✔ All tools</li>
            <li>✔ Premium features</li>
            <li>✔ Priority support</li>
          </ul>
          <button className="mt-6 bg-white text-purple-600 px-4 py-2 rounded">
            Get Started
          </button>
        </div>

        {/* ENTERPRISE */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="font-bold mb-2">Enterprise</h3>
          <p className="text-3xl font-bold">$99</p>
          <ul className="text-gray-500 mt-4 space-y-1">
            <li>✔ Full access</li>
            <li>✔ Team support</li>
          </ul>
          <button className="mt-6 border px-4 py-2 rounded">
            Contact Us
          </button>
        </div>

      </div>
    </div>
  );
}