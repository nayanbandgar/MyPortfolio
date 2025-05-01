// import React from 'react'
// import { CgProfile } from 'react-icons/cg'
// import { FaHome, FaLaptop } from 'react-icons/fa'
// import { FaCode } from 'react-icons/fa'
// import { MdOutlineContactPhone } from 'react-icons/md'
// import { Link } from 'react-router-dom'

// export default function Home() {
//   return (

//     <section className='bgimg ' >
//       <div className='flex '>
//         <p className='text-white text-5xl font-serif py-2 ml-24 pt '>PORTFOLIO</p>

//         <div className='flex pt-5 ml-[400px] space-x-16'>

//           <div className=' flex   hover:bg-blue-400 rounded-2xl '> <FaHome className='text-xl m-1'/>
//                   <Link to="/home"><p className=' font-serif text-lg'>Home</p> </Link>        
//            </div>

//           <div className='flex    hover:bg-blue-400 rounded-2xl'> < CgProfile className='text-xl m-1' />
//                   <Link to="/about">  <p className='text-lg font-serif'>About</p>  </Link>       
//           </div>

//           <div className=' flex   hover:bg-blue-400 rounded-2xl'>  <FaCode className='text-xl m-1'/>
//                   <a href="skill.jsx">       <p className='text-lg font-sarif'>Skill</p>   </a>     
//             </div>

//           <div className=' flex   hover:bg-blue-400 rounded-2xl'> <FaLaptop className='text-xl m-1'/>
//                  <a href="project.jsx"> <p className='text-lg font-serif'>Project</p> </a>         
//          </div>

//           <div className=' flex   hover:bg-blue-400 rounded-2xl'> <MdOutlineContactPhone className='text-xl m-1' />
//             <a href="contact.jsx">   <p className='text-lg font-serif'>Contact</p> </a>      
//           </div>



//         </div>
//       </div>


//      <div className='flex justify-center pt-[310px] pr-28'>

//           <div>
//             <p className='text-white text-xl  font-serif'>Hi, I'm </p> 

//               <span className='text-blue-400 text-3xl py-16'>Nayan Bandgar</span> <br /> 


//             <p className='text-white text-xl font-serif pt-3'>And I'm a Web Developer</p>


//             <a href="contact.jsx"><button className='bg-white text-blue-400 px-3 py-1 mt-4 rounded-lg font-semibold font-serif'>Hire Me</button></a>

            
//           </div>

//     </div>


//     </section>
//   )
// }
// import React from 'react';

// import { Link } from 'react-router-dom';

// export default function Home() {
//   return (
//     <section >
            

//       <div className='flex justify-center pt-[370px] pr-28'>
//         <div>
//           <p className='text-white text-xl font-serif'>Hi, I'm</p>
//           <span className='text-blue-400 text-3xl py-16'>Nayan Bandgar</span> <br />
//           <p className='text-white text-xl font-serif font-thin pt-3'>And I'm a Web Developer</p>
//           <Link to="/contact">
//             <button className='bg-white text-blue-500 px-3 py-1 mt-4 rounded-lg font-semibold font-serif'>
//               Hire Me
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }


// import React from 'react';
// import { Link } from 'react-router-dom';
// import img9 from 'src/img/img9.jpg'; // Make sure this path is correct

// export default function Home() {
//   return (
//     <section 
//       style={{
//         backgroundImage: `url(${img9})`,
//         backgroundSize: 'cover', // Adjust this as needed
//         backgroundPosition: 'center', // Adjust this as needed
//         width: '100%',
//         height: '100vh' // Adjust height as needed
//       }}
//     >
//       <div className='flex justify-center pt-[370px] pr-28'>
//         <div>
//           <p className='text-white text-xl font-serif'>Hi, I'm</p>
//           <span className='text-blue-400 text-3xl py-16'>Nayan Bandgar</span> <br />
//           <p className='text-white text-xl font-serif font-thin pt-3'>And I'm a Web Developer</p>
//           <Link to="/contact">
//             <button className='bg-white text-blue-500 px-3 py-1 mt-4 rounded-lg font-semibold font-serif'>
//               Hire Me
//             </button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
import img9 from '../src/assets/img/img9.jpg'; // Adjust path accordingly

export default function Home() {
  return (
    <section 
      style={{
        backgroundImage: `url(${img9})`,
        backgroundSize: 'cover', // Adjust this as needed
        backgroundPosition: 'center', // Adjust this as needed
        width: '100%',
        height: '100vh' // Adjust height as needed
      }}
    >
      <div className='flex justify-center pt-[370px] pr-28'>
        <div>
          <p className='text-white text-xl font-serif'>Hi, I'm</p>
          <span className='text-blue-400 text-3xl py-16'>Nayan Bandgar</span> <br />
          <p className='text-white text-xl font-serif font-thin pt-3'>And I'm a Web Developer</p>
          <Link to="/contact">
            <button className='bg-white text-blue-500 px-3 py-1 mt-4 rounded-lg font-semibold font-serif'>
              Hire Me
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
