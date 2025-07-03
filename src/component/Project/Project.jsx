import React, { useState } from "react";
import project from "./Project.json";
import { IoMdClose } from "react-icons/io";

export function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleOpenModel = (project) => {
    setSelectedProject(project);
  };
  const handleCloseModel = () => {
    setSelectedProject(null);
  };
  return (
    <section
      id="project"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Developed multiple responsive web applications using HTML, CSS,
          JavaScript, and React. Focused on clean UI, real-time API integration,
          and practical user functionality.
        </p>
      </div>
      <div className="grid gap-12 gird-cals-1 md:grid-cols-2 lg:grid-cals-3">
        {project.map((project) => {
          return (
            <div
              key={project.id}
              onClick={() => handleOpenModel(project)}
              className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl 
                     shadow-2xl overflow-hidden cursor-pointer
                      hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="p-4">
                <img
                  src={project.images}
                  alt={project.title}
                  className="w-full h-56 object-cover rounded-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 mb-4 pt-5 line-clamp-3">
                  {project.description}
                </p>
                <div className="mb-4">
                  {project.tag.map((tag, index) => {
                    return (
                      <span
                        key={index}
                        className="inline-block rounded-2xl bg-[#251f38] text-xs font-semibold text-purple-500 roundex-full px-2
                                     py-1 mr-2 mb-2 hover:scale-105 hover:bg-black hover:text-white border-2 hover:border-white"
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
          <div
            className="bg-gray-900 rounded-xl shadow-2xl
                 w-[90%] max-w-3xl  
                 max-h-[90vh] overflow-y-auto
                 relative"
          >
            <button
              onClick={handleCloseModel}
              className="absolute top-4 right-4 text-white text-3xl hover:text-purple-500"
            >
              <IoMdClose />
            </button>

            <div className="flex flex-col p-3 lg:p-4">
              <div className="flex justify-center mb-6">
                <img
                  src={selectedProject.images}
                  alt={selectedProject.title}
                  className="max-h-[60vh] w-full object-contain rounded-xl shadow-2xl"
                />
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {selectedProject.title}
              </h3>
              <p className="text-gray-400 lg:text-base text-l">
                {selectedProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tag.map((tag, index) => {
                  return (
                    <span
                      key={index}
                      className="inline-block rounded-2xl bg-[#251f38] text-xs font-semibold text-purple-500 roundex-full px-2
                                     py-1 mr-2 mb-2 hover:scale-105 hover:bg-black hover:text-white border-2 hover:border-white"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
              <div className="flex gap-6">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-purple-800 text-gray-300 w-full
               px-4 py-2 rounded-xl text-sm lg:text-base font-semibold transition-all duration-200 text-center"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" hover:bg-gray-800 bg-purple-800 text-gray-300 w-full
               px-4 py-2 rounded-xl text-sm lg:text-base font-semibold transition-all duration-200 text-center"
                  >
                    View Live
                  </a>
                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
