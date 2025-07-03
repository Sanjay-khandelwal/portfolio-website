import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { MdDownloadForOffline } from "react-icons/md";
import Tilt from 'react-parallax-tilt';


export function About(){
    return(
        <>
          <section id="about" className="py-4 px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                <div className="md:w-1/2 text-left md:text-left mt-8 md:mt-0">
                <h1 className="text-3xl sm:text-3xl md:text-3xl font-bold text-white mb-2 leading-tight">
                  Hi, I am
                </h1>
                <h2 className="text-4xl sm:text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                  Sanjay Khandelwal
                </h2>
                <h3 className="text-xl sm:text-1xl md:text-2xl font-semibold mb-4 text-[#8245ec] leading-tight">
                  <span className="text-white">
                    i am a
                  </span>
                  <TypeAnimation
                    sequence={[
                      ' Web Developer', 1000,
                      ' Front-End Developer', 1000,
                      ' Backend in Progress', 1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className="text-[#8245ec]"
                    cursor-rendering="true"
                  />
                </h3>
                <p className='text-base sm:text-lg text-gray-400 mb-10'>
                  "I am a passionate Web Developer with a foundation in frontend 
                  technologies and a growing interest in backend development. 
                  I am currently enhancing my skills to become a full-stack developer 
                  capable of building complete and efficient web applications."
                </p>
                <a href="/abc.pdf" 
                  className='inline-block text-white py-3 px-5 rounded-full mt-5 text-lg font-bold transition
                  duration-300  hover:scale-105'
                  style={{
                    background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                    boxShadow: '0 4px 20px rgba(130, 69, 236, 0.5)',
                    textDecoration: 'none'
                  }}>
                  <MdDownloadForOffline className='inline-block mr-2 '/>
                  View My Resume
                </a>
              </div>
              <div className='md:w-1/2 flex justify-center md:justify-end'>
                <Tilt className='w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 border-4 border-purple-700 rounded-full'
                 tiltMaxAngleX={20}
                 tiltMaxAngleY={20}
                 perspective={1000}
                 transitionSpeed={1000}
                 scale={1.05}
                 gyroscope={true}
                 >
                  <img src="/myIdentity.png" alt="Sanjay Khandelwal"
                   className=" w-full h-full object-cover rounded-lg drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]" />
                </Tilt>
              </div>
            </div>
          </section>
        </>
    )
    };