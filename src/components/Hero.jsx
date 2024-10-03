import React, { useState } from 'react'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import {heroVideo, smallHeroVideo} from '../utils'

const Hero = () => {

    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    useGSAP(() => {
        gsap.to('#hero', {opacity: 1, delay: 1.5 })
    })

  return (
    <section className='w-full nav-height bg-black relative grid'>
        <div className="h-5/6 w-full flex-center flex-col">
            <p id="hero" className='hero-title'>iPhone 15 Pro</p>
        </div>
        <div className='md:w-10/12 w-9/12 place-center'>
            <video autoPlay muted playsInline>
                <source src={videoSrc} type='video/mp4' />
            </video>
        </div>
    </section>
  )
}

export default Hero