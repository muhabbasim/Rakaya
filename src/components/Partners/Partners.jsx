import React from 'react'
import './Partners.scss'

import logo1 from '../../upload/logo1.png'
import logo2 from '../../upload/logo.png'
import logo3 from '../../upload/logo3.png'
import logo4 from '../../upload/logo2.png'
import logo5 from '../../upload/logo5.png'

function Partners() {
  return (
    <div className='partners flex'>

        <div className="title">
            <h2>Our Partners</h2>
            <span>Opsum dolor sit amet consectetur, adipisicing elit. Tempora excepturi perferendis doloribus nisi eveniet doloremque ipsa, ullam in animi fugiat.</span>
        </div>
        <div className="item flex">
            <img src={logo1} alt="" />
            <span>Consectetur </span>
        </div>
        <div className="line"></div>
        <div className="item flex">
            <img src={logo2} alt="" />
            <span>Laboriosam</span>
        </div>
        <div className="line"></div>
        <div className="item flex">
            <img src={logo3} alt="" />
            <span>Necessitatibus </span>
        </div>
        <div className="line"></div>
        <div className="item flex">
            <img src={logo4} alt="" />
            <span>Perferendis</span>
        </div>
        <div className="line"></div>
        <div className="item flex">
            <img src={logo5} alt="" />
            <span>Perferendis</span>
        </div>
    </div>
  )
}

export default Partners