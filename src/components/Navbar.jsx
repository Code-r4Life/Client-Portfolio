import React from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Hamburger from 'hamburger-react';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className='flex items-center lg:justify-between pl-6 bg-gray-800 text-white min-w-full fixed top-0 left-0 w-full z-10'>
        <div className="relative lg:hidden">
          {/* Hamburger Icon */}
          <div className="py-4 pl-2">
              <Hamburger toggled={isOpen} toggle={setIsOpen} color="#fff" size={24} />
          </div>
          {/* Sidebar Menu */}
          <div
            className={`fixed top-15 left-0 h-full w-64 bg-gray-800 text-white p-6 transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out z-[1]`}>
            <ul className="space-y-7 text-lg ml-8">
              {location.pathname !== '/' && (<li><Link to="/">Home</Link></li>)}
              {location.pathname !== '/about' && (<li><Link to="/about">About</Link></li>)}
              {location.pathname !== '/research' && (<li><Link to="/research">Research</Link></li>)}
              {location.pathname !== '/publications' && (<li><Link to="/publications">Publications</Link></li>)}
              {location.pathname !== '/teaching' && (<li><Link to="/teaching">Teaching</Link></li>)}
              {location.pathname !== '/patents' && (<li><Link to="/patents">Patents</Link></li>)}
              {location.pathname !== '/awards' && (<li><Link to="/awards">Awards</Link></li>)}
              {location.pathname !== '/editorial' && (<li><Link to="/editorial">Editorial</Link></li>)}
              {location.pathname !== '/contact' && (<li><Link to="/contact">Contact Me</Link></li>)}
            </ul>
        </div>
    </div>
       
        <Link to="/" className='lg:text-[24px] text-[21px] font-semibold flex justify-center w-[80%] lg:w-[20.1%] z-[2]'>Kuntal Maity</Link>
        <ul className='justify-center p-4 lg:gap-x-4 gap-x-2 bg-gray-800 text-white lg:flex hidden'>
          {location.pathname !== '/' && (<li className="group cursor-pointer"><Link to="/" className="inline-block">Home<span className="block h-[2px] bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-3xl"></span></Link></li>)}
          {location.pathname !== '/about' && (<li className="group cursor-pointer"><Link to="/about" className="inline-block">About<span className="block h-[2px] bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-3xl"></span></Link></li>)}
          {location.pathname !== '/research' && (<li className="group cursor-pointer"><Link to="/research" className="inline-block">Research<span className="block h-[2px] bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-3xl"></span></Link></li>)}
          {location.pathname !== '/publications' && (<li className="group cursor-pointer"><Link to="/publications" className="inline-block">Publications<span className="block h-[2px] bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-3xl"></span></Link></li>)}
          {location.pathname !== '/teaching' && (<li className="group cursor-pointer"><Link to="/teaching" className="inline-block">Teaching<span className="block h-[2px] bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-3xl"></span></Link></li>)}
          {location.pathname !== '/patents' && (<li className="group cursor-pointer"><Link to="/patents" className="inline-block">Patents<span className="block h-[2px] bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-3xl"></span></Link></li>)}
          {location.pathname !== '/awards' && (<li className="group cursor-pointer"><Link to="/awards" className="inline-block">Awards<span className="block h-[2px] bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-3xl"></span></Link></li>)}
          {location.pathname !== '/editorial' && (<li className="group cursor-pointer"><Link to="/editorial" className="inline-block">Editorial<span className="block h-[2px] bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-3xl"></span></Link></li>)}
          {location.pathname !== '/contact' && (<li className="group cursor-pointer"><Link to="/contact" className="inline-block">Contact Me<span className="block h-[2px] bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-3xl"></span></Link></li>)}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
