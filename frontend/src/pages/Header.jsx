import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from 'react';
export function Header() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="src\assets\logo\wordlogo.png"
              className="mr-3 h-12"
              alt="Eco-Log"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="/login"
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="/login"
              className="text-white bg-green-900 hover:bg-green-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Sign Up
            </Link>
          </div>
          <div
            className="  hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li className=' mt-2'>
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    ` ${isActive ? "text-orange-700" : "text-gray-700"}
                                        block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className=' mt-2'>
                <NavLink
                  to="/fulldashboard"
                  className={({ isActive }) =>
                    ` ${isActive ? "text-orange-700" : "text-gray-700"}
                                        block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                  }
                >
                  Dashboard
                </NavLink>
              </li>

              <li className=' mt-2'>
                <NavLink
                  to="/market"
                  className={({ isActive }) =>
                    ` ${isActive ? "text-orange-700" : "text-gray-700"}
                                        block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                  }
                >
                  Marketplace
                </NavLink>
              </li>
              <li className=' mt-2'>
                <NavLink
                  to="/events"
                  className={({ isActive }) =>
                    ` ${isActive ? "text-orange-700" : "text-gray-700"}
                                        block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                  }
                >
                  Events
                </NavLink>
              </li>

              <li className=' mt-2'>
                <NavLink
                  to="/learnmore"
                  className={({ isActive }) =>
                    ` ${isActive ? "text-orange-700" : "text-gray-700"}
                                        block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 `
                  }
                >
                  Learn More
                </NavLink>
              </li>
              <li >
                                 <nav className="bg-white   ">
                                    {/* Other navbar content */}
                              
                                    <div className="relative inline-block text-left  ">
                                      <button
                                        type="button"
                                        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700    shadow-sm hover:bg-gray-50 "
                                        id="menu-button"
                                        aria-expanded="true"
                                        aria-haspopup="true"
                                        
                                        // onMouseEnter={setIsDropdownOpen(true)}
                                        // onFocus={toggleDropdown}
                                        onClick={toggleDropdown}
                                      >
                                        <div className='text-base font-semibold '>Others</div>
                                        
                                        <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                          <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                          />
                                        </svg>
                                      </button>
                              
                                      {isDropdownOpen && (
                                        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                                          <div className="py-1" role="none">
                                            <NavLink to="/apply-for-job" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">
                                              Apply for Job
                                            </NavLink>
                                            <NavLink to="/apply-for-smart-bin" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem">
                                              Apply for Smart Bin
                                            </NavLink>
                                          </div>
                                        </div>
                                      )}
                                    </div>
                                  </nav>

                </li>

                
                           
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
