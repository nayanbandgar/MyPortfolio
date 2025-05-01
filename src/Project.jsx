import React from 'react'
import { BsAmazon, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { FaMicrophoneAlt, FaPhoneAlt, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { FcContacts, FcPhone } from 'react-icons/fc'
import { IoGlobeOutline } from 'react-icons/io5'
import { SiNetflix } from 'react-icons/si'

export default function Project() {
  return (
    <div className='bg-[#4c5354] '>
           <div className='flex justify-center pt-20'>

                  <p  className='text-white text-5xl font-serif'>MY</p>
                 <p  className='text-blue-400 text-5xl ml-2 font-serif'>Project</p> 

     
          </div>
                          <p className='font-serif text-2xl text-gray-50 text-center mt-5'>This all are my practice project</p>

                        <div className=' justify-center  ml-14'>
                             <div className='mt-20 flex place-content-evenly' >
                             <a href="amazon/index.html" > <BsAmazon className='text-9xl  text-white'/> </a> <br /> 
                            
                             <a href="INSTA LOGIN PAGE/instalogin.html"> <BsInstagram className='text-9xl text-white'/> </a> <br />
                             <a href="link din/linkdin.html"> <BsLinkedin className='text-9xl text-white' /> </a> <br />

                             </div>



                            <div className='mt-32 flex place-content-evenly '>
                             <a href="netflixclone/ntclone.html"> <SiNetflix className='text-9xl text-white' /> </a> <br />
                             <a href="whatsappclone/whatsapclone.html"> <FaWhatsapp className='text-9xl text-white' />  </a> <br />
                             <a href="youtube clone/youtubeclone.html"> <FaYoutube  className='text-9xl text-white' /> </a> <br />
                         
                             </div>


                         </div>


                         <div>
                                     <p className='font-semibold text-3xl   text-white mt-14 text-center'>Live Project Website  </p>
                        
                                  <a href="sdits web work/sdits-website/index.html"> <IoGlobeOutline className='text-[150px]  mt-10 ml-[650px] pb-5 text-white' /> </a>


                         </div>
    </div>
  )
}
