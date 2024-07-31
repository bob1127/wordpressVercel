  
  
  
  
"use client"
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const myLoader01 = ({ src, width, quality, placeholder }) => {
    return `https://cdn1.beams.co.jp/special/kids_summer_2024/assets/images/chapter_1/${src}?w=${width}?p=${placeholder}`
}
const food01 = ({ src, width, quality, placeholder }) => {
    return `https://cdn1.beams.co.jp/special/kids_summer_2024/assets/images/chapter_1/${src}?w=${width}?p=${placeholder}`
}
export default () => {
    // const sliderRef = useRef(null);
    // const handlePrev = useCallback(() => {
    //     if (!sliderRef.current) return;
    //     sliderRef.current.swiper.slidePrev();
    // }, []);

    // const handleNext = useCallback(() => {
    //     if (!sliderRef.current) return;
    //     sliderRef.current.swiper.slideNext();
    // }, []);

    return (
        <div className=' w-full md:w-[500px] lg:w-[600px] xl:w-[1300px]  m-0 p-0'>
           
            <Swiper
            data-aos="zoom-in-up" data-aos-duration="750" data-aos-delay="450"
            
               
             
                // install Swiper modules
              
  
  breakpoints={{
                    0: {
                        slidesPerView: 3,
                    },
                       500: {
                        slidesPerView: 3,
                    },
                    768: { 
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                modules={[Navigation, Pagination,  A11y]}
                spaceBetween={1}
                className='m-0 p-0'
              

                navigation
                pagination={{ clickable: false }}
           
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >

                <SwiperSlide className=' w-full  ' >




               
                </SwiperSlide>
                         <SwiperSlide className=' bg-white'>


               
                </SwiperSlide>
                          <SwiperSlide className=' bg-white'>


                </SwiperSlide>
                 <SwiperSlide className=' bg-white'>



                  

               
                </SwiperSlide>
                 <SwiperSlide className=' bg-white'>


               
                </SwiperSlide>
                 <SwiperSlide className=' bg-white'>



               
                </SwiperSlide>

                 <SwiperSlide className=' bg-white'>
                    <div className="wrap">
                        <h1 className='text-[20px] font-bold'>title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus hic dolorum tenetur beatae temporibus consequuntur! Deleniti ipsum cumque labore corrupti, necessitatibus explicabo itaque molestiae. Fugit eligendi reprehenderit eum voluptatem placeat?</p>
                        <img src="http://localhost:3000/_next/image?url=https%3A%2F%2Fi0.wp.com%2Fblog.ultraehp.com%2Fwp-content%2Fuploads%2F2024%2F07%2Fcm_bnr28.jpg%3Ffit%3D1340%252C754%26ssl%3D1&w=3840&q=75" className='w-full md:w-[300px]' alt="" />
                    </div>


               
                </SwiperSlide>

                         
         
            </Swiper>
            {/* <div className="prev-arrow" onClick={handlePrev} />
            <div className="next-arrow" onClick={handleNext} /> */}
        </div>


        
    );
};
  
  
  
  
  
  