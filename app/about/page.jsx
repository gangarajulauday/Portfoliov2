'use client'

import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import Info from "@/components/Info";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
// import Blob from "@/components/Blob";
import Socials from "@/components/Socials";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn'}}}
      className="h-screen flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px]">
          <div className="hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative items-center gap-6">
            <Image 
              src="/assets/avatar.png"
              width={300}
              height={400}
              alt=""
              className="z-20 relative"
            />
            <div className="w-full h-[60px] absolute left-0 top-[340px] mb-10 right-0 bg-gradient-to-t from-primary via-primary/90 z-30"></div>
            {/* <div className="absolute top-[50px] -left-[80px] z-10">
              <Blob containerStyles="w-[420px] h-[420px]"/>
            </div> */}
            <Socials 
              containerStyles="flex gap-6 z-40 items-center justify-center w-full"
              iconStyles="w-[80px] h-[80px] text-[22px] text-accent hover:text-accent-hover transition-all flex items-center justify-center rounded-full cursor-pointer"
            />
          </div>
          <ScrollArea className="w-full h-[680px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>About me</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Uday Bhasker</span> Gangarajula
              </h2>
              <p className="max-w-[540px] mb-12">I am a passionate Full Stack Software Engineer with over 7 years of experience in developing web applications. Specializing in Java, Spring Boot, React.js, and cloud technologies, I've successfully delivered scalable solutions across fintech and healthcare domains. I thrive on solving complex problems and continuously learning new technologies to create efficient, user-centric applications. Currently focusing on cloud-native architectures and microservices development while maintaining a strong foundation in both frontend and backend technologies.</p>
              <div className="flex flex-col items-start gap-16">
                <Stats />
                <Testimonial />
                <Info />
                <Journey />
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  )
}

export default About;