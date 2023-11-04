import React from 'react'
import { technologies } from '../constants'
import BallCanvas from './canvas/Ball'
import { motion } from 'framer-motion'
import {fadeIn, textVariant} from '../utils/motion'
import { styles } from '../styles'
import { SectionWrapper } from '../higherOrderComponent'

const Tech = () => {
  return (
    <>
     <motion.div variants={textVariant()}>
      
      <h2 className={styles.sectionHeadText}>
        Skillsets
      </h2>
    </motion.div>
    <motion.p className='mt-4 text-secondary 
    text-[17px] leading-[32px]' 
    variants={fadeIn("","", 0.1, 1)}>
      I have a strong passion for learning new technologies, 
      which has allowed me to explore various domains and 
      become proficient in developing flexible and scalable 
      applications.
    </motion.p>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((tech, index) => (
        <motion.div 
          variants={fadeIn("up","spring", 0.5 * index, 0.25)}
          whileHover={{
            scale: 1.1,
            cursor: "pointer"
          }}
          className='w-28 h-28' 
          key={tech.name}>
          {/* <BallCanvas icon={tech.icon}/> */}
          <img className='w-24 hover:animate-spin' src={tech.icon} alt={tech.name} />
          
          <motion.div className='flex items-end justify-center relative bottom-16 h-24 hover:animate-bounce'
            initial={{opacity:0}}   
            whileHover={{
              opacity: 1, 
              transition: {
                type: 'spring',
                duration: 2.5
              }
            }}
          >
          <motion.span className='p-2 mt-2 rounded text-sm	
          text-center bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r'
          >
              {tech.name}
            </motion.span>
          </motion.div>
        </motion.div>
      ))}
    </div>
    <img className="absolute bottom-20 -right-40" src="src/assets/bgImages/crystal.png" alt="crystal" />
    </>
  )
}

export default SectionWrapper(Tech, "tech")