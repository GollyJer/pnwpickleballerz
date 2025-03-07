import "./App.css";
import "./animations.css";
import Hero from "./components/Hero";
// Commented sections don't need these imports
// import Features from "./components/Features";
// import Testimonials from "./components/Testimonials";
// import Schedule from "./components/Schedule";
import Footer from "./components/Footer";
// import ReclubInstructionsMarkdown from "./components/ReclubInstructionsMarkdown";
import ReclubInstructions from "./components/ReclubInstructions";

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Main content */}
      <Hero />
      {/* <Features />
      <Testimonials />
      <Schedule /> */}

      {/* Tournament Setup Instructions */}
      <ReclubInstructions />

      {/* Call to action section */}
      {/* <div className="py-20 bg-gradient-to-r from-emerald-800 to-emerald-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-emerald-300">
            Ready to join the fun?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-emerald-100">
            Become a member today and join our vibrant community of pickleball enthusiasts!
          </p>
          <button className="px-8 py-4 bg-emerald-500 text-gray-900 text-lg font-bold rounded-lg shadow-[0_0_15px_rgba(52,211,153,0.5)] hover:bg-emerald-400 transition duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(52,211,153,0.7)]">
            Sign Up Now
          </button>
        </div>
      </div> */}

      <Footer />
    </div>
  );
}

export default App;
