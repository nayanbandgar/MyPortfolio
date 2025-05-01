// import React from 'react'
// import aboutimg from './img/aboutimg.jpg'

// export default function About() {
//   return (
//     <div className='bg-[#4c5354] h-[100vh]'>
//                    <div className='flex justify-center pt-20'>

//                        <p  className='text-white text-5xl font-serif'>About</p>
//                        <p  className='text-blue-400 text-5xl ml-2 font-serif'>Me</p>
                            
//                    </div>

//                   <div className='flex justify-center'> 

//                   <div className='  my-24 '> 

//                     <img className=' h-80 w-80 rounded-full bg-white'   src="src/img/aboutimg.jpg" alt=" " />

//                   </div>

//                   <div className='mt-40 ml-14 '>
//                          <p className='text-4xl text-blue-300 font-semibold'> Nayan Bandgar</p>
//                          <p className='text-left w-[500px] text-lg mt-4 font-serif text-gray-50'>Hello! I'm , a dedicated and passionate student pursuing a B.Tech in Data Science. My journey in the tech world has been exhilarating, filled with learning, creativity, and constant innovation. Alongside my studies, I have developed a strong proficiency in Web Development, allowing me to create dynamic and responsive web applications.</p>
//                   </div>
//                   </div>
//     </div>
//   )
// }

import React from 'react';
import aboutimg from '../src/assets/img/aboutimg.jpg';

export default function About() {
  return (
    <div className='bg-[#4c5354] h-[100vh]'>
      <div className='flex justify-center pt-20'>
        <p className='text-white text-5xl font-serif'>About</p>
        <p className='text-blue-400 text-5xl ml-2 font-serif'>Me</p>
      </div>

      <div className='flex justify-center my-24'>
        <div>
          <img 
            className='h-80 w-80 rounded-full bg-white' 
            src={aboutimg} 
            alt="About Nayan Bandgar" 
          />
        </div>

        <div className='mt-40 ml-14'>
          <p className='text-4xl text-blue-300 font-semibold'>Nayan Bandgar</p>
          <p className='text-left w-[500px] text-lg mt-4 font-serif text-gray-50'>
            Hello! I'm a dedicated and passionate student pursuing a B.Tech in Data Science. My journey in the tech world has been exhilarating, filled with learning, creativity, and constant innovation. Alongside my studies, I have developed a strong proficiency in Web Development, allowing me to create dynamic and responsive web applications.
          </p>
        </div>
      </div>
    </div>
  );
}
