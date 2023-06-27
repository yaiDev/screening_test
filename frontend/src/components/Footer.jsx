import React, { useState } from 'react'
import { logoAlone, facebookLogo, youtubeLogo, igLogo, twitterLogo } from './../assets'
import { navFooter } from './../constants'

const Footer = () => {
  const [active, setActive] = useState("#");

  return (
    <section className='w-full flex ss:flex-row flex-col py-6 justify-between ss:items-center items-start navbar'>
      <img src={ logoAlone } alt='better goods' className='w-[80px] h-[45px]' />

      <div className='ss:flex-row flex-col'>
        <ul className="list-none sm:flex justify-center items-center flex-1 py-2">
          {navFooter.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer ss:text-[16px] text-[12px] py-1 ${
                active === nav.title ? "text-deepGray" : "text-black"
              } ${index === navFooter.length - 1 ? "mr-0" : "mr-10"}`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex items-stretch space-x-3'>
        <img src={facebookLogo} className='h-[24px]' />
        <img src={twitterLogo} className='h-[24px]' />
        <img src={igLogo} className='h-[24px]' />
        <img src={youtubeLogo} className='h-[24px]' />
      </div>
    </section>
  )
}

export default Footer