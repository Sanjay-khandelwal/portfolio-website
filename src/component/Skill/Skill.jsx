import React from "react";
import skill from "./skill.json";

export const Skill = () => (
  <section
    id="skill"
    className="py-20 px-6 sm:px-10 lg:px-24 font-sans bg-skills-gradient clip-path-custom"
  >
    {/* ─── Section Header ─── */}
    <header className="max-w-4xl mx-auto text-center mb-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
        SKILLS
      </h2>
      <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-3 sm:mt-4" />
      <p className="text-gray-300 mt-4 sm:mt-5 text-base sm:text-lg leading-relaxed font-medium">
        I specialize in web development, crafting dynamic and responsive
        websites using modern technologies. From seamless UIs to robust
        back‑ends, my focus is on efficient, scalable, and visually engaging
        digital experiences.
      </p>
    </header>

    {/* ─── Timeline ─── */}
    <div className="relative">
      {/* Timeline Line: Left on mobile, centered on larger screens */}
      <div
        className="
          absolute top-0 left-4 h-full w-[2px] bg-white/70
          sm:left-1/2 sm:-translate-x-1/2
        "
      />

      {skill.map((item, i) => {
        const isRight = i % 2 === 0; // even => right, odd => left
        return (
          <div
            key={item.id}
            className="
              relative group mb-16 grid grid-cols-12 sm:gap-4
              pl-10 sm:pl-0
            "
          >
            {/* Timeline Dot */}
            <div
              className="
                absolute -left-[22px] top-1/2 -translate-y-1/2 z-20
                sm:left-1/2 sm:-translate-x-1/2
              "
            >
              <div className="w-11 h-11 rounded-full bg-gray-400 border-4 border-[#8245ec] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.header}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card Wrapper */}
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
                {/* Card Header */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden shrink-0">
                    <img
                      src={item.img}
                      alt={item.header}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                    {item.header}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>

                {/* Skills */}
                <div className="mt-4">
                  <h4 className="font-medium text-white mb-2">Skills</h4>
                  <ul className="flex flex-wrap gap-2">
                    {item.skills.map((s, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2
                         bg-[#8245ec] border border-gray-300 text-gray-100 px-3 
                         py-1 text-xs sm:text-sm rounded-lg transition-transform transform
                          hover:scale-105 hover:shadow-md duration-300 hover:bg-black"
                      >
                        <img
                          src={s.logo}
                          alt={s.name}
                          className="w-5 h-5 object-contain rounded-sm bg-white p-0.5 shadow-sm"
                        />
                        {s.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </section>
);
