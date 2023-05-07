import React from 'react'
import './Banner.scss'

function Banner({ bannarImage, title, desc, height }) {
  return (
    <div className='banner' style={{
        backgroundImage: `url(${bannarImage})`,
        height: `${height}`
      }}> 
        <div className="cta">
            <h1>{title}</h1>
            <span>{desc}</span>
            {/* <button>Take action</button> */}
        </div>
    </div>
  )
}

export default Banner