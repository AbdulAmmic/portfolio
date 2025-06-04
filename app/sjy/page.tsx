"use client";
import Card from "@/components/card";
import ExperienceCard from "@/components/experieceCard";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { useEffect, useState } from "react";
import { FaBrain, FaChevronDown } from "react-icons/fa";
import { FiChevronDown, FiGithub } from "react-icons/fi";
import { PiEnvelopeSimple } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";

export default function SjyPage() {
    const [activeTab, setActiveTab] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const techRoles = [
  {
    icon: "FaBrain",
    title: "AI/ML Engineer",
    items: [
      "Python", 
      "TensorFlow", 
      "PyTorch",
      "Scikit-learn",
      "Keras",
      "OpenCV",
      "NLP",
      "Computer Vision"
    ]
  },
  {
    icon: "FaDesktop",
    title: "Frontend Developer",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Vue",
      "Angular",
      "HTML/CSS",
      "Next.js",
      "Tailwind CSS"
    ]
  },
  {
    icon: "FaServer",
    title: "Backend Developer",
    items: [
      "Node.js",
      "Express",
      "Django",
      "Flask",
      "Spring Boot",
      "Ruby on Rails",
      "Go",
      "GraphQL"
    ]
  },
  {
    icon: "FaDatabase",
    title: "Database & ORM",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Firebase",
      "SQLAlchemy",
      "Sequelize",
      "Prisma"
    ]
  },
  {
    icon: "FaTools",
    title: "DevOps and Tools",
    items: [
      "Docker",
      "Kubernetes",
      "AWS",
      "Azure",
      "CI/CD",
      "Terraform",
      "Ansible",
      "Jenkins"
    ]
  },
  {
    icon: "FaProjectDiagram",
    title: "Architecture",
    items: [
      "Microservices",
      "Monolith",
      "Serverless",
      "REST API",
      "SOA",
      "Event-Driven",
      "CQRS",
      "DDD"
    ]
  }
];

const experiences = [
  {
    title: "Junior Frontend Engineer",
    company: "Tech Innovators Inc.",
    period: "2017 – 2018",
    location: "American Nijar Dl Way",
    highlights: [
      "Developed responsive websites using <strong>HTML5, CSS3, and vanilla JavaScript</strong>",
      "Implemented UI designs with pixel-perfect accuracy",
      "Optimized frontend performance for better user experience"
    ],
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    className: "my-4"
  },
  {
    title: "Python Developer",
    company: "Tech Innovators Inc.",
    period: "2018 – 2019",
    location: "American Nijar Dl Way",
    highlights: [
      "Developed Python scripts for <strong>data processing and automation</strong>",
      "Built CLI tools to improve team productivity",
      "Implemented web scrapers for data collection"
    ],
    skills: ['Python', 'Pandas', 'BeautifulSoup', 'Automation'],
    className: "my-4"
  },
  {
    title: "AI/ML Engineer",
    company: "Tech Innovators Inc.",
    period: "2019 – 2020",
    location: "American Nijar Dl Way",
    highlights: [
      "Developed <strong>machine learning models</strong> for predictive analytics",
      "Implemented computer vision solutions using OpenCV",
      "Built NLP pipelines for text classification"
    ],
    skills: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'NLP'],
    className: "my-4"
  },
  {
    title: "Junior Backend Engineer",
    company: "Tech Innovators Inc.",
    period: "2019 – 2021",
    location: "American Nijar Dl Way",
    highlights: [
      "Built RESTful APIs using <strong>Flask and Django</strong>",
      "Implemented database solutions with MongoDB",
      "Developed authentication and authorization systems"
    ],
    skills: ['Python', 'Flask', 'Django', 'MongoDB', 'REST API'],
    className: "my-4"
  },
  {
    title: "Senior Frontend Engineer",
    company: "Tech Innovators Inc.",
    period: "2021 – 2022",
    location: "American Nijar Dl Way",
    highlights: [
      "Led development of <strong>Next.js applications</strong> with TypeScript",
      "Implemented state management solutions with Redux",
      "Optimized applications for SEO and performance"
    ],
    skills: ['React', 'Next.js', 'TypeScript', 'Redux', 'Tailwind CSS'],
    className: "my-4"
  },
  {
    title: "Senior Backend Engineer",
    company: "Tech Innovators Inc.",
    period: "2022 – 2023",
    location: "American Nijar Dl Way",
    highlights: [
      "Designed and implemented <strong>scalable backend systems</strong> with Express",
      "Managed relational databases including MySQL and PostgreSQL",
      "Implemented ORM solutions with Prisma and Drizzle",
      "Developed Next.js API routes for full-stack applications"
    ],
    skills: ['Node.js', 'Express', 'MySQL', 'PostgreSQL', 'Prisma', 'Drizzle', 'NextAPI'],
    className: "my-4"
  },
  {
    title: "Senior Full Stack Engineer",
    company: "Tech Innovators Inc.",
    period: "2021 – Present",
    location: "American Nijar Dl Way",
    highlights: [
      "Built <strong>scalable web applications</strong> using Next.js and TypeScript",
      "Architected full-stack solutions with React frontends and Node.js backends",
      "Implemented CI/CD pipelines for automated deployments",
      "Led cross-functional teams in agile development environment"
    ],
    skills: ['TypeScript', 'Next.js', 'React', 'Node.js', 'AWS', 'Docker', 'CI/CD'],
    className: "my-4"
  }
];
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
       )}/>

       <Section theme="dark" title="Professional Journey" subtitle="8 years of growing expertise in full-stack development and AI/ML" content={(
         <div style={{paddingTop: "0px"}} className="flex ml-10 py-0 px-4 border-l-2 border-blue-600 flex-col">
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
  className="my-4" // Optional additional styling
/>
                         </div>
                    );
                })
             }
        </div>
       )}/>

        </div>
    )
}