import ProjectCard from "@/components/projects";



export default function Projects(){
    return(
  <ProjectCard
  title="Flutter Based Project"
  description="WebSocket-based chat app with real-time messaging, file sharing, and user authentication. Built with modern web technologies."
  technologies={['React', 'Socket.io', 'Express', 'MongoDB', 'JWT']}
  repoUrl="https://github.com/abdulAmmic"
  demoUrl="https:jshh.com"
/>
    );
}