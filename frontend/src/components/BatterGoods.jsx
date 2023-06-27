import React from 'react'
import styles from '../styles/style'
import { howItWork1, howItWork2, howItWork3, howItWork4 } from './../assets'

const BatterGoods = () => {
  return (
    <section className={`py-9`}>    
      <div className={`flex justify-center`}>
        <p className={`${styles.paragraph} text-center`}>
          <h1 className='font-poppins font-semibold ss:text-[45px] text-[30px] text-black ss:leading-[65px] leading-[40px] ss:mx-[50px] mx-0'>How BetterGoods works?</h1>
          <h6 className='font-poppins ss:text-[18px] text-[10px] text-dark_gray ss:leading-[30px] leading-[20px] ss:mx-20 mx-14 my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem sunt, dicta aut placeat minus repellendus quam facilis voluptatum accusamus rerum at.</h6>
        </p>
      </div>

      <div className={`${styles.flexCenter} md:flex-row flex-col`}>
        <div className='w-[292px] md:self-stretch'>
          <div>
            <img src={howItWork1} alt="howItWork1" className="" />
          </div>
          <h2 className='font-poppins font-semibold ss:text-[18px] text-[16px] text-black ss:leading-[35px] leading-[40px] ss:mx-[25px] mx-6'>1. Lorem ipsum doder</h2>
          <p className='font-poppins font-normal ss:text-[16px] text-[14px] text-gray-600 ss:leading-[30px] leading-[20px] ss:mx-[25px] mx-6 '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          
        </div>
        <div className='w-[292px] md:self-stretch'>
          <div>
            <img src={howItWork2} alt="howItWork2" className="w-[292px]" />
          </div>
          <h2 className='font-poppins font-semibold ss:text-[18px] text-[16px] text-black ss:leading-[35px] leading-[40px] ss:mx-[25px] mx-6'>2. Odee larem ipsum</h2>
          <p className='font-poppins font-normal ss:text-[16px] text-[14px] text-gray-600 ss:leading-[30px] leading-[20px] ss:mx-[25px] mx-6 '>Velit risus semper pronic ac, aliquam tristique justo vulputate augue.</p>
        </div>
        <div className='w-[292px] md:self-stretch'>
          <div>
            <img src={howItWork3} alt="howItWork3" className="w-[292px]" />
          </div>
          <h2 className='font-poppins font-semibold ss:text-[18px] text-[16px] text-black ss:leading-[35px] leading-[40px] ss:mx-[25px] mx-6'>3. Yopus orem ipsum oder</h2>
          <p className='font-poppins font-normal ss:text-[16px] text-[14px] text-gray-600 ss:leading-[30px] leading-[20px] ss:mx-[25px] mx-6 '>Maecenas uktricies amet justo, egestas enim tempus diam leo.</p>
        </div>
        <div className='w-[292px] md:self-stretch'>
          <div>
            <img src={howItWork4} alt="howItWork4" className="w-[292px]" />
          </div>
          <h2 className='font-poppins font-semibold ss:text-[18px] text-[16px] text-black ss:leading-[35px] leading-[40px] ss:mx-[25px] mx-6'>4. Momu ipsum lorem</h2>
          <p className='font-poppins font-normal ss:text-[16px] text-[14px] text-gray-600 ss:leading-[30px] leading-[20px] ss:mx-[25px] mx-6 '>Mauris odio fames parta fames facilisis cutsus enim.</p>
        </div>
      </div>
    </section>
  )
}

export default BatterGoods 