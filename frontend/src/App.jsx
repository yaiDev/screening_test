import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar, Hero, BatterGoods, Powerup, PowerupImg, Footer } from './components'
import styles from './styles/style.js'

function App() {
  return (
    <div className='bg-white w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-gray`}>
        <div className={`${styles.boxWidth}`}>
          <BatterGoods />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-power-up bg-cover bg-center`}>
        <div className={`${styles.boxWidth}`}>
          <Powerup />
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-gray`}>
        <div className={`${styles.boxWidth}`}>
          <PowerupImg />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App
