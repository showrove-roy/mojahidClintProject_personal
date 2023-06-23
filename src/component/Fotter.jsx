import React from "react";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-scroll";
export default function Fotter() {
  return (
    <div className='w-full h-auto  '>
      <div className='max-w-screen-lg m-auto px-2  '>
        <div className=' flex flex-col sm:flex-row justify-between gap-10 p-10 border-b-2 border-gray-200'>
          <div className=''>
            <img
              src='https://www.papermideast.com/uploads/configurationsite/source/29004.png'
              alt=''
              className='h-24 w-24 mx-auto'
            />
          </div>
          <div className='sm:flex gap-6 sm:text-right text-center' >
            <div>
              <h2 className='text-white font-bold  lg:text-xl md:text-md sm:text-sm mb-5 sm:text-right text-center'>
                VENUE ADDRESS
              </h2>
              <ul className='text-[16px] text-gray-200'>
                <li>El-Moshir Tantawy Axis, Al Hay Al</li>
                <li>Asher, Nasr City, Cairo</li>
                <li>Governorate</li>
              </ul>
              <p className='mt-3 text-[18px] text-gray-200'>
                / (+202) 267 122 87
              </p>
            </div>
            <div className='lg:mt-0 mt-5 sm:text-right text-center'>
              <h2 className='text-white font-bold  lg:text-xl md:text-md sm:text-sm mb-5 sm:text-right text-center'>
                SOCIAL MEDIA
              </h2>
              <ul className='text-[16px] text-gray-200'>
                <li>You should connect social area</li>
                <li>for Any update</li>
              </ul>
              <div
                className='flex justify-center mt-4 gap-x-4 cursor-pointer'
                data-aos='fade-up-down'
                data-aos-duration='1200'>
                <Link
                  to='/#'
                  className=' border-[1.5px] border-white text-blue-400 p-3 hover:bg-white duration-200 ease-in-out rounded-full'>
                  <AiFillLinkedin size={25} />
                </Link>
                <Link
                  to='/#'
                  className=' text-red-500 border-[1.5px] border-white p-3 hover:bg-white duration-200 ease-in-out rounded-full'>
                  <AiOutlineMail size={25} />
                </Link>
                <Link
                  to='/#'
                  className='border-[1.5px] border-white text-blue-400 p-3 hover:bg-white duration-200 ease-in-out rounded-full'>
                  <BsFacebook size={25} />
                </Link>
                <Link
                  to='/#'
                  className='border-[1.5px] border-white text-green-400 p-3 hover:bg-white duration-200 ease-in-out rounded-full'>
                  <BsWhatsapp size={25} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center p-3 text-gray-200 font-serif lowercase'>
          2023 NILE TRADE FAIRS, ALL RIGHTS RESERVED. DEVELOPED BY
          <span className=' text-yellow-600'>HYPER DESIGN.</span>
        </div>
      </div>
    </div>
  );
}
