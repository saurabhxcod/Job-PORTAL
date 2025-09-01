import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 shadow-inner">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
           <h1 className="text-2xl font-extrabold transition-transform hover:scale-105">
            Job<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Junction</span>
          </h1>
            <p className="mt-4 text-sm">
              Connecting job seekers with opportunities. Your career starts here.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact</h2>
            <p className="text-sm">📧 offical.saurabhsingh@gmail.com</p>
            <p className="text-sm">📱 +91 7905145529</p>
          </div>

          {/* Socials */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Me</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.linkedin.com/in/saurabh-singh-74808a293"
                  className="hover:text-blue-600 transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/917905145529"
                  className="hover:text-green-600 transition"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:offica.saurabhsingh@gmail.com"
                  className="hover:text-red-600 transition"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 border-t border-gray-300 pt-6 text-center text-sm">
          © {new Date().getFullYear()} JobJunction. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
