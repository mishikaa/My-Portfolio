import React, { useState, useEffect } from 'react';
import { SectionWrapper } from '../higherOrderComponent';
import { fadeIn, textVariant } from '../utils/motion';
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { projects as allProjects } from '../constants';
import { Tilt } from 'react-tilt';
import { github, website } from '../assets';

const categories = ["All", "Web Development", "Blockchain", "AR Development"];

const categoryMap = {
  "Web Development": "webDevelopment",
  "Blockchain": "blockchain",
  "AR Development": "arDevelopment"
};

const ProjectCard = ({ index, name, description, tags, image, live_link, source_code_link }) => {
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full h-full"
    >
      <Tilt 
        className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-5 rounded-xl md:rounded-2xl w-full h-full
        hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 group
        border-2 border-gray-700/50 hover:border-purple-500/60 flex flex-col" 
        options={{ max: 25, scale: 1.02, speed: 450 }}
      >
        <div className='relative w-full h-[200px] overflow-hidden rounded-lg sm:rounded-xl flex-shrink-0'>
          <img 
            src={image} 
            alt={name} 
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' 
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
          
          {/* Action buttons */}
          <div className='absolute top-2 right-2 sm:top-3 sm:right-3 flex gap-1.5 sm:gap-2 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            {live_link && (
              <div 
                onClick={() => window.open(live_link, "_blank")} 
                className='bg-gradient-to-r from-purple-600 to-pink-600 w-9 h-9 sm:w-11 sm:h-11 rounded-full 
                flex justify-center items-center cursor-pointer hover:scale-110 
                transition-all duration-300 shadow-xl hover:shadow-purple-500/50 backdrop-blur-sm'
                title="View Live"
              >
                <img src={website} alt="live" className='w-2/3 h-2/3 object-contain filter brightness-0 invert' />
              </div>
            )}
            {source_code_link && (
              <div 
                onClick={() => window.open(source_code_link, "_blank")} 
                className='bg-gradient-to-r from-gray-700 to-gray-900 w-9 h-9 sm:w-11 sm:h-11 rounded-full 
                flex justify-center items-center cursor-pointer hover:scale-110 
                transition-all duration-300 shadow-xl hover:shadow-gray-500/50 backdrop-blur-sm'
                title="View Code"
              >
                <img src={github} alt="github" className='w-3/4 h-3/4 object-contain filter brightness-0 invert' />
              </div>
            )}
          </div>
        </div>
        
        <div className='mt-4 flex-1 flex flex-col'>
          <div className='flex items-start justify-between gap-2 mb-2'>
            <h3 className='text-white font-bold text-base sm:text-lg leading-tight 
            group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 
            group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 flex-1 break-words line-clamp-2'>
              {name}
            </h3>
            {(live_link || source_code_link) && (
              <div className='flex gap-1 flex-shrink-0'>
                {live_link && (
                  <span className='px-2 py-1 bg-green-500/20 text-green-400 text-[9px] sm:text-[10px] 
                  font-bold rounded border border-green-500/30 whitespace-nowrap'>
                    LIVE
                  </span>
                )}
                {source_code_link && (
                  <span className='px-2 py-1 bg-blue-500/20 text-blue-400 text-[9px] sm:text-[10px] 
                  font-bold rounded border border-blue-500/30 whitespace-nowrap'>
                    CODE
                  </span>
                )}
              </div>
            )}
          </div>
          <p className='mt-2 text-xs sm:text-sm leading-relaxed text-gray-300 break-words line-clamp-3 flex-1'>
            {description}
          </p>
        </div>
        
        <div className='mt-4 flex flex-wrap gap-1.5 sm:gap-2'>
          {tags.map((tag) => (
            <div key={tag.name} className='bg-gray-800/60 px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-md
            border border-gray-600/50 hover:border-purple-500/50 transition-colors duration-300
            hover:scale-105 transform'>
              <p className={`text-[10px] sm:text-[11px] font-semibold ${tag.color} break-words`}>{tag.name}</p>
            </div>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);

  // Filtering logic inside useEffect
  useEffect(() => {
    // Convert projects object to an array with category
    const projectList = Object.keys(allProjects).flatMap(category =>
      allProjects[category].map(project => ({ ...project, category }))
    );

    setFilteredProjects(
      selectedCategory === "All"
        ? projectList
        : projectList.filter(project => project.category === categoryMap[selectedCategory])
    );
  }, [selectedCategory]); // Runs whenever selectedCategory changes

  return (
    <div className="py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      <motion.div 
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="text-center"
      >
        <p className='text-gray-400 text-xs sm:text-sm md:text-base uppercase tracking-wider'>
          My work
        </p>
        <h2 className='text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 break-words'>
          Projects
        </h2>
      </motion.div>

      <div className='w-full'>
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)} 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base lg:text-[17px] 
          leading-[24px] sm:leading-[28px] lg:leading-[30px]
          max-w-3xl mx-auto text-center break-words'
        >
          Here are my projects that showcase my skills across different technologies and domains. 
          Each project demonstrates my problem&#8209;solving abilities and technical expertise.
        </motion.p>

        {/* Category Buttons */}
        <div className='flex flex-wrap justify-center gap-2 sm:gap-2.5 md:gap-3 mt-6 sm:mt-8 lg:mt-10 mb-4 sm:mb-5 md:mb-6 px-2 sm:px-0'>
          {categories.map(category => (
            <button
              key={category}
              className={`px-3 sm:px-4 md:px-6 lg:px-7 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-full 
              text-[10px] sm:text-xs md:text-sm lg:text-base 
              text-white font-semibold transition-all duration-300 
              border-2 hover:scale-105 active:scale-95 whitespace-nowrap ${
                selectedCategory === category 
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 border-purple-500 shadow-xl shadow-purple-500/30" 
                  : "bg-gray-800/70 border-gray-600 hover:bg-gray-700/70 hover:border-gray-500"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className='mt-10 sm:mt-12 lg:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-6 sm:gap-6 lg:gap-7 auto-rows-fr'>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-400 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "works");
