export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-gray-100">
      <div>
        <h1 className="text-5xl font-bold mb-4">
          Supercharge Your Digital Workflow
        </h1>
        <p className="text-gray-500 mb-6">
          Discover powerful tools to boost productivity and growth.
        </p>

        <div className="flex gap-4">
          <button className="bg-purple-600 text-white px-6 py-2 rounded">
            Get Started
          </button>
          <button className="border px-6 py-2 rounded">
            Explore Tools
          </button>
        </div>
      </div>

      <img src="/assets/banner.png" className="w-96 mt-6 md:mt-0" />
    </div>
  );
}