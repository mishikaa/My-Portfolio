import React from 'react'
import { Tilt } from 'react-tilt' // to tilt the cards on hovering
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

import { SectionWrapper } from '../higherOrderComponent'

const Card = ({title, index, icon, url}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right","spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <a
          href={url}
          target='_blank'
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px]
          py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </a>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>
        Overview
      </h2>
    </motion.div>
    <motion.p className='mt-4 text-secondary 
    text-[17px] leading-[32px]' 
    variants={fadeIn("","", 0.1, 1)}>
      I am a self-taught full-stack web developer, UI/UX Designer and a Blockchain Enthusiast. My passion for software lies in dreaming up ideas and making them come true with elegant interfaces. I care greatly about the experience, architecture, and code quality of the things I build.
      <br/>
      <br/>I am also a passionate coder with C, C++, and Python programming languages expertise. With a strong foundation in computer science, I've dedicated significant time and effort to honing my data structures and algorithms skills. A regular practitioner on <a href="https://www.leetcode.com/mishikaj2001" className='text-slate-200' target="_blank">Leetcode</a>, I embrace the platform as an opportunity to further my understanding of complex problem-solving techniques. 
      <br/>
      <br/>I am also an open-source enthusiast.
      I learned a lot from the open-source community, and like to contribute to different projects. More information 
      about my Open Source profile is available at GitHub | <a href='https://github.com/mishikaa' className='text-slate-200' target="_blank">Mishika</a>.
    </motion.p>

    {/* Cards */}
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <Card key={service.title} index={index} {...service} />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")