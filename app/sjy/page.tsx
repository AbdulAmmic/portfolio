"use client";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiChevronDown, FiGithub } from "react-icons/fi";
import { PiEnvelopeSimple } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";

export default function SjyPage() {
    const [activeTab, setActiveTab] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div>
       <Header isScrolled={isScrolled} activeTab={activeTab} setActiveTab={setActiveTab} title="Suleiman Jabir" />
       <Hero />

       <div className="flex flex-col px-4 pt-10 my-8">
        <div className="flex flex-col items-center gap-2">
            <p className="grad-text text-2xl font-bold text-center">Technical Expertise</p>
        <p>8 years of hands-on experience across the full technology stack</p>
        </div>
       </div>
        </div>
    )
}