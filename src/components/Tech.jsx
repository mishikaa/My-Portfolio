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
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <motion.div 
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <h2 className='text-white font-black text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left'>
          Skillsets
        </h2>
      </motion.div>
      
      <motion.p 
        className='mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base lg:text-[17px] 
        leading-[26px] sm:leading-[28px] lg:leading-[32px]
        max-w-3xl text-center lg:text-left mx-auto lg:mx-0' 
        variants={fadeIn("","", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        Proficient in modern technologies spanning <strong>AI/ML, Full-Stack Development, Cloud Infrastructure,</strong> and <strong>Blockchain</strong>. 
        Experienced in building production-grade enterprise applications with a focus on scalability and performance.
      </motion.p>

      {/* Key Technology Categories */}
      <div className='mt-6 sm:mt-8 flex flex-wrap gap-3 justify-center lg:justify-start'>
        <span className='px-4 py-2 bg-purple-500/20 text-purple-300 text-xs sm:text-sm 
        font-semibold rounded-full border border-purple-500/30'>
          ⚡ AI/LLM Engineering
        </span>
        <span className='px-4 py-2 bg-blue-500/20 text-blue-300 text-xs sm:text-sm 
        font-semibold rounded-full border border-blue-500/30'>
          🚀 Full-Stack Development
        </span>
        <span className='px-4 py-2 bg-green-500/20 text-green-300 text-xs sm:text-sm 
        font-semibold rounded-full border border-green-500/30'>
          ☁️ Cloud & DevOps
        </span>
        <span className='px-4 py-2 bg-orange-500/20 text-orange-300 text-xs sm:text-sm 
        font-semibold rounded-full border border-orange-500/30'>
          ⛓️ Blockchain
        </span>
      </div>
      
      <div className='mt-10 sm:mt-12 lg:mt-16 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 
      gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-14 lg:gap-x-10 lg:gap-y-16 justify-items-center max-w-7xl mx-auto 
      pb-12 sm:pb-16'>
        {technologies.map((tech, index) => (
          <motion.div 
            variants={fadeIn("up","spring", 0.03 * index, 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            whileHover={{
              scale: 1.1,
              y: -8,
              transition: { duration: 0.3 }
            }}
            className='relative group' 
            key={tech.name}
          >
            <div className='relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center
            bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-xl sm:rounded-2xl 
            border-2 border-gray-700/50 hover:border-purple-500/70
            transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30
            backdrop-blur-sm group-hover:bg-gradient-to-br group-hover:from-gray-700/80 
            group-hover:to-gray-800/80 cursor-pointer'>
              <img 
                className='w-9 h-9 sm:w-11 sm:h-11 lg:w-14 lg:h-14 object-contain 
                transition-transform duration-500 group-hover:scale-110
                filter group-hover:drop-shadow-lg' 
                src={tech.icon} 
                alt={tech.name} 
              />
              {/* Glow effect */}
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 
              group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500'></div>
            </div>
            
            {/* Tooltip - positioned above the icon */}
            <div className='absolute bottom-full mb-2 sm:mb-3 left-1/2 transform -translate-x-1/2 
            opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-[200]'>
              <div className='relative bg-gradient-to-r from-purple-600 to-pink-600 
              px-3 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-lg shadow-2xl shadow-purple-500/50
              whitespace-nowrap'>
                <span className='text-[10px] sm:text-xs font-semibold text-white block'>
                  {tech.name}
                </span>
                {/* Arrow pointing down */}
                <div className='absolute -bottom-1 sm:-bottom-1.5 left-1/2 transform -translate-x-1/2 
                w-2 h-2 sm:w-3 sm:h-3 bg-pink-600 rotate-45'></div>
              </div>
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