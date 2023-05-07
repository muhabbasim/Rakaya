import React from 'react'
import './Advantages.scss'

import { CiMemoPad } from 'react-icons/ci'

function Advantages() {
  return (
    <div className='advantages'>
        {/* <img src={pattern} alt=""  /> */}
        <div className="shape">
            <h2><span>Who</span> benefits</h2>
        </div>
        <div className="container flex">
            <div className="item flex">
                <CiMemoPad className='services-icon' size={50}/>
                <h3>Exercitationem </h3>
                <span>Perferendis nemo adipisci eius mollitia molestias, eaque voluptatum exercitationem.</span>
                <div className="more flex">
                    
                </div>
            </div>
            <div className="item flex">
                <CiMemoPad className='services-icon' size={50}/>
                <h3>Exercitationem </h3>
                <span>Perferendis nemo adipisci eius mollitia molestias, eaque voluptatum exercitationem.</span>
                <div className="more flex">
                    
                </div>
            </div>
            <div className="item flex">
                <CiMemoPad className='services-icon' size={50}/>
                <h3>Exercitationem </h3>
                <span>Perferendis nemo adipisci eius mollitia molestias, eaque voluptatum exercitationem.</span>
                <div className="more flex">
                    
                </div>
            </div>
            <div className="item flex">
                <CiMemoPad className='services-icon' size={50}/>
                <h3>Exercitationem </h3>
                <span>Perferendis nemo adipisci eius mollitia molestias, eaque voluptatum exercitationem.</span>
                <div className="more flex">
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Advantages