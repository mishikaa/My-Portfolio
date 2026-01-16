import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

import { SectionWrapper } from '../higherOrderComponent'

const Card = ({title, index, icon, url}) => {
  return (
    <Tilt className="w-full group" options={{ max: 25, scale: 1.05 }}>
      <motion.div
        variants={fadeIn("up","spring", 0.3 * index, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='w-full h-full rounded-xl sm:rounded-2xl shadow-card overflow-hidden
        hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500'
      >
        <a
          href={url}
          target='_blank'
          rel="noopener noreferrer"
          className='relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl 
          cursor-pointer py-6 sm:py-7 md:py-8 px-4 sm:px-5 md:px-6 h-[260px] sm:h-[280px]
          flex justify-center items-center flex-col 
          border-2 border-gray-700/50 hover:border-purple-500/70 
          transition-all duration-500 overflow-hidden w-full'
        >
          {/* Animated background gradient */}
          <div className='absolute inset-0 bg-gradient-to-br from-purple-600/0 via-pink-600/0 to-purple-600/0 
          opacity-0 group-hover:opacity-10 transition-opacity duration-500'></div>
          
          {/* Icon with animation */}
          <div className='relative z-10 p-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 
          group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all duration-500 mb-4'>
            <img 
              src={icon} 
              alt={title} 
              className='w-16 h-16 sm:w-18 sm:h-18 object-contain group-hover:scale-110 group-hover:rotate-3 
              transition-all duration-500 filter group-hover:drop-shadow-lg'
            />
          </div>
          
          <h3 className='relative z-10 text-white text-base sm:text-lg font-bold text-center leading-snug
          group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 
          group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-500 px-3 break-words max-w-full'>
            {title}
          </h3>
          
          {/* Hover arrow indicator */}
          <svg 
            className='relative z-10 w-6 h-6 text-purple-400 opacity-0 group-hover:opacity-100 
            transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 mt-3' 
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
        Introduction
      </p>
      <h2 className='text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 break-words'>
        Overview
      </h2>
    </motion.div>
    <motion.div 
      className='mt-6 sm:mt-8 text-gray-300 text-sm sm:text-base md:text-[17px] 
      leading-[24px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px] break-words max-w-4xl mx-auto' 
      variants={fadeIn("", "", 0.1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Title Badge */}
      <div className='flex items-center justify-center gap-2 mb-5 sm:mb-6 flex-wrap'>
        <span className='px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 
        text-purple-300 text-xs sm:text-sm font-bold rounded-lg border border-purple-500/40 
        backdrop-blur-sm shadow-lg shadow-purple-500/10 whitespace-nowrap'>
          💼 Software Engineer @ Cisco
        </span>
        <span className='px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 
        text-blue-300 text-xs sm:text-sm font-bold rounded-lg border border-blue-500/40 
        backdrop-blur-sm shadow-lg shadow-blue-500/10 whitespace-nowrap'>
          🎓 ABV-IIITM Gwalior • 8.34 CGPA
        </span>
      </div>

      <p className='mb-5 sm:mb-6 text-gray-200 leading-relaxed text-center'>
        I build <span className='text-purple-400 font-semibold'>scalable, intelligent enterprise systems</span> with 
        experience across automation, full&#8209;stack development, and AI&#8209;driven solutions. At <strong>Cisco</strong>, 
        I've engineered Selenium&#8209;based UI automation frameworks <span className='text-green-400 font-semibold'>(1500+ test cases)</span> and 
        developed <strong>OpenShift Console plugins</strong> for hybrid cloud management.
      </p>

      {/* Tech Focus Areas */}
      <div className='grid md:grid-cols-2 gap-4 sm:gap-5 mb-5 sm:mb-6'>
        <div className='p-4 sm:p-5 bg-gradient-to-br from-purple-900/10 to-pink-900/10 
        rounded-xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 
        transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10'>
          <h4 className='text-purple-300 font-bold text-sm sm:text-base mb-2 flex items-center gap-2 justify-center md:justify-start'>
          <span className='text-lg'>🤖</span> AI & LLM Engineering
        </h4>
          <p className='text-gray-300 text-xs sm:text-sm leading-relaxed text-center md:text-left'>
          I work extensively with <strong>LLMs, RAG pipelines, LangChain,</strong> and <strong>vector databases</strong> to 
          design multi&#8209;agent systems for automated debugging and root&#8209;cause analysis.
        </p>
      </div>

        <div className='p-4 sm:p-5 bg-gradient-to-br from-blue-900/10 to-cyan-900/10 
        rounded-xl border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 
        transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10'>
          <h4 className='text-blue-300 font-bold text-sm sm:text-base mb-2 flex items-center gap-2 justify-center md:justify-start'>
          <span className='text-lg'>⚡</span> Full-Stack Development
        </h4>
          <p className='text-gray-300 text-xs sm:text-sm leading-relaxed text-center md:text-left'>
          My stack includes <strong>React, Next.js, Node.js, Django, PostgreSQL, MongoDB, and Redis</strong>, 
          with additional hands&#8209;on experience in <span className='text-cyan-400 font-semibold'>AR</span> (A&#8209;Frame, AR.js) 
          and <span className='text-cyan-400 font-semibold'>Web3</span> (Solidity, Ethers.js, IPFS).
        </p>
        </div>
      </div>

      <p className='text-gray-300 text-xs sm:text-sm leading-relaxed text-center'>
        <strong className='text-purple-300'>Core Strengths:</strong> OOP, Operating Systems, DBMS, Computer Networks, 
        and System Design — enabling me to architect efficient, scalable enterprise applications.
      </p>

    </motion.div>

    {/* Key Highlights */}
    <div className='mt-8 sm:mt-10 lg:mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 max-w-5xl mx-auto'>
      <motion.div 
        variants={fadeIn("up","spring", 0.2, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm p-4 sm:p-5 md:p-6 
        rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all duration-300
        hover:shadow-xl hover:shadow-purple-500/20 text-center'
      >
        <div className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 
        text-transparent bg-clip-text break-words'>800+</div>
        <div className='text-xs sm:text-sm md:text-base text-gray-400 mt-2 font-medium break-words'>DSA Problems Solved</div>
      </motion.div>

      <motion.div 
        variants={fadeIn("up","spring", 0.3, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='bg-gradient-to-br from-blue-900/20 to-cyan-900/20 backdrop-blur-sm p-4 sm:p-5 md:p-6 
        rounded-xl border border-blue-500/30 hover:border-blue-500/60 transition-all duration-300
        hover:shadow-xl hover:shadow-blue-500/20 text-center'
      >
        <div className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 
        text-transparent bg-clip-text break-words'>8.34</div>
        <div className='text-xs sm:text-sm md:text-base text-gray-400 mt-2 font-medium break-words'>CGPA / 10</div>
      </motion.div>

      <motion.div 
        variants={fadeIn("up","spring", 0.4, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm p-4 sm:p-5 md:p-6 
        rounded-xl border border-green-500/30 hover:border-green-500/60 transition-all duration-300
        hover:shadow-xl hover:shadow-green-500/20 text-center'
      >
        <div className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 
        text-transparent bg-clip-text break-words'>GSSOC</div>
        <div className='text-xs sm:text-sm md:text-base text-gray-400 mt-2 font-medium break-words'>Open Source Contributor</div>
      </motion.div>

      <motion.div 
        variants={fadeIn("up","spring", 0.5, 0.75)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className='bg-gradient-to-br from-orange-900/20 to-red-900/20 backdrop-blur-sm p-4 sm:p-5 md:p-6 
        rounded-xl border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300
        hover:shadow-xl hover:shadow-orange-500/20 text-center'
      >
        <div className='text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 
        text-transparent bg-clip-text break-words'>95.2%</div>
        <div className='text-xs sm:text-sm md:text-base text-gray-400 mt-2 font-medium break-words'>Class XII (ISC)</div>
      </motion.div>
    </div>


    {/* Cards */}
    <div className='mt-12 sm:mt-16 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
    gap-6 sm:gap-6 lg:gap-6 max-w-6xl mx-auto'>
      {services.map((service, index) => (
        <Card key={service.title} index={index} {...service} />
      ))}
    </div>
    </div>
    </div>
  )
}

export default SectionWrapper(About, "about")