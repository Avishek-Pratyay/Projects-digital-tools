export default function Pricing() {
  return (
    <div className="bg-gray-100 py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">Pricing</h2>

      <div className="grid md:grid-cols-3 gap-6 px-10">
        <div className="border p-6 rounded">Free</div>
        <div className="border p-6 rounded bg-purple-600 text-white">
          Pro - $29
        </div>
        <div className="border p-6 rounded">Enterprise</div>
      </div>
    </div>
  );
}