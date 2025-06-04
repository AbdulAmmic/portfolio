import React from 'react';
import { FiMessageSquare, FiPaperclip, FiUser, FiCode, FiExternalLink } from 'react-icons/fi';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  repoUrl,
  demoUrl,
  className = ''
}) => {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300 ${className}`}>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
            <FiMessageSquare size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        
        <p className="text-gray-600 mb-5">{description}</p>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">FEATURES</h4>
          <ul className="flex flex-wrap gap-2">
            <li className="flex items-center gap-1 px-3 py-1 bg-gray-50 rounded-full text-sm text-gray-700">
              <FiMessageSquare size={14} /> Real-time messaging
            </li>
            <li className="flex items-center gap-1 px-3 py-1 bg-gray-50 rounded-full text-sm text-gray-700">
              <FiPaperclip size={14} /> File sharing
            </li>
            <li className="flex items-center gap-1 px-3 py-1 bg-gray-50 rounded-full text-sm text-gray-700">
              <FiUser size={14} /> User authentication
            </li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-500 mb-2">TECH STACK</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3">
          {repoUrl && (
            <a 
              href={repoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              <FiCode /> Code
            </a>
          )}
          {demoUrl && (
            <a 
              href={demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;