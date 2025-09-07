"use client"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { ImQuotesLeft } from 'react-icons/im';

const testimonials = [
    {
        message: "I had the pleasure of working with Uday at Optum, where we collaborated on full stack development across several key projects. Uday is a talented and dependable engineer with strong expertise in both backend technologies like Java, Spring Boot, and Kafka, as well as frontend frameworks such as React and Angular. He consistently demonstrated a deep understanding of microservices architecture and was instrumental in building scalable, secure APIs. On the frontend side, Uday showed great attention to detail and user experience, ensuring seamless integration between the UI and backend services. What I truly appreciated was his problem-solving mindset and willingness to support the team. He’s a great communicator, a proactive collaborator, and someone who always delivers high-quality work on time.",
        name: "JASPREET KAUR Sr Java Full stack developer"
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
    <Swiper 
      modules={[Autoplay]} 
      loop={false} 
      autoplay={{ delay: 10000, disableOnInteraction: true }}
      className='w-full max-w-[310px] md:max-w-[520px] bg-secondary rounded-lg'
      autoHeight={true}
    >
        {testimonials.map((testimonial, index) => {
            return <SwiperSlide key={index} className='h-auto'>
                <div className='flex px-8 py-6 gap-8'>
                    <ImQuotesLeft className='hidden xl:flex text-8xl text-accent flex-shrink-0'/>
                    <div className='flex flex-col gap-2 flex-grow'>
                        <p className='whitespace-normal'>{testimonial.message}</p>
                        <p className='self-end font-semibold text-accent'>{testimonial.name}</p>
                    </div>
                </div>
            </SwiperSlide>
        })}
    </Swiper>
  )
}

export default Testimonial