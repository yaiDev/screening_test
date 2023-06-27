import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { logoFull, menu, close, profile } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
  const [active, setActive] = useState("#");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <img src={ logoFull } alt='better goods' className='w-[180px] h-[33px]' />

      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-deepGray" : "text-black"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='sm:flex hidden justify-end items-center'>
        <a href='#'>Logout</a>
        <img src={ profile } alt='user profile' className='m-2 w-[40px] h-[40px]' />
        <FontAwesomeIcon icon={faChevronDown} className='w-[16px] h-[16px]' />
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center z-10">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[24px] h-[24px] object-contain fill-color-icon"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-blue-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-deepGray" : "text-black"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-0"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            
            <a href='#' className='font-poppins font-medium cursor-pointer text-[16px]'>Logout</a>
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar