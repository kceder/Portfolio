import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className='text-sm text-center text-secondary bg-primary h-44'>
      <a className='block py-4 text-lg font-medium ' href="#">KRISTIAN CEDER</a> 
      <div className='flex justify-center gap-3'>
        <a
          href='https://www.github.com/kceder/' target='_blank'>
          <BsGithub className='bg-transparent hover:scale-125' target={'_blank'} />
          </a>
        <a href='https://www.linkedin.com/in/kristian-ceder/' target='_blank'>
          <BsLinkedin className='hover:scale-125' target={'_blank'} />
        </a>
      </div>
      <div className='py-4 copyright'>
        <p className='text-xs'>&copy;Kristian Ceder. All rights reserved.</p>
      </div>
    </footer>
  )
}
