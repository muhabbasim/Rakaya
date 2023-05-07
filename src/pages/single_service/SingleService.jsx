import React, { useEffect } from 'react'
import './SingleService.scss'
import Banner from '../../components/banner/Banner'
import backgroundImage from '../../upload/banner3.jpg'

function SingleService() {

    useEffect(() => {
        window.scrollTo(0, 0)
        
    }, [])
  return (
    <div className='service'>
        <div className='banner_container'>
            <Banner 
            bannarImage={backgroundImage}
            title="RAKAYA SERVICES"
            height= "40vh"
            desc="Designers and the stylish models’ work that combines to make a design to attract"
            />
        </div>

        <div className="service-importance flex">
            <h2>Importance or This service </h2>
            <p>LivePlan's Automated Financials & Step-by-Step Guidances Makes Writing Business Plans Easy. Pitch, Plan, & Track Your Business Plan From Start To Finish. Get Started Today!</p>
            <p>The source for business news and analysis. Covering economic policy, business policy, financial news, economic issues, stock market data, local business,</p>
        </div>

        <div className="service_process flex">

            <div class="container">
                {/* <h1 class="center">The Process</h1> */}
                
                <article class="episode">
                    <div class="episode__number">01</div>
                    <div class="episode__content">
                    <div class="title" style={{color: "var(--main2)"}}>Determine Position</div>
                    <div class="story">
                        <p>Say hello to the perfection of Cybele- tall, gorgeous, millionaire. She’s a supermodel by day and a kidnapper extraordinaire at night. When she took Princess Talia from the castle one night, the whole country was sent into chaos.</p>
                    </div>
                    </div>
                </article>
                
                <article class="episode" style={{float: 'right'}}>
                    <div class="episode__number">03</div>
                    <div class="episode__content">
                    <div class="title">Develop Strategy</div>
                    <div class="story">
                        <p>"Let go of me you mongrel!"</p>
                        <p>"Then what do you want?" she asked in a small voice. I walked steadily to her and kneeled on the floor. Once I did, I brought her to a sitting position and leaned to her head so I could whisper. "I want your body."</p>
                    </div>
                    </div>
                </article>
                
                <article class="episode">
                    <div class="episode__number">02</div>
                    <div class="episode__content">
                    <div class="title">Build Plan</div>
                    <div class="story">
                        <p>She froze in an instant and squirmed away from me. "You're a lunatic! Jerk! You're an ugly son of a-" I removed the cover on her head and watched her mouth slack open as she blinked in a confused daze at me. I heard her breath hitch as she took a good look at my face. We studied each other for a while.</p>
                    </div>
                    </div>
                </article>
                
                <article class="episode" style={{float: 'right'}}>
                    <div class="episode__number">04</div>
                    <div class="episode__content">
                    <div class="title">Manage Project</div>
                    <div class="story">
                        <p>"Scream all you want," I continued. "This hideout is located miles from any town or road. No one will ever hear you. In this little world of ours, I'm your only friend. I will feed you, talk to you when I want to, and do things that need be. If you're not nice to me, you'll never see the daylight again. Do you understand?"</p>
                    </div>
                    </div>
                </article>
            </div>

            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape3"></div>
        </div>

        {/* <div className="visuals">
            <img src={stylish2} alt="" />
        </div> */}
    </div>
  )
}

export default SingleService