import { CgProfile } from 'react-icons/cg';
import { FaHome, FaLaptop } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';
import { MdOutlineContactPhone } from 'react-icons/md';
import { Link } from 'react-router-dom';

import React from 'react'

export default function Header() {
  return (
    <div className='bg-transparent fixed'>

      <div className='flex'>
        <p className='text-white text-5xl font-serif py-2 ml-24 pt'>PORTFOLIO</p>

        <div className='flex pt-5 ml-[400px] space-x-16 text-white'>
          <div className='flex  rounded-2xl'>
            <FaHome className='text-xl m-1' />
            <Link to="/" className='font-serif text-lg'>
              Home
            </Link>
          </div>

          <div className='flex  rounded-2xl'>
            <CgProfile className='text-xl m-1' />
            <Link to="about" className='text-lg font-serif'>
              About
            </Link>
          </div>

          <div className='flex rounded-2xl'>
            <FaCode className='text-xl m-1' />
            <Link to="skill" className='text-lg font-serif'>
              Skills
            </Link>
          </div>

          <div className='flex  rounded-2xl'>
            <FaLaptop className='text-xl m-1' />
            <Link to="project" className='text-lg font-serif'>
              Projects
            </Link>
          </div>

          <div className='flex  rounded-2xl'>
            <MdOutlineContactPhone className='text-xl m-1' />
            <Link to="contact" className='text-lg font-serif'>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
