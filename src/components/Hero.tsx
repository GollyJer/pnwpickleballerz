import { clubInfo } from "../data/clubData";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-900 pb-16 pt-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h1 className="font-bold text-5xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
              {clubInfo.name}
            </h1>
            <p className="text-xl md:text-2xl text-blue-300 mb-6">
              {clubInfo.tagline}
            </p>
            {/* <p className="text-gray-300 mb-8 max-w-lg">
              {clubInfo.description}
            </p> */}
            {/* <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:bg-emerald-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-[0_0_20px_rgba(16,185,129,0.6)]">
                Join Our Club
              </button>
              <button className="px-6 py-3 border border-blue-500 text-blue-400 font-medium rounded-lg hover:bg-blue-900/30 transition duration-300 ease-in-out transform hover:scale-105 backdrop-blur-sm">
                View Schedule
              </button>
            </div> */}
          </div>
          <div className="flex justify-center">
            <img
              src="/pnwpickleballerz_logo.jpeg"
              alt="PNW Pickleballerz Logo"
              className="w-full max-w-md h-auto animate-float drop-shadow-[0_0_15px_rgba(16,185,129,0.6)] rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Modern decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-screen bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-screen bg-gradient-to-t from-blue-500/10 to-transparent blur-3xl pointer-events-none"></div>

      {/* Geometric shapes */}
      <div className="absolute top-1/4 left-10 w-16 h-16 border border-emerald-500/30 rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-24 h-24 border border-blue-500/30 rounded-full animate-pulse pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-emerald-500/10 rounded-sm rotate-45 animate-float pointer-events-none"></div>
    </div>
  );
}
