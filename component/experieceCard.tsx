import React from 'react';
import { FiMapPin, FiCalendar } from 'react-icons/fi';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  skills: string[];
  className?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  location,
  highlights,
  skills,
  className = ''
}) => {
  return (
    <div className={`max-w-2xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>

      <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-blue-700 font-bold">{company}</p>
        </div>
        <div className="sm:text-right">
          <div className="flex items-center justify-end gap-1 text-gray-600">
            <FiCalendar className="text-gray-400" />
            <span>{period}</span>
          </div>
          <div className="flex items-center justify-end gap-1 text-gray-500 text-sm">
            <FiMapPin className="text-gray-400" />
            <span>{location}</span>
          </div>
        </div>
      </div>

     
      <ul className="space-y-2 mb-4">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-start">
            <span className="text-gray-400 mr-2 mt-1">•</span>
            <span 
              className="text-gray-700"
              dangerouslySetInnerHTML={{ __html: highlight }}
            />
          </li>
        ))}
      </ul>

   
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-0.5 bg-gray-100 text-gray-800 rounded-full text-xs font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;  