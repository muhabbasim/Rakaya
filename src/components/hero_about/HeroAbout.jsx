import React from 'react'
import './HeroAbout.scss'

function HeroAbout() {
  return (
    <div className='hero_about flex'>
        <div className="left">
            <h2>Rakaya</h2>
            <span>Tpsum dolor sit amet consectetur adipisicing elit. Eaque cumque libero!</span>
            <small>  Dolor sit amet, consectetur adipisicing elit. Aut, laboriosam! Aspernatur eveniet necessitatibus placeat exercitationem doloremque corrupti pariatur? Perferendis nemo adipisci eius mollitia molestias, eaque voluptatum exercitationem doloremque ipsa. Cupiditate?</small>
        </div>
        <div className="line"></div>

        <div className="right">
            <img src="https://images.unsplash.com/photo-1607358981701-97a3fd57c588?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="" />
        </div>
    </div>
  )
}

export default HeroAbout