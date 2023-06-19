import React from 'react'
import { SectionWrapper } from '../higherOrderComponent'
import { fadeIn, textVariant } from '../utils/motion'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { projects } from '../constants'
import { Tilt } from 'react-tilt'
import { github, website } from '../assets'

const ProjectCard = ({index, name, description, tags, image,live_link, source_code_link}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index*0.5, 0.75)}
    >
      <Tilt
        className="bg-tertiary p-5 rounded-2xl
        sm:w-[360px] w-full"
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
      >
        <div className='relative w-full h-[16rem]'>
          <img src={image} alt={name} className='w-full h-full object-cover'/>
          <div className='absolute inset-0 flex justify-end m-2 card-img_hover'>
            <div 
              onClick={()=> window.open(live_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={website} alt="live" className='w-2/3 h-2/3 object-contain' />
            </div>
          </div>

          <div className='absolute inset-0 right-12 flex justify-end m-2 card-img_hover'>
            <div 
              onClick={()=> window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img src={github} alt="github" className='w-3/4 h-3/4 object-contain' />
            </div>
          </div>
        </div>
        <div className='mt-5 text-secondary'>
          <h3 className='text-white font-bold'>{name}</h3>
          <p className='mt-2 text-[15px]'>{description}</p>
        </div>
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <div key={tag.name} className='bg-zinc-950 p-1 rounded'>
              <p className={`text-[14px] ${tag.color}`}>{tag.name}</p>
            </div>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>
          Projects
        </h2>
      </motion.div>
      <div className='w-full'>
        <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Here are my projects that showcase my skills. Uptil now, I have 
          undertaken various challenging projects that have not only honed 
          my abilities but also demonstrated my expertise in different areas.
        </motion.p>
        <div className='mt-20 flex flex-wrap gap-7'>
          {projects.map((project, index)=>(
            <ProjectCard 
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
        </div>
        <div className='flex justify-center m-auto mt-16 w-full'>
          <button 
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm 
            font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 
            group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white 
            focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"
          >
            <a href='https://github.com/mishikaa?tab=repositories' target='_blank'
              className="relative w-40 px-5 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 
              rounded-md group-hover:bg-opacity-0"
            >
              Show All Projects
            </a>
          </button>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "works")