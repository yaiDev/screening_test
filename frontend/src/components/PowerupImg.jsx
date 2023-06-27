import React from 'react'
import styles from '../styles/style'
import { powerUp2, powerUp3 } from './../assets'

const PowerupImg = () => {
  return (
    <section className={`ss:mx-20 ss:py-6 py-0`}>
      <div className={`${styles.flexCenter} ss:flex-row flex-col`}>
        <div className='md:self-stretch ss:mx-3 mx-0'>
          <img className='h-75 w-full object-cover ss:w-[588] md:h-[498px]' src={powerUp2}/>
          <div className={`self-end ss:w-[500px] font-poppins ss:text-[18px] text-[10px] text-center ss:leading-[30px] leading-[20px] ss:py-5 py-5`}>
            <h2 className='font-poppins font-semibold ss:text-[18px] text-[16px] text-black ss:leading-[35px] leading-[40px] ss:mx-[25px] mx-6'>Yopus orem ipsum oder</h2>
            <p className='font-poppins font-normal ss:text-[16px] text-[14px] text-gray-600 ss:leading-[30px] leading-[20px] ss:mx-[25px] mx-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Purus ipsum est facilisi mi sed nec ultrices.</p>
          </div>
        </div>
        <div className='md:self-stretch ss:mx-3 mx-0'>
          <img className='h-75 w-full object-cover ss:w-[588] md:h-[498px]' src={powerUp3}/>
          <div className={`self-end ss:w-[500px] font-poppins ss:text-[18px] text-[10px] text-center ss:leading-[30px] leading-[20px] ss:py-5 py-5`}>
            <h2 className='font-poppins font-semibold ss:text-[18px] text-[16px] text-black ss:leading-[35px] leading-[40px] ss:mx-[25px] mx-6'>Yopus orem ipsum oder</h2>
            <p className='font-poppins font-normal ss:text-[16px] text-[14px] text-gray-600 ss:leading-[30px] leading-[20px] ss:mx-[25px] mx-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Purus ipsum est facilisi mi sed nec ultrices.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PowerupImg