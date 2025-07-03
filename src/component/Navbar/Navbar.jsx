import React, { useEffect, useState } from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { FiX } from "react-icons/fi";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";




export function Navbar(){
    const [isOpen ,setIsOpen] = useState(false);
    const [activeColor , SetActiveColor]= useState("");
    const [scroll , setScroll] = useState(false);


    const handleMenuItemClick =(sectionId)=>{
        SetActiveColor(sectionId);
        setIsOpen(false);

        const section = document.getElementById(sectionId);
        if(section){
            section.scrollIntoView({behavior:"smooth"})
        }
    }
    useEffect(()=>{
        const handleScroll = ()=>{
            setScroll(window.scrollY > 50);
        }
        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener("scroll",handleScroll);
    },[]);
    const menuItems=[
        {id: "about" , label:"About"},
        {id: "skill" , label:"Skill"},
        {id: "project" , label:"Project"},
        {id: "education" , label:"Education"},
        {id: "contact" , label:"Contact"},
    ]
    return(
        <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw]
        ${!scroll ?"bg-[#050414]/30 backdrop-blur-md": "bg-transparent"}`}>
            <div  className="text-white py-5 flex justify-between items-center">
                <div className="text-lg font-semibold cursor-pointer">
                    <span className="text-[#8245ec]">&lt;</span>
                    <span className="text-white">Sanjay</span>
                    <span className="text-[#8245ec]">/</span>
                    <span className="text-white">Khandelwal</span>
                    <span className="text-[#8245ec]">&gt;</span>
                </div>
                <ul className="hidden md:flex space-x-8 text-gray-300">
                    {
                        menuItems.map((items)=><li key={items.id} className={`cursor-pointer hover:text-[#8245ec]
                         ${activeColor===items.id ? "text-[#8245ec]": ""}`}>
                         <button onClick={()=>handleMenuItemClick(items.id)}>{items.label}</button></li>)
                    }
                </ul>
                <div className="hidden md:flex space-x-4">
                    <a href="https://github.com/Sanjay-khandelwal"  target="_blank"
                    className="text-gray-300 hover:text-[#8245ec]"><IoLogoGithub /></a>
                     <a href="https://www.linkedin.com/in/sanjay-khandelwal-326667278" 
                      target="_blank"className="text-gray-300 hover:text-[#8245ec]"><FaLinkedin /></a>
                </div>
                <div className="md:hidden">
                    {
                        isOpen ? 
                        <button onClick={()=>setIsOpen(false)} className="text-gray-300 hover:text-[#8245ec]">
                            <FiX size={24} />
                        </button> :
                        <button onClick={()=>setIsOpen(true)} className="text-gray-300 hover:text-[#8245ec]">
                            <TfiMenuAlt size={24} />
                        </button>
                    }   
                </div>
            </div>
            {isOpen && (
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5
                 bg-[#050414]/50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg">
                    <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
                        {
                            menuItems.map((items)=><li key={items.id} className={`cursor-pointer hover:text-white
                             ${activeColor===items.id ? "text-[#8245ec]": ""}`}>
                             <button onClick={()=>handleMenuItemClick(items.id)}>{items.label}</button></li>)
                        }
                        <div className="flex space-x-4">
                             <a href="https://github.com/Sanjay-khandelwal" 
                              target="_blank"className="text-gray-300 hover:text-white"><IoLogoGithub /></a>
                             <a href="https://www.linkedin.com/in/sanjay-khandelwal-326667278" 
                             target="_blank"className="text-gray-300 hover:text-white"><FaLinkedin /></a>
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    )
}