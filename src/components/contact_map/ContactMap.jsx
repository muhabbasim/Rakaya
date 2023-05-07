import React from 'react'
import './ContactMap.scss'
import Iframe from 'react-iframe'

function ContactMap() {
  return (
    <div className='contact_map'>
        <h2>Find us on google map</h2>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum sapiente obcaecati quas nemo perferendis ut voluptates olor sit amet consectetur adipisicing elit. Dolorum sapiente obcaecati quas nemo perferendis ut voluptates atque cum asperiores ea?</span>
        <div className="map">
          <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7445.123589139442!2d39.49899028398398!3d21.090157218337698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c219f3a4451fef%3A0xdcdd5e12e717d948!2sARCHES!5e0!3m2!1sen!2ssa!4v1683440859128!5m2!1sen!2ssa"
            width="100%" height="450" style="border: 10px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          />
          
        </div>
    </div>
  )
}

export default ContactMap