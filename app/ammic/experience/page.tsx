import ExperienceCard from '@/components/experieceCard';

const ExperiencePage = () => {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto space-y-8">
   
        
      <ExperienceCard

        title="Senior Full Stack Engineer"
        company="Tech Innovators Inc."
        period="2021 – Present"
        location="American Nijar Dl Way"
        highlights={[
    "Built <strong>scalable web applications</strong> using Next.js and TypeScript",
    "Weorked"
   
  ]}
  skills={['TypeScript', 'Next.js', 'React', 'Node.js', 'AWS']}
  className="my-4" // Optional additional styling
/>
      </div>
    </div>
  );
};

export default ExperiencePage;





import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  skills: string[];
}