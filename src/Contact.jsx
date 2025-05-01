

import React from 'react';
import { BsInstagram, BsMailbox } from 'react-icons/bs';
import { FaPhoneAlt } from 'react-icons/fa';
import { LiaLinkedin } from 'react-icons/lia';
import { MdOutlineMail } from 'react-icons/md';
import { FaGithub } from "react-icons/fa";


export default function Contact() {
  return (
    <div className='bg-[#4c5354] h-[100vh]'>
      <div className='flex justify-center pt-20'>
        <p className='text-white text-5xl font-serif'>Con</p>
        <p className='text-blue-400 text-5xl  font-serif'>tact</p>
      </div>

      <div className='flex justify-center mt-10 ' >
        <form action="" className='bg-gray-800 px-20   p-8 rounded-lg shadow-md w-1/2'>
          <div className='mb-4'>
            <label htmlFor="fullName" className='block text-white text-xl font-semibold mb-2'>Full Name</label>
            <input type="text" id="fullName" name="fullName" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' required />
          </div>
          <div className='mb-4'>
            <label htmlFor="email" className='block text-white text-xl font-semibold mb-2'>Email</label>
            <input type="email" id="email" name="email" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' required />
          </div>
          <div className='mb-4'>
            <label htmlFor="message" className='block text-white text-xl font-semibold mb-2'>Message</label>
            <textarea id="message" name="message" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' rows="4" required></textarea>
          </div>
          <div className='flex justify-center'>
            <button type="submit" className='bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
              Contact Us
            </button>
          </div>
        </form>
      </div>

      <div className='flex justify-center space-x-4 mt-10'>
        <a href="https://www.instagram.com/nayanbandgar826/" className='text-white text-[30px]'><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/nayan-bandgar-a426bb294/" className='text-white text-[38px]'><LiaLinkedin/></a>
        <a href="mailto:nayansdits@gmail.com" className='text-white text-4xl'> <MdOutlineMail /> </a>
        <a href="tailto:9009388091" className='text-white text-3xl'> <FaPhoneAlt /> </a>
        <a href="https://github.com/nayanbandgar" className='text-white text-3xl'><FaGithub /></a>
      </div>
    </div>
  );
}

