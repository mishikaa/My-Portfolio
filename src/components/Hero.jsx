import {motion} from 'framer-motion'
import {styles} from '../styles'
import {profileImg} from '../constants'
import { download, right, top } from '../assets';

const Hero = () => {
  
  return (
    <section className='relative w-full min-h-screen mx-auto flex items-center'>
      <img className="z-10 absolute -top-16 right-0 opacity-30" src={top} alt="bg-image" />

      <div className={`${styles.paddingX} relative w-full max-w-7xl mx-auto 
      flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 py-20 lg:py-0`}>
        
        {/* Left Content */}
        <div className='flex-1 flex flex-col lg:flex-row items-start gap-5'>
          {/* Circle and line(purple) - Hidden on mobile */}
          <div className='hidden lg:flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff] shadow-lg'/>
            <div className='w-1 h-80 violet-gradient'/>
          </div>

          <div className='flex-1'>
            <h1 className={`${styles.heroHeadText} mb-6 text-center lg:text-left`}>
              Hey, I'm <span className='text-[#915eff]'>Mishika</span>
            </h1>
            
            <div className='wrapper text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center lg:text-left'>
              <ul className={`dynamic-txts`}>
                <li><span>&nbsp;An SDE Intern @ Cisco</span></li>
                <li><span>&nbsp;A Full Stack Web Developer</span></li>
                <li><span>&nbsp;A Blockchain Developer</span></li>
                <li><span>&nbsp;A UI/UX Designer</span></li>
              </ul>
            </div>
            
            <div className='mt-16 w-full flex justify-center lg:justify-start'>
              <button 
                className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm 
                font-medium text-gray-900 rounded-xl group bg-gradient-to-l from-[#2957A3] via-[#7C5CC2] to-[#C961DE]
                group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white 
                focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 
                hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                <a 
                  href="MishikaResume.pdf" download="MishikaResume.pdf"
                  className="flex justify-center items-center gap-3 relative w-40 px-5 py-4 transition-all ease-in duration-75 
                  bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
                >
                  Resume
                  <img className="w-7" src={download} alt="download" />
                </a>
              </button>
            </div>
          </div>
        </div>
        
        {/* Right Content - Profile Image */}
        <div className='flex-shrink-0 flex justify-center lg:justify-end'>
          <div className='relative'>
            <img 
              className='z-50 h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] lg:h-[400px] lg:w-[400px] 
              rounded-2xl shadow-2xl border-4 border-white/10 backdrop-blur-sm
              hover:scale-105 transition-transform duration-300' 
              src={profileImg} 
              alt="profile" 
            />
            <div className='absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-500/20 to-transparent'></div>
          </div>
        </div>
        
        <img className="absolute bottom-0 -left-24 w-[45%] -z-10 opacity-20" src={right} alt="bg-image" />

      </div>
      
      {/* Scroller */}
      <div className='absolute bottom-10 w-full flex justify-center'>
        <a href="#about">
          <div className='w-[35px] h-[65px] rounded-3xl border-4 border-secondary 
          flex justify-center items-start p-2 hover:border-[#915eff] transition-colors duration-300'>
            <motion.div 
            animate={{
              y: [0, 24, 0]
            }}
            transition= {{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero