import React from 'react'
import styles from '../styles/style'
import { clickThroughRate } from './../assets'

const Hero = () => {
  return (
    <section id='hero' className={ `flex md:flex-row flex-col ${styles.paddingY}` }>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 mb-2'>
          <p className={`${styles.paragraph} ml-2`}>
            <h1 className='font-poppins font-semibold ss:text-[45px] text-[30px] text-black ss:leading-[65px] leading-[40px]'>Higher click-through rates for your product</h1>
            <h6 className='font-poppins ss:text-[18px] text-[10px] text-dark_gray ss:leading-[30px] leading-[20px] py-6'>Don't stop tracking your product and better analyze your customer just too easy step.</h6>
          </p>
        </div>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 ss:order-last order-first relative`}>
        <img src={clickThroughRate} alt="click through rate" className="w-[100%] h-[100%] relative z-[5]" />
      </div>
    </section>
  )
}

export default Hero