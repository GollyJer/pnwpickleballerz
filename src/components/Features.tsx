import { clubFeatures } from "../data/clubData";

export default function Features() {
  return (
    <div className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
          Club Features
        </h2>
        <p className="text-center mb-12 text-gray-400 max-w-2xl mx-auto">
          Everything you need to enjoy the fastest growing sport in America
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
          {clubFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-[0_4px_20px_rgba(31,41,55,0.5)] backdrop-blur-sm hover:shadow-[0_4px_20px_rgba(16,185,129,0.2)] transition duration-300 ease-in-out transform hover:-translate-y-1 group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition duration-300 text-emerald-400 opacity-85">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-emerald-300 mb-2 group-hover:text-emerald-200 transition">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
            <div className="relative">
              <img
                src="/pickleballCourt.svg"
                alt="Pickleball Court"
                className="w-full max-w-2xl rounded-lg border border-gray-700 bg-gray-800/50 backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
