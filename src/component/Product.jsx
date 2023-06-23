import React from "react";

export default function Tree() {
  const array = [
    {
      id: 1,
      img: "https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.webp?b=1&s=170667a&w=0&k=20&c=qHX9JbVQRq0We9xvd5qUN1nW5lMD8nAeT5Ts4gKYBg8",
      title:
        "https://www.istockphoto.com/photo/dietary-fiber-food-shot-from-above-gm1457889022-492584172#:~:text=food%20shot%20from-,above%20stock%20photo,-...",
      paragraph:
        "Overhead view of a large group of food with high content of dietary fiber. The composition includes berrie",
    },
    {
      id: 1,
      img: "https://media.istockphoto.com/id/1457889022/photo/dietary-fiber-food-shot-from-above.jpg?s=612x612&w=is&k=20&c=-qSoaRuz_x88oyYfAcj-U5tFGSL30IkejEjOJrcTxXg=",
      title:
        "https://www.istockphoto.com/photo/dietary-fiber-food-shot-from-above-gm1457889022-492584172#:~:text=food%20shot%20from-,above%20stock%20photo,-...",
      paragraph:
        "Overhead view of a large group of food with high content of dietary fiber. The composition includes berrie",
    },
    {
      id: 1,
      img: "https://media.istockphoto.com/id/1457889022/photo/dietary-fiber-food-shot-from-above.jpg?s=612x612&w=is&k=20&c=-qSoaRuz_x88oyYfAcj-U5tFGSL30IkejEjOJrcTxXg=",
      title:
        "https://www.istockphoto.com/photo/dietary-fiber-food-shot-from-above-gm1457889022-492584172#:~:text=food%20shot%20from-,above%20stock%20photo,-...",
      paragraph:
        "Overhead view of a large group of food with high content of dietary fiber. The composition includes berrie",
    },
    {
      id: 1,
      img: "https://media.istockphoto.com/id/1457889022/photo/dietary-fiber-food-shot-from-above.jpg?s=612x612&w=is&k=20&c=-qSoaRuz_x88oyYfAcj-U5tFGSL30IkejEjOJrcTxXg=",
      title:
        "https://www.istockphoto.com/photo/dietary-fiber-food-shot-from-above-gm1457889022-492584172#:~:text=food%20shot%20from-,above%20stock%20photo,-...",
      paragraph:
        "Overhead view of a large group of food with high content of dietary fiber. The composition includes berrie",
    },
    {
      id: 1,
      img: "https://media.istockphoto.com/id/1457889022/photo/dietary-fiber-food-shot-from-above.jpg?s=612x612&w=is&k=20&c=-qSoaRuz_x88oyYfAcj-U5tFGSL30IkejEjOJrcTxXg=",
      title:
        "https://www.istockphoto.com/photo/dietary-fiber-food-shot-from-above-gm1457889022-492584172#:~:text=food%20shot%20from-,above%20stock%20photo,-...",
      paragraph:
        "Overhead view of a large group of food with high content of dietary fiber. The composition includes berrie",
    },

    {
      id: 1,
      img: "https://media.istockphoto.com/id/1457889022/photo/dietary-fiber-food-shot-from-above.jpg?s=612x612&w=is&k=20&c=-qSoaRuz_x88oyYfAcj-U5tFGSL30IkejEjOJrcTxXg=",
      title:
        "https://www.istockphoto.com/photo/dietary-fiber-food-shot-from-above-gm1457889022-492584172#:~:text=food%20shot%20from-,above%20stock%20photo,-...",
      paragraph:
        "Overhead view of a large group of food with high content of dietary fiber. The composition includes berrie",
    },
    {
      id: 1,
      img: "https://media.istockphoto.com/id/1457889022/photo/dietary-fiber-food-shot-from-above.jpg?s=612x612&w=is&k=20&c=-qSoaRuz_x88oyYfAcj-U5tFGSL30IkejEjOJrcTxXg=",
      title:
        "https://www.istockphoto.com/photo/dietary-fiber-food-shot-from-above-gm1457889022-492584172#:~:text=food%20shot%20from-,above%20stock%20photo,-...",
      paragraph:
        "Overhead view of a large group of food with high content of dietary fiber. The composition includes berrie",
    },
    {
      id: 1,
      img: "https://media.istockphoto.com/id/1457889022/photo/dietary-fiber-food-shot-from-above.jpg?s=612x612&w=is&k=20&c=-qSoaRuz_x88oyYfAcj-U5tFGSL30IkejEjOJrcTxXg=",
      title:
        "https://www.istockphoto.com/photo/dietary-fiber-food-shot-from-above-gm1457889022-492584172#:~:text=food%20shot%20from-,above%20stock%20photo,-...",
      paragraph:
        "Overhead view of a large group of food with high content of dietary fiber. The composition includes berrie",
    },
  ];
  return (
    <section
      className='w-full h-auto bg-slate-600 group:'
      name='product'>
      <h2 className='text-center text-4xl py-5 font-bold text-white gap-4'>
        Our Product
      </h2>
      <div className=' max-w-screen-lg m-auto mt-10'>
        <div class='  h-auto grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1   gap-x-20 text-white m-auto'>
          {array.map((item, index) => {
            return (
              <div class='w-[270px]  h-[400px] bg-transparent cursor-pointer group perspective m-auto'>
                <div class='relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000'>
                  <div class='absolute bg-white backface-hidden border-2 rounded-md'>
                    <img
                      src='https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.webp?b=1&s=170667a&w=0&k=20&c=qHX9JbVQRq0We9xvd5qUN1nW5lMD8nAeT5Ts4gKYBg8='
                      class='w-full h-full'
                      alt=''
                    />
                    <h2 className='p-2 text-center text-[22px] font-extralight border-b-2 text-gray-500 '>
                      Blotting Paper
                    </h2>
                    <p className=' text-[16px] text-gray-500 text-center font-serif pb-10'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae adipisci maiores cum reprehenderit quidem velit
                      ullam fuga dolores mollitia suscipit.
                    </p>
                  </div>
                  <div class='absolute my-rotate-y-180 backface-hidden w-[270px]  h-auto bg-gray-100 overflow-hidden rounded-md'>
                    <div class='text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-16'>
                      <img
                        src='https://media.istockphoto.com/id/1457889029/photo/group-of-food-with-high-content-of-dietary-fiber-arranged-side-by-side.webp?b=1&s=170667a&w=0&k=20&c=qHX9JbVQRq0We9xvd5qUN1nW5lMD8nAeT5Ts4gKYBg8='
                        class='w-full h-fit'
                        alt=''
                      />
                      <h2 className='p-2 text-center text-[22px] font-extralight border-b-2 text-gray-500 '>
                        Blotting Paper
                      </h2>
                      <p className=' text-[14px] text-gray-500 text-center font-serif pb-5'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae adipisci maiores cum reprehenderit quidem
                        velit ullam fuga dolores mollitia suscipit.
                      </p>
                      <button class='bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-6 scale-0 group-hover:scale-125'>
                        Watch Now
                      </button>
                    </div>
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
