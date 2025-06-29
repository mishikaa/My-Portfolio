import React from 'react'
import { technologies } from '../constants'
import BallCanvas from './canvas/Ball'
import { motion } from 'framer-motion'
import {fadeIn, textVariant} from '../utils/motion'
import { styles } from '../styles'
import { SectionWrapper } from '../higherOrderComponent'
import { crystal } from '../assets'

const Tech = () => {
  return (
    <div className="py-16 relative">
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Skillsets</h2>
      </motion.div>
      
      <motion.p 
        className='mt-6 text-secondary text-[17px] leading-[32px] max-w-3xl' 
        variants={fadeIn("","", 0.1, 1)}
      >
        I have a strong passion for learning new technologies, 
        which has allowed me to explore various domains and 
        become proficient in developing flexible and scalable 
        applications.
      </motion.p>
      
      <div className='mt-12 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 justify-items-center'>
        {technologies.map((tech, index) => (
          <motion.div 
            variants={fadeIn("up","spring", 0.05 * index, 0.25)}
            whileHover={{
              scale: 1.1,
              cursor: "pointer"
            }}
            className='relative group' 
            key={tech.name}
          >
            <div className='w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center
            bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500/50
            transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25'>
              <img 
                className='w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:animate-pulse' 
                src={tech.icon} 
                alt={tech.name} 
              />
            </div>
            
            <div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2 
            opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              <span className='px-2 py-1 rounded text-xs text-center 
              bg-gray-900 border border-gray-600 whitespace-nowrap'>
                {tech.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <img 
        className="absolute bottom-20 w-[25%] xl:-right-[15rem] lg:-right-[10rem] md:-right-[5rem] 
        -right-[2rem] opacity-20 hidden lg:block" 
        src={crystal} 
        alt="crystal" 
      />
    </div>
  )
}

export default SectionWrapper(Tech, "tech")