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
      background: 'linear-gradient(135deg, #1d1836 0%, #232540 100%)',
      color: '#fff',
      borderRadius: '16px',
      border: '1px solid rgba(147, 94, 255, 0.3)',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
    }}
    contentArrowStyle={{
      borderRight: '7px solid #232631',
    }}
    date={experience.date}
    iconStyle={{ 
      background: experience.iconBg,
      border: '3px solid #915eff',
      boxShadow: '0 0 20px rgba(147, 94, 255, 0.3)'
    }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-3/4 h-3/4 object-contain rounded-full"
        />
      </div>
    }
  >
    <div>
      <h3 className='text-white text-base sm:text-lg md:text-xl lg:text-[24px] font-bold leading-tight break-words'>
        {experience.title}
      </h3>
      <p className='text-purple-300 text-xs sm:text-sm md:text-base lg:text-[16px] font-semibold mt-1 sm:mt-2 break-words' style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
    
    <ul className='mt-3 sm:mt-4 md:mt-5 list-disc ml-3 sm:ml-4 md:ml-5 space-y-1.5 sm:space-y-2 md:space-y-3'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-gray-300 text-[11px] sm:text-xs md:text-sm lg:text-[14px] pl-1 tracking-wide leading-relaxed break-words'
        >
          {point.includes("KKNNS") ? (
            <>
              Created a portfolio website for the{" "}
              <a
                href="https://www.sscnmodel.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors underline"
              >
                KKNNS
              </a>{" "}
              organization.
            </>
          ) : (
            point
          )}
        </li>
      ))}
    </ul>
    
    {/* Download Certificate Button */}
    {experience.certificate && (
      <div className="mt-3 sm:mt-4 md:mt-6">
        <a
          href={experience.certificate}
          download={`${experience.company_name}_certificate.pdf`}
          className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-purple-500 to-pink-500 
          text-white font-semibold text-[10px] sm:text-xs md:text-sm py-1.5 sm:py-2 px-2.5 sm:px-3 md:px-4 rounded-md sm:rounded-lg 
          hover:from-purple-600 hover:to-pink-600 
          hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
        >
          <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="whitespace-nowrap">Download Certificate</span>
        </a>
      </div>
    )}
  </VerticalTimelineElement>
);

const Experience = () => {
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
          What I have done so far
        </p>
        <h2 className='text-white font-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 break-words'>
          Work Experience
        </h2>
      </motion.div>
  
      <div className='mt-10 sm:mt-12 md:mt-16 lg:mt-20 flex flex-col'>
        <VerticalTimeline lineColor="#915eff">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={index} 
              experience={experience} 
            />
          ))}
        </VerticalTimeline>
      </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Experience, "experience");
