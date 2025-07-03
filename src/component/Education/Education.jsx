import React from "react";
import education from './Education.json';

export function Education(){
    
    return(
        <section
    id="education"
    className="py-20 px-6 sm:px-10 lg:px-24 font-sans bg-skills-gradient clip-path-custom"
  >
   
    <header className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        EDUCATION
      </h2>
      <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-3 sm:mt-4" />
      <p className="text-gray-300 mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed font-medium">
       I completed my schooling from Geeta Anand Senior Secondary School, Sheoganj, Sirohi, Rajasthan,
        with a focus on science. Currently, I am pursuing B.Tech in Computer Science
         from Silver Oak University, Ahmedabad, where I am building strong skills 
         in web development and core computer science subjects.
      </p>
    </header>

 
    <div className="relative">
   
      <div
        className="
          absolute top-0 left-4 h-full w-[2px] bg-white/70
          sm:left-1/2 sm:-translate-x-1/2
        "
      />

      {education.map((education, i) => {
        const isRight = i % 2 !== 0; 
        return (
          <div
            key={education.id}
            className="
              relative group mb-16 grid grid-cols-12 sm:gap-4
              pl-10 sm:pl-0
            "
          >
          
            <div
              className="
                absolute -left-[22px] top-1/2 -translate-y-1/2 z-20
                sm:left-1/2 sm:-translate-x-1/2
              "
            >
              <div className="w-11 h-11 rounded-full bg-gray-400 border-4 border-[#8245ec] overflow-hidden">
                <img
                  src={education.img}
                  alt={education.img}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              className={`
                col-span-12 sm:col-span-6 flex
                ${
                  isRight
                    ? "sm:col-start-7 justify-start"
                    : "sm:col-start-1 sm:justify-end"
                }
              `}
            >
              <div
                className="w-full max-w-[450px] bg-gray-900 backdrop-blur-md border
               border-white/20 shadow-[0_0_30px_rgba(130,69,236,0.35)] rounded-2xl
                p-5 sm:p-7 lg:p-9 transition-transform duration-300 group-hover:scale-[1.02] z-10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden shrink-0">
                    <img
                      src={education.img}
                      alt={education.img}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                    {education.school}
                  </h3>
                </div>
                <p className="mt-4 text-purple-300 text-sm sm:text-base leading-relaxed">
                 Date: {education.date} </p>
                <p className="mt-4 text-purple-300 text-sm sm:text-base leading-relaxed">
                 { education.id!==3 ?  `Percentage: ${education.percentage}`: `Grade: ${education.percentage}`  }
                </p>
                <p className="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed">
                   {education.description}
                </p>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
    )
}