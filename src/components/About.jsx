import React from 'react'
import { Tilt } from 'react-tilt'
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
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card 
        hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300'
      >
        <a
          href={url}
          target='_blank'
          rel="noopener noreferrer"
          className='bg-tertiary rounded-[20px] cursor-pointer py-5 px-12 min-h-[280px] 
          flex justify-evenly items-center flex-col hover:bg-gray-800/50 transition-all duration-300
          border border-gray-700/50 hover:border-purple-500/50'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain hover:scale-110 transition-transform duration-300'/>
          <h3 className='text-white text-[20px] font-bold text-center leading-tight'>{title}</h3>
        </a>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <div className="py-16">
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        Introduction
      </p>
      <h2 className={styles.sectionHeadText}>
        Overview
      </h2>
    </motion.div>
    <motion.p className='mt-4 text-secondary text-[17px] leading-[32px]' 
      variants={fadeIn("", "", 0.1, 1)}>

      I'm a <strong>Computer Science graduate from ABV-IIITM Gwalior</strong> and an <strong>SDE Intern at Cisco</strong>, passionate about building intelligent, scalable software systems that solve real-world problems.

      <br/><br/>
      <strong>🧠 AI & LLMs:</strong> Built multi-agent LLM systems with RAG for automated diagnostics, error triage, and root cause analysis—boosting system reliability and engineering efficiency.
      <br/>
      <strong>💻 Full-Stack Development:</strong> Built responsive, scalable web apps with modern front-end and back-end technologies.
      <br/>
      <strong>🔮 Augmented Reality:</strong> Created immersive AR experiences that blend digital interactions with real-world environments.
      <br/>
      <strong>⛓ Blockchain:</strong> Engineered secure decentralized applications focused on trust, transparency, and data integrity.
      <br/>
      <strong>🚀 Problem Solving & Innovation:</strong> Driven to create user-centered solutions that address complex technical challenges.

      <br/><br/>
      Strong command over <strong>Data Structures and Algorithms</strong>, consistently refined via  
      <a href="https://www.leetcode.com/mishikaj2001" className='text-slate-200' target="_blank"> Leetcode</a>,  
      <a href="https://www.interviewbit.com/profile/mishikaj2001_5185b6defcb3/" className='text-slate-200' target="_blank"> Interviewbit</a>, and  
      <a href="https://www.geeksforgeeks.org/user/mishika16/" className='text-slate-200' target="_blank"> GeeksForGeeks</a>.

      <br/><br/>
      Well-versed in <strong>Object-Oriented Programming (OOP), Operating Systems, DBMS,</strong> and <strong>System Design</strong>, enabling me to architect efficient and scalable applications.

      {/* <br/><br/>
      I’m also an <strong>open-source contributor</strong>, actively engaging with the dev community to build, improve, and innovate. View my contributions on  
      <a href='https://github.com/mishikaa' className='text-slate-200' target="_blank"> GitHub</a>. */}

    </motion.p>


    {/* Cards */}
    <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center'>
      {services.map((service, index) => (
        <Card key={service.title} index={index} {...service} />
      ))}
    </div>
    </div>
  )
}

export default SectionWrapper(About, "about")