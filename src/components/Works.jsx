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
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt 
        className="bg-tertiary p-5 rounded-2xl w-full max-w-[360px] mx-auto
        hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300
        border border-gray-700 hover:border-purple-500/50" 
        options={{ max: 45, scale: 1, speed: 450 }}
      >
        <div className='relative w-full h-[230px] overflow-hidden rounded-lg'>
          <img 
            src={image} 
            alt={name} 
            className='w-full h-full object-cover transition-transform duration-300 hover:scale-110' 
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
          
          {/* Action buttons */}
          <div className='absolute top-3 right-3 flex gap-2'>
            {live_link && (
              <div 
                onClick={() => window.open(live_link, "_blank")} 
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center 
                cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg'
              >
                <img src={website} alt="live" className='w-2/3 h-2/3 object-contain' />
              </div>
            )}
            {source_code_link && (
              <div 
                onClick={() => window.open(source_code_link, "_blank")} 
                className='black-gradient w-10 h-10 rounded-full flex justify-center items-center 
                cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg'
              >
                <img src={github} alt="github" className='w-3/4 h-3/4 object-contain' />
              </div>
            )}
          </div>
        </div>
        
        <div className='mt-5 text-secondary'>
          <h3 className='text-white font-bold text-[20px] leading-tight'>{name}</h3>
          <p className='mt-2 text-[14px] leading-relaxed line-clamp-3'>{description}</p>
        </div>
        
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <div key={tag.name} className='bg-zinc-900/80 px-3 py-1 rounded-full border border-gray-600'>
              <p className={`text-[12px] font-medium ${tag.color}`}>{tag.name}</p>
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
    <div className="py-16">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='w-full'>
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)} 
          className='mt-3 text-secondary text-[17px] leading-[30px] max-w-3xl'
        >
          Here are my projects that showcase my skills across different technologies and domains. 
          Each project demonstrates my problem-solving abilities and technical expertise.
        </motion.p>

        {/* Category Buttons */}
        <div className='flex flex-wrap justify-center gap-3 mt-8 mb-4'>
          {categories.map(category => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full text-white font-medium transition-all duration-300 
              border-2 hover:scale-105 ${
                selectedCategory === category 
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 border-purple-500 shadow-lg shadow-purple-500/25" 
                  : "bg-gray-800/50 border-gray-600 hover:bg-gray-700/50 hover:border-gray-500"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center'>
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
  );
};

export default SectionWrapper(Works, "works");
