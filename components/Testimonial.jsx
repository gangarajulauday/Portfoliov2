"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from 'react-icons/im';

const testimonials = [
    {
        message: "1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, pariatur!",
        name: "ABC XYZ"
    },
    {
        message: "2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, pariatur!",
        name: "ABC XYZ"
    },
    {
        message: "3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, pariatur!",
        name: "ABC XYZ"
    }
]

const Testimonial = () => {
  return (
    <Swiper modules={[Autoplay]} loop={false} autoplay={{ delay: 4000, disableOnInteraction: false }}
    className='w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg'
    >
        {testimonials.map((testimonial, index) => {
            return <SwiperSlide key={index}>
                <div className='flex px-8 py-6 gap-8'>
                    <ImQuotesLeft className='hidden xl:flex text-8xl text-accent'/>
                    <div className='flex flex-col gap-2'>
                        <p>{testimonial.message}</p>
                        <p className='self-end font-semibold text-accent'>{testimonial.name}</p>
                    </div>
                </div>
            </SwiperSlide>
        })}
    </Swiper>
  )
}

export default Testimonial