import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-scroll";
export default function Navbar() {
  const [nav, setNave] = useState(false);

  useEffect(() =>{
    if(nav === false){
      document.body.style.overflow = 'unset';
    }else{
      document.body.style.overflow = 'hidden';
    }
    
  },[nav])

  const links = [
    {
      id: 1,
      list: "home",
      link: "home",
    },
    {
      id: 2,
      list: "About",
      link: "About",
    },
    {
      id: 3,
      list: "Product",
      link: "Product",
    },
    {
      id: 4,
      list: "exhbitors",
      link: "exhbitors",
    },

    {
      id: 5,
      list: "Working day",
      link: "Working",
    },
    {
      id: 8,
      list: "Contact",
      link: "contact",
    },
  ];

  return (
    <div>
      <div className='flex z-[100] fixed justify-between items-center w-full h-20 bg-black   text-white '>
        <div className="z-50">
          <img
            src='https://www.papermideast.com/uploads/configurationsite/source/29004.png'
            alt=''
            className='h-16 z-50'
          />
        </div>
        <ul className='hidden md:flex'>
          {links.map(({ list, link, id }) => {
            return (
              <li
                key={id}
                className='px-4 cursor-pointer capitalize font-medium hover:text-gray-400 hover:scale-110 duration-200 text-white'>
                <Link to={link} smooth duration={300}>
                  {list}
                </Link>
              </li>
            );
          })}
        </ul>
        <div
          onClick={() => setNave(!nav)}
          className='cursor-pointer pr-4 z-50 text-gray-500 md:hidden'>
          {nav ? <FaTimes /> : <FaBars />}
        </div>
        {nav && (
          <div className="absolute top-20 left-0 w-full h-screen z-0 bg-gradient-to-b from-black to-gray-800 text-white md:hidden overflow-scroll">
           <div className="relative">
           <ul className="w-full">
            {links.map(({ link, id }) => {
                return (
                  <li
                    key={id}
                    className='px-4 cursor-pointer capitalize py-2 text-2xl text-gray-500'>
                    <Link
                      onClick={() => setNave(!nav)}
                      to={link}
                      smooth
                      duration={300}>
                      {link}
                    </Link>
                  </li>
                );
              })}
            </ul>
           </div>
          </div>
        )}
      </div>
    </div>
  );
}
