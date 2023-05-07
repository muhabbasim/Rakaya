import React, { useEffect } from 'react'
import Hero from '../../components/hero/Hero'
import Info from '../../components/hero_info/Info'
import HeroAbout from '../../components/hero_about/HeroAbout'
import Services from '../../components/services/Services'
import Advantages from '../../components/advantages/Advantages'
import Partners from '../../components/Partners/Partners'
import PopLogo from '../../components/pop_logo/PopLogo'
import { useState } from 'react'

function Home() {


  const [ isActive, setIsActive ] = useState(false)

  const windowScroll = () => {
      window.scrollY > 300 ? setIsActive(true) : setIsActive(false)
      window.scrollY > 2200 && setIsActive(false)
  }
  
  useEffect(()=> {
      window.addEventListener('scroll', windowScroll)
      return () => { // clean up
      window.addEventListener('scroll', windowScroll)
    }
  })

  return (
    <div>
      <Hero/>
      <Info/>
      <HeroAbout/>
      <Services/>
      <Advantages/>
      <Partners/>
      { isActive && <PopLogo/> }
    </div>
  )
}

export default Home