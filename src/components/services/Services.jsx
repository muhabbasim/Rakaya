import React, { useEffect } from 'react'
import './Services.scss'
import { CiMemoPad } from 'react-icons/ci'
import { CiBezier } from 'react-icons/ci'
import { CiBank } from 'react-icons/ci'
import { CiBarcode } from 'react-icons/ci'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Services() {

  return (
    <div className='services flex-column'>
        <div className="title">
            <h2>Our Services</h2>
        </div>
        <div className="container flex">
            <Link className='link' to={'./service'}>
                <div className="card">
                    <CiMemoPad className='services-icon' size={50}/>
                    <h3>Exercitationem doloremque</h3>
                    <span>Perferendis nemo adipisci eius mollitia molestias, eaque voluptatum exercitationem.</span>
                    <div className="more flex">
                        <small>Details </small>
                        <BsArrowRight size={20}/>
                    </div>
                </div>
            </Link>
            <Link className='link' to={'./service'}>
                <div className="card">
                <CiBezier className='services-icon' size={50}/>

                    <h3>Exercitationem doloremque</h3>
                    <span>Perferendis nemo adipisci eius mollitia molestias, eaque voluptatum exercitationem.</span>
                    <div className="more flex">
                        <small>Details </small>
                        <BsArrowRight size={20}/>
                    </div>
                </div>
            </Link>
            <Link className='link' to={'./service'}>
                <div className="card">
                    <CiMemoPad className='services-icon' size={50}/>
                    <h3>Exercitationem doloremque</h3>
                    <span>Perferendis nemo adipisci eius mollitia molestias, eaque voluptatum exercitationem.</span>
                    <div className="more flex">
                        <small>Details </small>
                        <BsArrowRight size={20}/>
                    </div>
                </div>
            </Link>
            <Link className='link' to={'./service'}>
                <div className="card">
                <CiBarcode className='services-icon' size={50}/>
                    <h3>Exercitationem doloremque</h3>
                    <span>Perferendis nemo adipisci eius mollitia molestias, eaque voluptatum exercitationem.</span>
                    <div className="more flex">
                        <small>Details </small>
                        <BsArrowRight size={20}/>
                    </div>
                </div>
            </Link>
            <Link className='link' to={'./service'}>
                <div className="card">
                <CiBank className='services-icon' size={50}/>
                    <h3>Exercitationem doloremque</h3>
                    <span>Perferendis nemo adipisci eius mollitia molestias, eaque voluptatum exercitationem.</span>
                    <div className="more flex">
                        <small>Details </small>
                        <BsArrowRight size={20}/>
                    </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Services