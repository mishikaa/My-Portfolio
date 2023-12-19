import { motion } from 'framer-motion';
import React from 'react';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';
import { SectionWrapper } from '../higherOrderComponent/SectionWrapper';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { experiences } from '../constants';
import 'react-vertical-timeline-component/style.min.css';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#1d1836',
      color: '#fff',
    }}
    contentArrowStyle={{
      borderRight: '7px solid #232631',
    }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className='flex justify-center z-30 items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-full h-full z-10 object-cover"
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
    </div>
    <p
      className='text-secondary text-[16px] font-semibold'
      style={{ margin: 0 }}
    >
      {experience.company_name}
    </p>
    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={`experience=point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
    
    {/* Download Certificate Button */}
    {experience.certificate && (
      <div className="mt-4">
        <a
          href={experience.certificate}
          download={`${experience.company_name}_certificate.pdf`}
          className="inline-block bg-secondary text-gray-800 font-semibold py-2 px-4 rounded hover:bg-opacity-80 hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring focus:border-primary"
        >
          Download Certificate
        </a>
      </div>
    )}
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>
          Work Experience
        </h2>
      </motion.div>
  
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              experience={experience} 
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
}

export default SectionWrapper(Experience, "work");
