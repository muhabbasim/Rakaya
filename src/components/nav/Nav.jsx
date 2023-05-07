import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.scss'
import logo from '../../upload/icon.png'
import fullLogo from '../../upload/full.png'
import nameLogo from '../../upload/name.png'



function Nav() {

    let activeStyle = {
        textDecoration: "none",
        color: "white",
        // borderTop: '3px solid var(--main1)',
        backgroundColor: 'transparent'
    };

    const [ isActive, setIsActive ] = useState(false)

    const windowScroll = () => {
        window.scrollY > 50 ? setIsActive(true) : setIsActive(false)

    }
    
    useEffect(()=> {
        window.addEventListener('scroll', windowScroll)
        return () => { // clean up
        window.addEventListener('scroll', windowScroll)
      }
    })
  

    return (
        <div className={`nav`}>
            <div className={`top flex-between ${isActive && "active_nav"}`}>
                <div className="left flex">
                    <Link className='link' to={'/'}>
                        <img src={nameLogo} alt="" />
                    </Link>
                </div>
            
                <div className={`right flex`}>
                    <ul className='flex'>
                        <NavLink to={'./'} className='link'  style={({isActive}) => (isActive ? activeStyle : null)}>
                            <li>Home</li>
                        </NavLink>
                        <NavLink to={'./service'} className='link' style={({isActive}) => (isActive ? activeStyle : null)}>
                            <li>Services</li>
                        </NavLink>
                        <NavLink to={'./about'} className='link' style={({isActive}) => (isActive ? activeStyle : null)}>
                            <li>About Us</li>
                        </NavLink>
                        <NavLink to={'./contact'} className='link' style={({isActive}) => (isActive ? activeStyle : null)}>
                            <li>Contact Us</li>
                        </NavLink>
                        
                        
                    </ul>
                </div>

                {/* <div className={`menu`}>
                    <div className={`line-one ${openMenu && "one-animation"} ${isActive && "black-color"}`}></div>
                    <div className={`line-center ${openMenu && "center-animation"} ${isActive && "black-color"}`}></div>
                    <div className={`line-two ${openMenu && "two-animation"} ${isActive && "black-color"}`}></div>
                </div> */}
            </div>

        </div>
    )
}

export default Nav