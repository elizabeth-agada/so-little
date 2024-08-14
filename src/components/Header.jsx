import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCaretDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  // State to manage the visibility of the dropdown menu
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setIsOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="text-white font-sans">
      <div className="px-6 md:px-32 items-center p-6 bg-blue-700 flex justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-bold">solittle</Link>
          <nav className="hidden md:flex space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center focus:outline-none hover:underline"
              >
                Browse <FontAwesomeIcon icon={faCaretDown} className={`ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
            </div>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Search..." className="hidden md:block px-2 py-1 rounded" />
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="hover:text-blue-400" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="hover:text-blue-400" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="hover:text-blue-400" />
          </a>
          <button
            onClick={toggleMenu}
            className="block md:hidden focus:outline-none"
          >
            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-blue-800 text-white p-4">
          <nav className="space-y-2">
            <Link to="/" className="block hover:underline">Home</Link>
            <button
              onClick={toggleDropdown}
              className="flex items-center focus:outline-none hover:underline w-full text-left"
            >
              Browse <FontAwesomeIcon icon={faCaretDown} className={`ml-1 transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && (
              <div className="pl-4 space-y-2">
                <Link to="/category/css" className="block hover:underline" onClick={handleMenuItemClick}>CSS</Link>
                <Link to="/category/grid" className="block hover:underline" onClick={handleMenuItemClick}>Grid</Link>
                <Link to="/category/flexbox" className="block hover:underline" onClick={handleMenuItemClick}>Flex box</Link>
                <Link to="/category/design" className="block hover:underline" onClick={handleMenuItemClick}>Design</Link>
              </div>
            )}
          </nav>
        </div>
      )}

      {/* Dropdown Menu for Desktop */}
      <div
        className={`hidden md:block overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "h-auto" : "h-0"}`}
      >
        <div className="bg-gray-800 text-white p-4 space-y-2 shadow-lg">
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">
            <div className="col-span-4 space-y-5">
              <h3 className="font-bold mb-2">Content by Category</h3>
              <ul className="flex items-center gap-1 flex-wrap">
                <li><Link to="/category/css" className="block hover:bg-slate-500 bg-black p-2" onClick={handleMenuItemClick}>CSS</Link></li>
                <li><Link to="/category/grid" className="block hover:bg-slate-500 bg-black p-2" onClick={handleMenuItemClick}>Grid</Link></li>
                <li><Link to="/category/flexbox" className="block hover:bg-slate-500 bg-black p-2" onClick={handleMenuItemClick}>Flex box</Link></li>
                <li><Link to="/category/design" className="block hover:bg-slate-500 bg-black p-2" onClick={handleMenuItemClick}>Design</Link></li>
              </ul>
            </div>
            <div className="col-span-4 space-y-5">
              <h3 className="font-bold mb-2">Resources by Application</h3>
              <ul className="flex items-center gap-1 flex-wrap">
                <li><Link to="/resources/after-effects" className="block hover:bg-slate-500 bg-black p-2" onClick={handleMenuItemClick}>After Effects Templates</Link></li>
                <li><Link to="/resources/bootstrap" className="block hover:bg-slate-500 bg-black p-2" onClick={handleMenuItemClick}>Bootstrap Templates</Link></li>
              </ul>
            </div>
            <div className="col-span-4 space-y-5">
              <h3 className="font-bold mb-2">Others</h3>
              <ul className="flex items-center gap-1 flex-wrap">
                <li><Link to="/others/after-effects" className="block hover:bg-slate-500  bg-black p-2" onClick={handleMenuItemClick}>Web3</Link></li>
                <li><Link to="/others/bootstrap" className="block hover:bg-slate-500  bg-black p-2" onClick={handleMenuItemClick}>Faces for Techies</Link></li>
                <li><Link to="/others/bootstrap" className="block hover:bg-slate-500  bg-black p-2" onClick={handleMenuItemClick}>Fintech</Link></li>
                <li><Link to="/others/bootstrap" className="block hover:bg-slate-500  bg-black p-2" onClick={handleMenuItemClick}>Community</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
