import React, {useState} from 'react'
import {Link, NavLink} from "react-router-dom"
import {switchState, setLoggedUser, setLogin} from '../utils/loginSlice'
import { useSelector, useDispatch } from 'react-redux'
import logoImage from '../images/logo.png'
import groupImage from '../images/groupLogo.png'

const Navbar = () => {

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  return (

    <>

      <nav className="bg-white shadow-md px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex flex-row w-[250px]">
            <img
              src={logoImage} // Replace with your image URL
              alt="Logo"
              className="hidden md:block h-16 w-15 object-contain"
            />
            <h1 className="text-lg my-auto mx-4 font-semibold ">HelpHive.io</h1>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Center: Navigation Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } absolute top-16 left-0 w-full bg-white shadow-lg md:shadow-none md:static md:flex md:items-center justify-center`}
          >
            <div className="flex flex-col md:flex-row md:space-x-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block px-4 py-2 md:py-0 ${
                    isActive ? "text-yellow-400" : "text-gray-800"
                  } hover:text-yellow-400`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block px-4 py-2 md:py-0 ${
                    isActive ? "text-yellow-400" : "text-gray-800"
                  } hover:text-yellow-400`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block px-4 py-2 md:py-0 ${
                    isActive ? "text-yellow-400" : "text-gray-800"
                  } hover:text-yellow-400`
                }
              >
                Contact
              </NavLink>
            </div>
          </div>

          {/* Right: Login/Register Button and Profile */}
          <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Link to="/group" className='px-5'>
                  <img
                    src={groupImage} // Replace with your user image URL
                    alt="User"
                    className="h-12 w-16 mx-5 rounded-full"
                  />
                </Link>
                <Link to="/login">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 mx-4 rounded-md">
                    Login/Register
                  </button>
                </Link>
                <Link to="/admin">
                  <button className="bg-orange-600 hover:bg-orange-700 text-white text-xs py-2 px-4 mx-4 rounded-md">
                    Admin Portal
                  </button>
                </Link>
              </div>
            {/* <h1 className="text-gray-700">{loggedUser}</h1> */}
          </div>
        </div>

        
      </nav>
    
    </>
  )
}

export default Navbar


// && login ?(<Link to={'/'}><button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">Sign Out</button></Link>):