import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* About Section */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-2">solittle</h2>
            <p className="text-gray-400">
              Explore the world of web design principles and discover modern techniques, tips, and insights to elevate your web development skills.
            </p>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row mb-6 md:mb-0">
            <div className="text-center md:text-left md:mr-8">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="text-gray-400">
                <li><a href="/" className="hover:text-blue-400">Home</a></li>
                <li><a href="/about" className="hover:text-blue-400">About</a></li>
                <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
                <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
                {/* Add more links as needed */}
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="https://facebook.com" className="text-gray-400 hover:text-blue-400">
                  <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
                </a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400">
                  <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/" className='text-gray-400 hover:text-blue-400'>
                  <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Notsolittle. All rights reserved. | Designed by <a href="https://liz-me.vercel.app" className="text-blue-400 hover:underline">An Amazing Human</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
