import React from 'react'
import Navbar from'../component/Navbar';
import Slide from'../component/Home';
import Fotter from '../component/Fotter';
// import Export from'../component/Export';
import About from '../component/About';
import StragyandEnvironment from '../component/StragyandEnvironment';

import Product from '../component/Product';
import Contact from '../component/Contact';
import Exhitors from'../component/Exhbitors';
import Working from '../component/Working';
 
 
 

export default function Home() {
  return (
    <div className='w-full h-auto bg-slate-600 overflow-x-hidden'>
       <Navbar />
      <Slide /> 
        <About /> 
       
         <StragyandEnvironment />
         <Product /> 
         
         <Exhitors />
         <Working />
       <Contact /> 
          
         
        <Fotter />
       
      
    </div>
  )
}
