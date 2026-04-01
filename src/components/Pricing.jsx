export default function Pricing() {
  return (
    <div className="py-20 bg-gray-50">
      
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 mt-2">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4 items-stretch">

        {/* Starter */}
        <div className="bg-white p-8 rounded-xl shadow border flex flex-col justify-between h-full">
          
          <div>
            <h3 className="font-bold text-lg">Starter</h3>
            <p className="text-gray-500 text-sm mb-4">
              Perfect for getting started
            </p>

            <h2 className="text-3xl font-bold mb-6">
              $0<span className="text-base font-normal text-gray-500">/Month</span>
            </h2>

            <ul className="text-sm space-y-3 mb-6">
              {[
                "Access to 10 free tools",
                "Basic templates",
                "Community support",
                "1 project per month",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckIcon color="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white">
            Get Started Free
          </button>
        </div>

        {/* PRO */}
        <div className="relative p-[2px] rounded-xl bg-gradient-to-r from-purple-500 to-purple-800 flex">
          <div className="bg-gradient-to-br from-purple-500 to-purple-800 text-white p-8 rounded-xl shadow-lg flex flex-col justify-between w-full">
            
            {/* Badge */}
            <span className="absolute top-[-12px] left-1/2 -translate-x-1/2 bg-yellow-400 text-xs px-3 py-1 rounded-full text-black">
              Most Popular
            </span>

            <div>
              <h3 className="font-bold text-lg">Pro</h3>
              <p className="text-sm mb-4 opacity-90">
                Best for professionals
              </p>

              <h2 className="text-3xl font-bold mb-6">
                $29<span className="text-base font-normal opacity-80">/Month</span>
              </h2>

              <ul className="text-sm space-y-3 mb-6">
                {[
                  "Access to all premium tools",
                  "Unlimited templates",
                  "Priority support",
                  "Unlimited projects",
                  "Cloud sync",
                  "Advanced analytics",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckIcon color="text-white-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full py-2 rounded-full bg-white text-purple-700 font-semibold">
              Start Pro Trial
            </button>
          </div>
        </div>

        {/* Enterprise */}
        <div className="bg-white p-8 rounded-xl shadow border flex flex-col justify-between h-full">
          
          <div>
            <h3 className="font-bold text-lg">Enterprise</h3>
            <p className="text-gray-500 text-sm mb-4">
              For teams and businesses
            </p>

            <h2 className="text-3xl font-bold mb-6">
              $99<span className="text-base font-normal text-gray-500">/Month</span>
            </h2>

            <ul className="text-sm space-y-3 mb-6">
              {[
                "Everything in Pro",
                "Team collaboration",
                "Custom integrations",
                "Dedicated support",
                "SLA guarantee",
                "Custom branding",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckIcon color="text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full py-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-white">
            Contact Sales
          </button>
        </div>

      </div>
    </div>
  );
}


/* ✅ CLEAN SVG CHECK ICON */
function CheckIcon({ color }) {
  return (
    <svg
      className={`w-5 h-5 ${color} flex-shrink-0`}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}