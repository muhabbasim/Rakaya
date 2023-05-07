import React, { useEffect } from 'react'
import './Contact.scss'
import { FiPhone } from 'react-icons/fi'
import { BsCalendarDate } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillBank } from 'react-icons/ai'
import ContactMap from '../../components/contact_map/ContactMap'
import Banner from '../../components/banner/Banner'

import backgroundImage from '../../upload/location.png'

function Contact() {

  useEffect(() => {
    window.scrollTo(0, 0)
    
  }, [])
  return (
    <div className='contact'>
      <Banner 
        bannarImage={backgroundImage}
        title="BE IN TOUTCH"
        height= "40vh"
        desc="Designers and the stylish models’ work that combines to make a design to attract"
      />
      <section className="container">
        <div className="details">
          <h1>GET IN TOUCH</h1>
          <h2>Designers and the stylish models’ work that combines to make a design to attract</h2>
          <h3>Head Office</h3>
          <div className='list flex'>

            <div className="left flex">
              <li>
                <AiFillBank className='search-icon' size={30} color="lightgray"/>
                <div className='sub_div flex-column'>
                  <h3>Phone Number</h3>
                  <p>Designers and the stylish models</p>
                </div>
              </li>
              <li>
                <HiOutlineMail className='search-icon' size={30} color="lightgray"/>
                <div className='sub_div flex-column'>
                  <h3>Phone Number</h3>
                  <p>Designers@stylish .com</p>
                </div>
              </li>
              <li>
                <FiPhone className='search-icon' size={30} color="lightgray"/>
                <div className='sub_div flex-column'>
                  <h3>Phone Number</h3>
                  <p>52345 2452 52435</p>
                </div>
              </li>
              <li>
                <BsCalendarDate className='search-icon' size={30} color="lightgray"/>
                <div className='sub_div flex-column'>
                  <h3>Phone Number</h3>
                  <p>Monday to sunday 9:00 am to 6:00 pm</p>
                </div>
              </li>

            </div>
            <div className="right">
              <div className="top">
                <h2>Send Message</h2>
                <p>Dolor sit, amet consectetur adipisicing elit. Ex amet inventore officiis velit deleniti fugiat sit architecto ut consectetur laudantium.</p>
              </div>

              <div className="bottom">
                <div className="client_info">
                  <input type="text" placeholder='Your Name' />
                  <input type="email" placeholder='Email Adress' />
                  <input type="text" placeholder='Phone Number' />
                  <select name="" id="" placeholder=' Subject'>
                    <option value="">Subject</option>
                    <option value="">Lorem, ipsum.</option>
                    <option value="">Lorem, ipsum.</option>
                    <option value="">Lorem, ipsum.</option>
                  </select>
                </div>
                <textarea name="" id="" cols="30" rows="10" placeholder='Write Your Message'></textarea>
                <button className='button'>Send Message</button>
              </div>
            </div>
            
          </div>
        </div>

      </section>

      <ContactMap/>
    </div>
  )
}

export default Contact