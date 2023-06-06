import React from 'react'
import { Tilt } from 'react-tilt' // to tilt the cards on hovering
import {motion} from 'framer-motion'

import {styles} from '../styles'
import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

import { SectionWrapper } from '../higherOrderComponent'

const Card = ({title, index, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right","spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
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
        </div>
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
    text-[17px] max-w-3xl leading-[32px]' 
    variants={fadeIn("","", 0.1, 1)}>
      I am a passionate Full Stack Developer who loves to explore new technologies and build scalable and efficient applications.
      I am also interested in Blockchain development using Solidity, and can create blockchain-based applications.I 
      have a good hold over developing Decentralized Applications or DApps using solidity smart-contracts.

      I am also highly into Open Source and like to contribute to different projects. Currently. More information 
      about my Open Source profile is available at GitHub | Mishika.
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