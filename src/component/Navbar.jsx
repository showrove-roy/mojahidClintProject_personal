import React,{useState} from 'react'
import {FaBars, FaTimes} from'react-icons/fa'
import {Link} from'react-scroll'
export default function Navbar() {
  const[nav,setNave] = useState(false)
  
  const links = [
    {
      id: 1,
      list: "home",
      link:'home'
    },
    {
      id: 2,
      list: "About",
      link:'About'
     
    },
    {
      id: 3,
      list: "Product",
      link:'Product'
     
    },
    {
      id: 4,
      lisit: 'exhbitors',
      link: "exhbitors",

    },
   
    {
      id:5,
      list:'Working day',
      link: "Working"
    },
    {
      id:8,
      list:'Contact',
      link:'contact',
     
    }
  ];
 
  return (
    <div>
    <div className='flex z-50 fixed justify-between items-center w-full h-20 bg-black   text-white '>
      <div>
        <img src="https://www.papermideast.com/uploads/configurationsite/source/29004.png" alt="" className=' h-16 '/>
      </div>
      <ul className='hidden md:flex mt-5'>

        {links.map(({list,link,id})=>{
        
          return(
            <li key={id} className='px-4 cursor-pointer capitalize font-medium hover:text-gray-400 hover:scale-110 duration-200 text-white'>
               <Link  to={link} smooth duration={300}>
                {list}
              </Link>
            
            </li>
            
          )
        })}
      </ul>
      <div onClick={()=>setNave(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
      {
        nav? <FaTimes /> : <FaBars />
      }
      </div>
      {
        nav &&(
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen z-30 bg-gradient-to-b from-black to-gray-800 text-white">
          {links.map(({ link, id }) => {
            return (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6  text-4xl text-gray-500"
              >
                <Link
                  onClick={() => setNave(!nav)}
                  to={link}
                  smooth
                  duration={300}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
        )
      }
    </div>
    </div>
  )
}
