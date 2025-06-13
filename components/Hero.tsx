import { FiGithub, FiChevronDown } from "react-icons/fi";
import { PiEnvelopeSimple } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { motion } from "framer-motion";

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2 }
  };

  const buttonTap = {
    scale: 0.98
  };

  return (
    <div className="min-h-screen flex flex-col px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 gap-4 pt-24 pb-16 items-center bg-gradient-to-br from-[#f9f9f9] to-[#e8e8e8]">
      <motion.div 
        className="flex flex-col items-center gap-6 max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-800"
        >
          Full Stack Engineer
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl"
        >
          8 years of experience crafting scalable solutions with Python AI/ML, Flask, Django, Express, React, Next.js, and modern database technologies
        </motion.p>
        
        <motion.div 
          className="flex items-center gap-4 mt-8 flex-wrap justify-center"
     
        >
          <motion.button 
            className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg cursor-pointer shadow-lg hover:shadow-blue-500/20 transition-all duration-300"
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            View My Work
          </motion.button>
          <motion.button 
            className="text-sm bg-white hover:bg-gray-50 shadow-sm border border-gray-200 cursor-pointer px-6 py-3 rounded-lg hover:shadow-md transition-all duration-300"
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            Get In Touch
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="flex text-2xl items-center gap-6 mt-12 text-gray-600"
        >
          <motion.a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-gray-900 transition-colors"
            whileHover={{ y: -3 }}
          >
            <FiGithub />
          </motion.a>
          <motion.a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-pointer hover:text-black transition-colors"
            whileHover={{ y: -3 }}
          >
            <RiTwitterXLine />
          </motion.a>
          <motion.a 
            href="mailto:example@example.com" 
            className="cursor-pointer hover:text-red-500 transition-colors"
            whileHover={{ y: -3 }}
          >
            <PiEnvelopeSimple />
          </motion.a>
        </motion.div>
        
        <motion.div 
          className="mt-16"
          animate={{
            y: [0, 10, 0],
            transition: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }
          }}
        >
          <FiChevronDown className="text-3xl text-gray-500 cursor-pointer" />
        </motion.div>
      </motion.div>
    </div>
  );
};