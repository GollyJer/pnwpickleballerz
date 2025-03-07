import { clubInfo } from "../data/clubData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-300 py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/*  <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/pickleballLogo.svg"
              alt="PNW Pickleballerz Logo"
              className="w-32 h-32 mb-6 drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]"
            />
            <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
              {clubInfo.name}
            </h3>
            <p className="mb-4 text-gray-400">{clubInfo.tagline}</p>
            <p className="text-gray-500">
              Established {clubInfo.founded} in {clubInfo.location}
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300"
                >
                  Schedule
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300"
                >
                  Membership
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 transition duration-300"
                >
                  Tournaments
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-gradient-to-r from-emerald-500 to-transparent"></span>
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center group">
                <span className="mr-3 text-emerald-500 group-hover:scale-110 transition duration-300">
                  📍
                </span>
                <span className="group-hover:text-emerald-400 transition duration-300">
                  {clubInfo.location}
                </span>
              </li>
              <li className="flex items-center group">
                <span className="mr-3 text-emerald-500 group-hover:scale-110 transition duration-300">
                  ✉️
                </span>
                <a
                  href={`mailto:${clubInfo.email}`}
                  className="hover:text-emerald-400 transition duration-300"
                >
                  {clubInfo.email}
                </a>
              </li>
              <li className="flex items-center group">
                <span className="mr-3 text-emerald-500 group-hover:scale-110 transition duration-300">
                  📱
                </span>
                <span className="group-hover:text-emerald-400 transition duration-300">
                  (555) 123-4567
                </span>
              </li>
            </ul>

            <div className="mt-8 flex space-x-6">
              <a
                href="#"
                className="text-2xl text-gray-400 hover:text-emerald-400 transition duration-300 transform hover:scale-110"
              >
                📱
              </a>
              <a
                href="#"
                className="text-2xl text-gray-400 hover:text-emerald-400 transition duration-300 transform hover:scale-110"
              >
                📘
              </a>
              <a
                href="#"
                className="text-2xl text-gray-400 hover:text-emerald-400 transition duration-300 transform hover:scale-110"
              >
                📸
              </a>
            </div>
          </div>
        </div> */}

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>
            © {currentYear} {clubInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
