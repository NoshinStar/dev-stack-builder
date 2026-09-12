export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Build Your Ideal{" "}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            
             <a href="#technologies"
              className="bg-brand-gradient text-white font-medium px-6 py-3 rounded-lg"
            >
              Explore Technologies
            </a>
            
             <a href="#about"
              className="border border-gray-300 text-gray-700 font-medium px-6 py-3 rounded-lg"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right: banner image */}
        <div className="flex justify-center">
          <img
            src="/src/assets/banner-stack.png"
            alt="Development stack illustration"
            className="w-64 md:w-80"
          />
        </div>
      </div>
    </section>
  );
}