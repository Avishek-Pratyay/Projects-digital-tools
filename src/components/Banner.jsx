import playIcon from "/assets/play.png";

export default function Banner() {
  return (
    <div className="bg-gray-100 px-10 py-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="max-w-xl">

          {/* BADGE */}
          <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
            New: AI-Powered Tools Available
          </span>

          {/* HEADING */}
          <h1 className="text-5xl font-bold mt-4 leading-tight">
            Supercharge Your <br />
            Digital Workflow
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-500 mt-4">
            Access premium AI tools, design assets, templates, and productivity
            software — all in one place. Start creating faster today.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-6">

            {/* PRIMARY BUTTON */}
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full">
              Explore Products
            </button>

            {/* SECONDARY BUTTON */}
            <button className="flex items-center gap-2 border px-6 py-2 rounded-full">
              <img src={playIcon} className="w-4" />
              Watch Demo
            </button>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src="/assets/banner.png"
            className="w-[400px] md:w-[450px] rounded-lg"
          />
        </div>

      </div>
    </div>
  );
}