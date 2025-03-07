import { scheduleItems } from "../data/clubData";

export default function Schedule() {
  return (
    <div className="py-24 bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
          Club Schedule
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Join us for these weekly events. All skill levels are welcome!
        </p>

        <div className="max-w-3xl mx-auto stagger-children">
          <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-700">
            {scheduleItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row p-8 md:items-center backdrop-blur-sm hover:bg-gray-800/80 transition duration-300 ${
                  index !== scheduleItems.length - 1
                    ? "border-b border-gray-700"
                    : ""
                }`}
              >
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <h3 className="font-bold text-emerald-400 text-lg">
                    {item.day}
                  </h3>
                  <p className="text-gray-400">{item.time}</p>
                </div>

                <div className="md:w-2/4 mb-4 md:mb-0">
                  <h4 className="font-semibold text-blue-300">{item.event}</h4>
                  <p className="text-gray-400">{item.location}</p>
                </div>

                <div className="md:w-1/4 md:text-right">
                  <button className="px-4 py-2 bg-emerald-600 text-white text-sm font-medium rounded-lg hover:bg-emerald-500 transition duration-300 shadow-[0_0_10px_rgba(16,185,129,0.3)] hover:shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                    RSVP
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Can't make these times? We also have open courts available daily.
            </p>
            <button className="px-6 py-3 border border-blue-500 text-blue-400 font-medium rounded-lg hover:bg-blue-500/10 transition duration-300 backdrop-blur-sm">
              View Full Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
