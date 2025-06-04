"use client";
import Card from "@/components/card";
import ExperienceCard from "@/components/experieceCard";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import ProjectCard from "@/components/projects";
import { Section } from "@/components/Section";
import { techRoles, experiences, projects, contact } from "@/data";
import { useEffect, useState, useRef } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaBrain, FaChevronDown } from "react-icons/fa";
import { FiChevronDown, FiFacebook, FiGithub, FiInstagram } from "react-icons/fi";
import { PiEnvelopeSimple, PiMapPin, PiPhone } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";

const DynamicIconComponent = ({ name, className }: any) => {
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
  
  // Create refs for each section
  const homeRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Header scroll effect
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine which section is in view
      const scrollPosition = window.scrollY + 100; // Adding offset for header

      // Get positions of all sections
      const sections = [
        { id: "home", ref: homeRef },
        { id: "expertise", ref: expertiseRef },
        { id: "experience", ref: experienceRef },
        { id: "projects", ref: projectsRef },
        { id: "contact", ref: contactRef }
      ];

      for (const section of sections) {
        if (section.ref.current) {
          const { offsetTop, offsetHeight } = section.ref.current;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveTab(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle tab click to scroll to section
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    let ref;
    switch (tab) {
      case "home":
        ref = homeRef;
        break;
      case "expertise":
        ref = expertiseRef;
        break;
      case "experience":
        ref = experienceRef;
        break;
      case "projects":
        ref = projectsRef;
        break;
      case "contact":
        ref = contactRef;
        break;
      default:
        ref = homeRef;
    }

    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // Adjust for header height
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="overflow-x-hidden">
      <Header 
        isScrolled={isScrolled} 
        activeTab={activeTab} 
        setActiveTab={handleTabClick} 
        title="Abdul Mustapha" 
      />
      
      {/* Home Section */}
      <div ref={homeRef}>
        <Hero />
      </div>

      {/* Technical Expertise Section */}
      <div ref={expertiseRef}>
        <Section 
          theme="light" 
          title="Technical Expertise" 
          subtitle="8 years of hands-on experience across the full technology stack" 
          content={(
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grow gap-6 mt-10">
              {techRoles.map((role, index) => {
                const Icon = require("react-icons/fa")[role.icon];
                return (
                  <Card
                    key={index}
                    icon={Icon}
                    title={role.title}
                    items={role.items}
                  />
                );
              })}
            </div>
          )} 
        />
      </div>

      {/* Professional Journey Section */}
      <div ref={experienceRef}>
        <Section 
          theme="dark" 
          title="Professional Journey" 
          subtitle="8 years of growing expertise in full-stack development and AI/ML" 
          content={(
            <div className="flex ml-2 md:ml-10 py-0 px-2 md:px-4 border-l-2 border-blue-600 flex-col">
              {experiences.map((exp, index) => (
                <div className="flex items-start gap-4 mb-6" key={index}>
                  <span className="p-1 relative -right-4 md:-right-10 top-10 rounded-full bg-grad"></span>
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
              ))}
            </div>
          )} 
        />
      </div>

      {/* Projects Section */}
      <div ref={projectsRef}>
        <Section 
          theme="light" 
          title="Featured Projects" 
          subtitle="A showcase of my work across full-stack development and AI/ML" 
          content={(
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grow gap-6 mt-10">
              {projects.map((project, index) => (
                <ProjectCard
                  title={project.title}
                  key={index}
                  description={project.description}
                  technologies={project.technologies}
                  repoUrl={project.repoUrl}
                  demoUrl={project.demoUrl}
                />
              ))}
            </div>
          )} 
        />
      </div>

      {/* Contact Section */}
      <div ref={contactRef}>
        <Section 
          theme="dark" 
          title={contact.title} 
          subtitle={contact.subtitle} 
          content={(
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4">
              <div className="flex flex-col p-4 lg:p-6 w-full lg:w-auto">
                <p className="font-bold text-xl">Get In Touch</p>
                
                {Object.entries(contact.contactInfo).map(([key, info]) => (
                  <div key={key} className="flex gap-4 py-4 items-center">
                    <div className="flex gap-4 p-2 bg-grad rounded-md shadow-md">
                      <DynamicIconComponent name={info.icon} className="text-2xl text-white" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-gray-500 text-sm">{info.label}</p>
                      <a href={info.href} className="font-bold hover:underline break-all">
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col p-4 lg:p-6 w-full lg:w-auto">
                <p className="font-bold text-xl">Follow Me</p>
                <div className="flex flex-wrap items-center gap-4 py-4">
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
    </div>
  );
}