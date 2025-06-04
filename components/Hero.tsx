import { FiGithub, FiChevronDown } from "react-icons/fi"
import { PiEnvelopeSimple } from "react-icons/pi"
import { RiTwitterXLine } from "react-icons/ri"

export const Hero = () => {
    return (
        <div className="flex flex-col px-44 gap-4 pt-24 pb-4 items-center bg-[whitesmoke]">
        <p className="text-6xl grad-text font-bold">Full Stack Engineer</p>
        <p className="text-xl text-center">8 years of experience crafting scalable solutions with Python AI/ML, Flask, Django, Express, React, Next.js, and modern database technologies</p>
        <div className="flex items-center gap-4 mt-8">
            <button className="text-sm bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">View My Work</button>
            <button className="text-sm bg-white shadow-sm border border-gray-200 cursor-pointer px-4 py-2 rounded-md">Get In Touch</button>
        </div>
        <div className="flex text-xl items-center gap-4 mt-8">
            <button className="cursor-pointer">
                <FiGithub />
            </button>
             <button className="cursor-pointer">
                <RiTwitterXLine />
            </button>
             <button className="cursor-pointer">
                <PiEnvelopeSimple />
            </button>
        </div>
        <div className="flex items-center justify-center">
            <FiChevronDown className="text-2xl cursor-pointer animate-bounce mt-8" />
        </div>
       </div>
    )
}