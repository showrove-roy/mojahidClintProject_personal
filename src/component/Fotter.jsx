import React from 'react'
import {BsFacebook,BsWhatsapp} from'react-icons/bs'
import {AiOutlineMail,AiFillLinkedin} from'react-icons/ai';
export default function Fotter() {
  return (
    <div className='w-full h-auto  '>
      <div className=' max-w-screen-lg m-auto px-2  '>
       <div className=' flex justify-between gap-10 p-10 border-b-2 border-gray-200'>
       <div className=' '>
        <img src="https://www.papermideast.com/uploads/configurationsite/source/29004.png" alt="" className='   h-24 w-24'/>
      </div>
         <div className='lg:flex md:flex gap-6 text-right'>
         <div>
          <h2 className='text-white font-bold  lg:text-xl md:text-md sm:text-sm mb-5 text-right'>VENUE ADDRESS</h2>
           <ul className='text-[16px] text-gray-200'>
            <li>El-Moshir Tantawy Axis, Al Hay Al</li>
            <li>Asher, Nasr City, Cairo</li>
            <li>Governorate</li>
           </ul>
          <p className='mt-3 text-[18px] text-gray-200'>/ (+202) 267 122 87</p>
         </div>
         <div className='lg:mt-0 mt-5'>
          <h2 className='text-white font-bold  lg:text-xl md:text-md sm:text-sm mb-5 text-right'>SOCIAL MEDIA</h2>
          <ul className='text-[16px] text-gray-200'>
            <li>You should connect social area</li>
            <li>for Any update</li>

          </ul>
          <div className='flex mt-4 gap-x-4  cursor-pointer' data-aos='fade-up-down' data-aos-duration='1200'>
            <span className=' bg-white text-blue-400 p-1 rounded-md'  ><AiFillLinkedin size={40}/></span> <span className=' text-red-500 bg-white p-1 rounded-md'><AiOutlineMail size={40}/></span> <span className='bg-white text-blue-400 p-1 rounded-md'><BsFacebook size={40}/></span> <span className='bg-white text-green-400 p-1 rounded-md'><BsWhatsapp size={40}/></span>
          </div>
         </div>
         </div>
       </div>
       <div className='text-center p-3 text-gray-200 font-serif lowercase'>
       2023 NILE TRADE FAIRS, ALL RIGHTS RESERVED. DEVELOPED BY <span className=' text-yellow-600'>HYPER DESIGN.</span>
       </div>
      </div>
    </div>
  )
}
