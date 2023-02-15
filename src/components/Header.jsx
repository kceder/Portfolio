import React from 'react'
import CV from '../assets/Kristian_Ceder_CV.pdf'
import ME from '../assets/me.jpg'
import HeaderSocials from './HeaderSocials'

export default function Header() {
  return (
    <header className='pt-28 h-[100vh] md:h-[68vh] overflow-hidden text-center'>
      <div className=''>
        <h5 className='text-center text-xl text-secondary mb-10'>Hello I'm</h5>
        <h1 className='text-center text-5xl text-primary mb-10'>Kristian Ceder</h1>
        <h5 className='text-center text-xl text-secondary'>Fullstack Developer</h5>
        <div className='me'>
          <img src={ME} className='w-20 h-20 left-calc rounded-full mt-9 mx-auto' alt='Kristian' />
        </div>
        <div className='mt-9 flex gap-5 justify-center'>
          <a href={CV} download className='button-1'>Download CV</a>
          <a href="#contact" className='button-2'>Let's Talk</a>
        </div>
        <HeaderSocials />
        <a href="#contact" className='bg-transparent hidden md:block absolute right-0 bottom-28 rotate-90 text-primary'>Scroll Down</a>
      </div>
    </header>
  )
}
