"use client";
import Card from "@/components/card";
import ExperienceCard from "@/components/experieceCard";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import ProjectCard from "@/components/projects";
import { Section } from "@/components/Section";
import { techRoles, experiences, projects, contact } from "@/data";
import { useEffect, useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaBrain, FaChevronDown } from "react-icons/fa";
import { FiChevronDown, FiFacebook, FiGithub, FiInstagram } from "react-icons/fi";
import { PiEnvelopeSimple, PiMapPin, PiPhone } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";


const DynamicIconComponent = ({ name, className }:any) => {
  const icons = {
    PiEnvelopeSimple,
    PiPhone,
    PiMapPin,
    FiGithub,
    BsTwitterX,
    FiInstagram,
    FiFacebook
  };
  
  const IconComponent = (icons as any)[name];
  return <IconComponent className={className} />;
};

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
            <Section theme="light" title="Technical Expertise" subtitle="8 years of hands-on experience across the full technology stack" content={(
                <div className="grid grid-cols-1 md:grid-cols-3 grow gap-6 mt-10">
                    {
                        techRoles.map((role, index) => {
                            const Icon = require("react-icons/fa")[role.icon];
                            return (
                                <Card
                                    key={index}
                                    icon={Icon}
                                    title={role.title}
                                    items={role.items}
                                />
                            );
                        })
                    }
                </div>
            )} />

            <Section theme="dark" title="Professional Journey" subtitle="8 years of growing expertise in full-stack development and AI/ML" content={(
                <div style={{ paddingTop: "0px" }} className="flex ml-10 py-0 px-4 border-l-2 border-blue-600 flex-col">
                    {
                        experiences.map((exp, index) => {
                            // const Icon = require("react-icons/fa")[role.icon];
                            return (

                                <div className="flex items-start gap-4 mb-6" key={index}>
                                    <span className="p-1 relative right-10 top-10 rounded-full bg-grad"></span>
                                    <ExperienceCard

                                        title={exp.title}
                                        company={exp.company}
                                        period={exp.period}
                                        location={exp.location}
                                        highlights={exp.highlights}
                                        skills={exp.skills}
                                        className="my-4"
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            )} />

            <Section theme="light" title="Featured Projects" subtitle="A showcase of my work across full-stack development and AI/ML" content={(
                <div className="grid grid-cols-1 md:grid-cols-3 grow gap-6 mt-10">
                    {
                        projects.map((project, index) => {
                            // const Icon = require("react-icons/fa")[role.icon];
                            return (
                                <ProjectCard
                                    title={project.title}
                                    key={index}
                                    description={project.description}
                                    technologies={project.technologies}
                                    repoUrl={project.repoUrl}
                                    demoUrl={project.demoUrl}
                                />
                            );
                        })
                    }
                </div>
            )} />

           <Section 
  theme="dark" 
  title={contact.title} 
  subtitle={contact.subtitle} 
  content={(
    <div className="flex items-center justify-between gap-4">
      <div className="flex flex-col p-6">
        <p className="font-bold text-xl">Get In Touch</p>
        
        {Object.entries(contact.contactInfo).map(([key, info]) => (
          <div key={key} className="flex gap-4 py-4 items-center">
            <div className="flex gap-4 p-2 bg-grad rounded-md shadow-md">
              <DynamicIconComponent name={info.icon} className="text-2xl text-white" />
            </div>
            <div className="flex flex-col">
              <p className="text-gray-500 text-sm">{info.label}</p>
              <a href={info.href} className="font-bold hover:underline">
                {info.value}
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex flex-col p-6">
        <p className="font-bold text-xl">Follow Me</p>
        <div className="flex items-center gap-6 py-4">
          {contact.socialLinks.map((social) => (
            <a 
              key={social.name}
              href={social.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="cursor-pointer bg-white shadow-sm border border-gray-200 rounded-full p-2 hover:shadow-md"
            >
              <DynamicIconComponent 
                name={social.icon} 
                className={`text-2xl text-gray-500 ${social.color} transition-colors`} 
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  )}
/>

        </div>
    )
}