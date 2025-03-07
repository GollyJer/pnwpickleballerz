import { testimonials } from "../data/clubData";

export default function Testimonials() {
  return (
    <div className="py-24 bg-gray-950 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
          What Our Members Say
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our amazing community has
          to say about the PNW Pickleballerz experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-children">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-8 border border-gray-800 shadow-[0_10px_25px_-15px_rgba(16,185,129,0.2)] hover:shadow-[0_10px_25px_-5px_rgba(16,185,129,0.3)] transition-all duration-300 ease-in-out transform hover:-translate-y-1 backdrop-blur-sm"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white font-bold mr-4 shadow-lg">
                  {testimonial.name
                    .split(" ")
                    .map((name) => name[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-sm">
                        {i < testimonial.rating ? "★" : "☆"}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <blockquote className="relative text-gray-300 pl-4 border-l-2 border-emerald-500">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
