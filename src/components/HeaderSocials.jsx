import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

export default function HeaderSocials() {
  return (
    <div className='bg-transparent sm:hidden md:flex flex-col items-center gap-2 absolute left-9 bottom-28 text-primary'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><BsGithub/></a>
        <div className='h-20 bg-primary w-[1px]'></div>
    </div>
  )
}
