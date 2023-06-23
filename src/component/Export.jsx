// Import Swiper React components
import React, {Component} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
 
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
 
// Import Swiper styles
import 'swiper/css';
 const ara = [
  {
    id:1,
    img: "https://www.papermideast.com/uploads/exhibtorlogo/source/92319.jpeg"

  },
  {
    id:2,
    img:"https://www.papermideast.com/uploads/exhibtorlogo/source/96646.jpeg"
    
  },
  {
    id:3,
   img:"https://www.papermideast.com/uploads/exhibtorlogo/source/45133.jpg"
    
  },
  {
    id:4,
    img:"https://www.papermideast.com/uploads/exhibtorlogo/source/39658.jpeg"
    
  }, {
    id:1,
    img: "https://www.papermideast.com/uploads/exhibtorlogo/source/92319.jpeg"

  },
  {
    id:2,
    img:"https://www.papermideast.com/uploads/exhibtorlogo/source/96646.jpeg"
    
  },
  {
    id:3,
   img:"https://www.papermideast.com/uploads/exhibtorlogo/source/45133.jpg"
    
  },
  {
    id:4,
    img:"https://www.papermideast.com/uploads/exhibtorlogo/source/39658.jpeg"
    
  },
  {
    id:1,
    img: "https://www.papermideast.com/uploads/exhibtorlogo/source/92319.jpeg"

  },
  {
    id:2,
    img:"https://www.papermideast.com/uploads/exhibtorlogo/source/96646.jpeg"
    
  },
  {
    id:3,
   img:"https://www.papermideast.com/uploads/exhibtorlogo/source/45133.jpg"
    
  },
  {
    id:4,
    img:"https://www.papermideast.com/uploads/exhibtorlogo/source/39658.jpeg"
    
  }, {
    id:1,
    img: "https://www.papermideast.com/uploads/exhibtorlogo/source/92319.jpeg"

  },
  {
    id:2,
    img:"https://www.papermideast.com/uploads/exhibtorlogo/source/96646.jpeg"
    
  },
  {
    id:3,
   img:"https://www.papermideast.com/uploads/exhibtorlogo/source/45133.jpg"
    
  },
  {
    id:4,
    img:"https://www.papermideast.com/uploads/exhibtorlogo/source/39658.jpeg"
    
  }
 ]

 class Export extends Component{
  render(){
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
  
  return (
     

    <div className='w-full h-auto    '>
      <div className=' max-w-screen-lg m-auto px-2'> 
      <h2 className='text-center lg:text-5xl text-3xl  font-bold p-5 mb-8 text-white'>OUR EXHIBITORS</h2>

    <Swiper {...settings}
     spaceBetween={10}
     slidesPerView={4}
    onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
       
      { 
        ara.map((item)=>(
          <SwiperSlide>
            <div className='space-y-4 mb-5 mt-5 px-2 border-[17px] hover:border-green-500 '>
            <img src={item.img} alt='im' className=' w-full h-36 object-cover' />
            </div>
          </SwiperSlide>
        ))
      }
     



      
     
    </Swiper>
    </div>
    </div>
  );
    }}
 export default Export   