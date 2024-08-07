import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  // State to manage the visibility and height of the dropdown menu
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? "0px" : "200px"); // Adjust the height as needed
  };

  return (
    <header className="text-white">
      <div className="grid grid-cols-12  items-center p-6 bg-blue-700">
        <div className="max-w-7xl mx-auto flex items-center space-x-4 col-span-6">
          <h1 className="text-2xl font-bold">solittle</h1>
          <nav className="flex space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <div className="relative items-center">
              <span
                onClick={toggleDropdown}
                className="cursor-pointer hover:underline px-1"
              >
                Browse
              </span>
              <FontAwesomeIcon icon={faCaretDown} onClick={toggleDropdown} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
            </div>
          </nav>
        </div>
        <div className="flex items-center space-x-4 col-span-6">
          <input type="text" placeholder="Search..." className="px-2 py-1 rounded" />
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="hover:text-blue-400" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="hover:text-blue-400" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="hover:text-blue-400" />
          </a>
        </div>
      </div>
      {/* Dropdown Menu */}
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ height }}
      >
        <div className="bg-gray-800 text-white p-4 space-y-2 shadow-lg">
          <div className="max-w-7xl mx-auto grid grid-cols-12 gap-4">
            <div className='col-span-4 space-y-5'>
              <h3 className="font-bold mb-2">Content by Category</h3>
              <ul className="flex items-center gap-1">
                <li><Link to="/category/css" className="hover:bg-slate-500 bg-black p-2">CSS</Link></li>
                <li><Link to="/category/designer-news" className="hover:bg-slate-500 bg-black p-2">Grid</Link></li>
                <li><Link to="/category/designer-news" className="hover:bg-slate-500 bg-black p-2">Flex box</Link></li>
                
                {/* Add more categories */}
              </ul>
              <ul className="space-y-1 flex items-center gap-1">
                <li><Link to="/category/css" className="hover:bg-slate-500 bg-black p-2">CSS</Link></li>
                <li><Link to="/resources/bootstrap" className="hover:bg-slate-500 bg-black p-2">Font</Link></li>
                <li><Link to="/category/designer-news" className="hover:bg-slate-500 bg-black p-2">Designer News</Link></li>
                <li><Link to="/category/designer-news" className="hover:bg-slate-500 bg-black p-2">Designer News</Link></li>
                
                {/* Add more categories */}
              </ul>
            </div>
            <div className='col-span-4 space-y-5'>
              <h3 className="font-bold mb-2">Resources by Application</h3>
              <ul className="flex items-center gap-1">
                <li><Link to="/resources/after-effects" className="hover:bg-slate-500 bg-black p-2">After Effects Templates</Link></li>
                <li><Link to="/resources/bootstrap" className="hover:bg-slate-500 bg-black p-2">Bootstrap Templates</Link></li>
                {/* Add more resources */}
              </ul>
              <ul className="flex items-center gap-1">
                <li><Link to="/resources/after-effects" className="hover:bg-slate-500 bg-black p-2">TailwindCSS</Link></li>
                <li><Link to="/resources/bootstrap" className="hover:bg-slate-500 bg-black p-2">React</Link></li>
                {/* Add more resources */}
              </ul>
            </div>
            <div className='col-span-4 space-y-5'>
              <h3 className="font-bold mb-2">Others</h3>
              <ul className="flex items-center gap-1">
                <li><Link to="/resources/after-effects" className="hover:bg-slate-500 bg-black p-2">Web3</Link></li>
                <li><Link to="/resources/bootstrap" className="hover:bg-slate-500 bg-black p-2">Faces for Techies</Link></li>
                <li><Link to="/resources/bootstrap" className="hover:bg-slate-500 bg-black p-2">Fintech</Link></li>
                <li><Link to="/resources/bootstrap" className="hover:bg-slate-500 bg-black p-2">Community</Link></li>
                {/* Add more resources */}
              </ul>
              <ul className="flex items-center gap-1">
                <li><Link to="/resources/bootstrap" className="hover:bg-slate-500 bg-black p-2">Events</Link></li>
                {/* Add more resources */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
