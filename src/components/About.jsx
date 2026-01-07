import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

import { SectionWrapper } from '../higherOrderComponent'

const Card = ({title, index, icon, url}) => {
  return (
    <Tilt className="w-full max-w-[280px] sm:max-w-[250px] group" options={{ max: 25, scale: 1.05 }}>
      <motion.div
        variants={fadeIn("up","spring", 0.3 * index, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='w-full rounded-2xl shadow-card overflow-hidden
        hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500'
      >
        <a
          href={url}
          target='_blank'
          rel="noopener noreferrer"
          className='relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl 
          cursor-pointer py-6 sm:py-8 px-6 sm:px-8 min-h-[240px] sm:min-h-[280px]
          flex justify-evenly items-center flex-col 
          border-2 border-gray-700/50 hover:border-purple-500/70 
          transition-all duration-500 overflow-hidden'
        >
          {/* Animated background gradient */}
          <div className='absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-purple-600/0 
          opacity-0 group-hover:opacity-10 transition-opacity duration-500'></div>
          
          {/* Icon with animation */}
          <div className='relative z-10 p-3 sm:p-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 
          group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-500'>
            <img 
              src={icon} 
              alt={title} 
              className='w-14 h-14 sm:w-16 sm:h-16 object-contain group-hover:scale-110 group-hover:rotate-3 
              transition-all duration-500 filter group-hover:drop-shadow-lg'
            />
          </div>
          
          <h3 className='relative z-10 text-white text-base sm:text-[18px] font-bold text-center leading-snug mt-3 sm:mt-4
          group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 
          group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500 px-2'>
            {title}
          </h3>
          
          {/* Hover arrow indicator */}
          <svg 
            className='relative z-10 w-6 h-6 text-purple-400 opacity-0 group-hover:opacity-100 
            transform translate-y-2 group-hover:translate-y-0 transition-all duration-500' 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
    <motion.div 
      variants={textVariant()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <p className='text-gray-400 text-sm sm:text-base uppercase tracking-wider text-center lg:text-left'>
        Introduction
      </p>
      <h2 className='text-white font-black text-3xl sm:text-4xl lg:text-5xl text-center lg:text-left mt-2'>
        Overview
      </h2>
    </motion.div>
    <motion.p 
      className='mt-4 sm:mt-6 text-gray-300 text-sm sm:text-base lg:text-[17px] 
      leading-[26px] sm:leading-[28px] lg:leading-[32px]' 
      variants={fadeIn("", "", 0.1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >

      I'm a <strong>Computer Science graduate from ABV-IIITM Gwalior (CGPA: 8.34/10)</strong> and a <strong>Software Engineer at Cisco Systems</strong>, passionate about building intelligent, scalable enterprise software systems that solve real-world problems.

      <br/><br/>
      <strong>🚀 Enterprise Automation:</strong> Engineered UI automation frameworks using Selenium for Shadow DOM manipulation, automating 1500+ test cases. Architected dynamic OpenShift Console plugins for hybrid cloud management.
      <br/>
      <strong>🧠 AI & LLM Engineering:</strong> Designed multi-agent systems with RAG pipelines, ChromaDB, and LangChain for automated error triage and root-cause analysis—accelerating debugging and boosting engineering efficiency.
      <br/>
      <strong>💻 Full-Stack Development:</strong> Built production-grade web applications with React, Next.js, Django, Node.js, and modern databases (PostgreSQL, MongoDB, Redis), delivering real-time analytics and seamless user experiences.
      <br/>
      <strong>🔮 Augmented Reality:</strong> Created immersive AR experiences that blend digital interactions with real-world environments using A-Frame and AR.js.
      <br/>
      <strong>⛓ Blockchain & Web3:</strong> Developed secure decentralized applications with Solidity, Ethers.js, and IPFS focused on trust, transparency, and data integrity.

      <br/><br/>
      <strong>Problem Solver:</strong> Solved <strong>800+ DSA problems</strong> on  
      <a href="https://www.leetcode.com/mishikaj2001" className='text-slate-200' target="_blank"> Leetcode</a> and  
      <a href="https://www.geeksforgeeks.org/user/mishika16/" className='text-slate-200' target="_blank"> GeeksForGeeks</a>, strengthening competitive programming skills and algorithmic thinking.

      <br/><br/>
      <strong>Open Source Contributor (GSSOC'24):</strong> Contributed to high-impact projects using JavaScript and React, specializing in feature development, bug fixes, and performance optimization.

      <br/><br/>
      Well-versed in <strong>OOP, Operating Systems, DBMS, Computer Networks, LLM Engineering,</strong> and <strong>Retrieval-Augmented Generation (RAG)</strong>, enabling me to architect efficient, scalable enterprise applications.

    </motion.p>

    {/* Key Highlights */}
    <div className='mt-8 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
      <motion.div 
        variants={fadeIn("up","spring", 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm p-4 sm:p-6 
        rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300
        hover:shadow-lg hover:shadow-purple-500/20'
      >
        <div className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 
        text-transparent bg-clip-text'>800+</div>
        <div className='text-xs sm:text-sm text-gray-400 mt-2 font-medium'>DSA Problems Solved</div>
      </motion.div>

      <motion.div 
        variants={fadeIn("up","spring", 0.3, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-6 
        rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300
        hover:shadow-lg hover:shadow-blue-500/20'
      >
        <div className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 
        text-transparent bg-clip-text'>8.34</div>
        <div className='text-xs sm:text-sm text-gray-400 mt-2 font-medium'>CGPA / 10</div>
      </motion.div>

      <motion.div 
        variants={fadeIn("up","spring", 0.4, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm p-4 sm:p-6 
        rounded-xl border border-green-500/30 hover:border-green-500/60 transition-all duration-300
        hover:shadow-lg hover:shadow-green-500/20'
      >
        <div className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 
        text-transparent bg-clip-text'>GSSOC</div>
        <div className='text-xs sm:text-sm text-gray-400 mt-2 font-medium'>Open Source Contributor</div>
      </motion.div>

      <motion.div 
        variants={fadeIn("up","spring", 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-sm p-4 sm:p-6 
        rounded-xl border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300
        hover:shadow-lg hover:shadow-orange-500/20'
      >
        <div className='text-3xl sm:text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 
        text-transparent bg-clip-text'>95.2%</div>
        <div className='text-xs sm:text-sm text-gray-400 mt-2 font-medium'>Class XII (ISC)</div>
      </motion.div>
    </div>


    {/* Cards */}
    <div className='mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
    gap-6 sm:gap-8 lg:gap-6 place-items-center max-w-7xl mx-auto w-full'>
      {services.map((service, index) => (
        <Card key={service.title} index={index} {...service} />
      ))}
    </div>
    </div>
  )
}

export default SectionWrapper(About, "about")