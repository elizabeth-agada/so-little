import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-indigo-900 text-white shadow-md">
      <div className="container mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-lg font-bold hover:text-blue-400">
            <img src="/path-to-your-logo.png" alt="Notsolittle Logo" className="h-8" />
          </Link>
        </div>

        {/* Navigation */}
       
          <Link to="/" className="text-lg font-bold hover:text-blue-400">Home</Link>
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)} 
              className="text-lg font-bold hover:text-blue-400 flex items-center"
            >
              Browse
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={dropdownOpen ? "M6 9l6 6 6-6" : "M6 15l6-6 6 6"} />
              </svg>
            </button>
            <div className={`absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg ${dropdownOpen ? 'block' : 'hidden'}`}>
              <ul>
                <li><Link to="/category1" className="block px-4 py-2 hover:bg-gray-200">Category 1</Link></li>
                <li><Link to="/category2" className="block px-4 py-2 hover:bg-gray-200">Category 2</Link></li>
                <li><Link to="/category3" className="block px-4 py-2 hover:bg-gray-200">Category 3</Link></li>
                {/* Add more items as needed */}
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Icons and Search Box */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="px-4 py-2 rounded bg-gray-100 border border-gray-300 text-gray-900"
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            </span>
          </div>
          <a href="https://facebook.com" className="text-white hover:text-blue-400">
            <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-blue-400">
            <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-blue-400">
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
