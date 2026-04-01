export default function CTA() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-16">

      <h2 className="text-3xl font-bold">
        Ready To Transform Your Workflow?
      </h2>

      <p className="mt-3">
        Join thousands of professionals who are already using DigiTools to work smarter.
      </p>
      <p className="mt-3">
        Start your free trial today.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <button className="bg-white text-purple-600 px-6 py-2 rounded-full">
          Explore Products
        </button>
        <button className="border px-6 py-2 rounded-full">
          View Pricing
        </button>
      </div>
      <p className="mt-3">
        14-day free trials • No credit card required • Cancel anytime
      </p>

    </div>
  );
}