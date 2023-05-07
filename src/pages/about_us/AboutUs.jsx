import React, { useState } from 'react'
import './AboutUs.scss'
import Banner from '../../components/banner/Banner'
import {brandCore} from '../../Data'
import image4 from '../../upload/style3.jpg'
import image5 from '../../upload/style1.jpg'

import backgroundImage from '../../upload/stylish4.jpg'

function AboutUs() {

  const [tap, setTaps ] = useState(0)
  const toggleTaps = (index) => {
    setTaps(index)
  }

  return (
    <div className='about_us'>
      <div className='banner_container'>
        <Banner 
          bannarImage={backgroundImage}
          title="RAKAYA LIMITED"
          desc="Designers and the stylish models’ work that combines to make a design to attract"
          height= "40vh"
        />
      </div>

      <div className="brand_core">
        <div className='taps flex'>
          <button className={tap === 0 ? "tap active_tap" : 'tap'} onClick={()=> toggleTaps(0)}>Vision</button>
          <button className={tap === 1 ? "tap active_tap" : 'tap'} onClick={()=> toggleTaps(1)}>Mission</button>
          <button className={tap === 2 ? "tap active_tap" : 'tap'} onClick={()=> toggleTaps(2)}>Leadership</button>
        </div>
        
        { brandCore.map((core, i) => {
          if (tap === i ) {
            return (
              <div className="core flex" key={core.id}>
                <h2>{core.title}</h2>
                <p>{core.value1}</p>
                <p>{core.value2}</p>
              </div>
            )
          }
            
        }) }
      </div>

      <div className="attributes flex">
        {/* <div className="shape2"></div> */}
        <div className="shape3"></div>

        {/* <div className="attributes_container flex">

          <div className="item flex">
            <div className="content">
              <h2>Lorem, ipsum dolor.</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt magnam itaque similique ipsum debitis error dolorem incidunt voluptatem sunt atque?</p>
            </div>
            <img src={image2} alt="" />
          </div>
          <div className="item flex">
            <div className="content">
              <h2>Lorem, ipsum dolor.</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt magnam itaque similique ipsum debitis error dolorem incidunt voluptatem sunt atque?</p>
            </div>
            <img src={image3} alt="" />
          </div>
        </div> */}

        <div className="attributes_container flex">

          <div className="item flex">
            <div className="content">
              <h2>Lorem, ipsum dolor.</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt magnam itaque similique ipsum debitis error dolorem incidunt voluptatem sunt atque?</p>
            </div>
            <div className="line"></div>
            <div className="visual">
              <img src={image4} alt="" />
            </div>
          </div>

          <div className="line2"></div>

          <div className="item flex" style={{flexDirection: 'row-reverse'}}>
            <div className="content">
              <h2>Lorem, ipsum dolor.</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt magnam itaque similique ipsum debitis error dolorem incidunt voluptatem sunt atque?</p>
            </div>
            <div className="line"></div>
            <div className="visual">
              <img src={image5} alt="" />
            </div>
          </div>
        </div>

      </div>

      <div className="attributes_second"></div>


    </div>
  )
}

export default AboutUs