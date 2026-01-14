import {motion} from 'framer-motion'
import {styles} from '../styles'
import {profileImg} from '../constants'
import { download, right, top } from '../assets';

const Hero = () => {
  
  return (
    <section className='relative w-full min-h-screen mx-auto flex items-center overflow-hidden'>
      <img className="z-0 absolute -top-16 right-0 opacity-20 w-1/2 sm:w-1/3 md:w-1/4 animate-pulse" src={top} alt="bg-image" />

      <div className='relative w-full max-w-[1600px] mx-auto flex flex-col lg:flex-row items-center 
      justify-between gap-8 sm:gap-10 lg:gap-16 xl:gap-20 py-20 sm:py-24 lg:py-0 px-6 sm:px-8 lg:px-16 xl:px-24'>
        
        {/* Left Content */}
        <div className='flex-1 flex flex-col lg:flex-row items-center lg:items-start gap-5 w-full'>
          {/* Circle and line(purple) - Hidden on mobile */}
          <div className='hidden lg:flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/50 animate-pulse'/>
            <div className='w-1 h-80 bg-gradient-to-b from-purple-500 to-transparent'/>
          </div>

          <div className='flex-1 w-full max-w-full overflow-hidden'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-center lg:text-left leading-tight px-2 sm:px-0'>
              Hey, I'm <span className='bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text'>Mishika</span>
            </h1>
            
            <div className='wrapper text-center lg:text-left px-2 sm:px-0 max-w-full'>
              <ul className={`dynamic-txts`}>
                <li><span>A Software Engineer @ Cisco Systems</span></li>
                <li><span>An AI/LLM & RAG Systems Developer</span></li>
                <li><span>A Full Stack Web Developer</span></li>
                <li><span>An Enterprise Automation Engineer</span></li>
                <li><span>A UI/UX Designer</span></li>
              </ul>
            </div>
            
            {/* CTA Buttons */}
            <div className='mt-6 sm:mt-8 lg:mt-12 w-full flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0'>
              <a 
                href="https://drive.google.com/file/d/1zrax7f49sZe8-VR2GlY5M5wBJz6bOAEh/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 
                overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 
                bg-[length:200%] text-white font-bold text-xs sm:text-sm md:text-base
                hover:bg-right transition-all duration-500 
                hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50
                focus:outline-none focus:ring-4 focus:ring-purple-300 whitespace-nowrap"
              >
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="relative z-10">View Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </a>

              <a 
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 
                overflow-hidden rounded-xl bg-transparent border-2 border-purple-500
                text-white font-bold text-xs sm:text-sm md:text-base
                hover:bg-purple-500/10 transition-all duration-300 
                hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30
                focus:outline-none focus:ring-4 focus:ring-purple-300 whitespace-nowrap"
              >
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Quick Stats */}
            <div className='mt-6 sm:mt-8 lg:mt-10 flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center lg:justify-start px-2 sm:px-0'>
              <div className='flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 bg-green-500/30 border-2 border-green-400/80 
              rounded-full hover:bg-green-500/40 transition-all duration-300 backdrop-blur-md shadow-lg shadow-green-500/20'>
                <div className='w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400 animate-pulse shadow-lg shadow-green-400/70 flex-shrink-0'></div>
                <span className='text-xs sm:text-sm md:text-base font-bold text-white whitespace-nowrap'>Open to Opportunities</span>
              </div>
              <div className='flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 bg-purple-500/30 border-2 border-purple-400/80 
              rounded-full hover:bg-purple-500/40 transition-all duration-300 backdrop-blur-md shadow-lg shadow-purple-500/20'>
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-purple-300 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className='text-xs sm:text-sm md:text-base font-bold text-white whitespace-nowrap'>800+ Problems Solved</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Content - Profile Image */}
        <div className='flex-shrink-0 flex justify-center lg:justify-end w-full lg:w-auto mt-8 sm:mt-10 lg:mt-0'>
          <div className='relative group'>
            {/* Animated gradient border */}
            <div className='absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 
            rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 
            group-hover:duration-200 animate-tilt'></div>
            
            {/* Profile Image */}
            <div className='relative'>
              <img 
                className='relative z-10 h-[240px] w-[240px] sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] 
                lg:h-[360px] lg:w-[360px] xl:h-[380px] xl:w-[380px]
                rounded-2xl object-cover shadow-2xl
                group-hover:scale-105 transition-all duration-500' 
                src={profileImg} 
                alt="profile" 
              />
              {/* Overlay gradient */}
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-t from-purple-900/40 via-transparent to-transparent'></div>
            </div>
            
            {/* Floating animation elements */}
            <div className='absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 
            bg-purple-500/10 rounded-full blur-2xl animate-pulse'></div>
            <div className='absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 
            bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-75'></div>
          </div>
        </div>
        
        <img className="absolute bottom-0 -left-24 w-[45%] lg:w-[35%] -z-10 opacity-15 hidden lg:block" src={right} alt="bg-image" />

      </div>
      
      {/* Scroller */}
      <div className='absolute bottom-6 sm:bottom-10 w-full flex justify-center z-20'>
        <a href="#about" className='group'>
          <div className='w-[28px] h-[48px] sm:w-[32px] sm:h-[56px] rounded-3xl border-2 border-gray-400 
          flex justify-center items-start p-2 
          hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30
          transition-all duration-300'>
            <motion.div 
            animate={{
              y: [0, 16, 0]
            }}
            transition= {{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-b from-purple-500 to-pink-500 mb-1
            group-hover:shadow-lg group-hover:shadow-purple-500/50"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero