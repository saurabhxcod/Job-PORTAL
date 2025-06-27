import React from 'react';
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-zinc-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Job Nexus</h3>
          <p className="text-sm">
            Discover jobs. Build your future. Empowering professionals and freshers to connect with the best opportunities.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h4 className="font-semibold mb-3">Categories</h4>
          <ul className="space-y-2 text-sm">
            <li>Frontend Developer</li>
            <li>Backend Developer</li>
            <li>Data Scientist</li>
            <li>UI/UX Designer</li>
            <li>AI/ML Engineer</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-semibold mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} /> New Delhi, India
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@jobnexus.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </li>
          </ul>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-600 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-sky-400 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-pink-500 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-blue-700 transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center py-4 border-t border-gray-200 dark:border-zinc-800 text-sm">
        © {new Date().getFullYear()} Job Nexus. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
