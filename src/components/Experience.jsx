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
      <h3 className='text-white text-[24px] font-bold leading-tight'>{experience.title}</h3>
    </div>
    <p className='text-purple-300 text-[16px] font-semibold mt-2' style={{ margin: 0 }}>
      {experience.company_name}
    </p>
    
    <ul className='mt-5 list-disc ml-5 space-y-3'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-gray-300 text-[14px] pl-1 tracking-wide leading-relaxed'
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
      <div className="mt-6">
        <a
          href={experience.certificate}
          download={`${experience.company_name}_certificate.pdf`}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 
          text-white font-semibold py-2 px-4 rounded-lg hover:from-purple-600 hover:to-pink-600 
          hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Certificate
        </a>
      </div>
    )}
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div className="py-16">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>
  
      <div className='mt-20 flex flex-col'>
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
  );
}

export default SectionWrapper(Experience, "experience");
