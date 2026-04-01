export default function Stats() {
  return (
    <div className="bg-purple-600 text-white py-10">

      <div className="grid grid-cols-3 text-center items-center relative">

        {/* ITEM 1 */}
        <div className="relative">
          <h2 className="text-2xl font-bold">50K+</h2>
          <p>Active Users</p>

          {/* DIVIDER */}
          <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-white/50 text-2xl">
            |
          </span>
        </div>

        {/* ITEM 2 */}
        <div className="relative">
          <h2 className="text-2xl font-bold">200+</h2>
          <p>Premium Tools</p>

          {/* DIVIDER */}
          <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-white/50 text-2xl">
            |
          </span>
        </div>

        {/* ITEM 3 */}
        <div>
          <h2 className="text-2xl font-bold">4.9</h2>
          <p>Rating</p>
        </div>

      </div>

    </div>
  );
}