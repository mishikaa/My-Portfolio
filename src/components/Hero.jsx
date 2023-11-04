import {motion} from 'framer-motion'
import {styles} from '../styles'
import {profileImg} from '../constants'
import { download, right, top } from '../assets';

const Hero = () => {
  
  return (
    <section className='relative w-full h-screen mx-auto'>
      <img className="z-50 absolute -top-16 right-0" src={top} alt="bg-image" />

      <div className={`${styles.paddingX} absolute inset-0 
      top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        
        {/* Circle and line(purple) */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>Hey, I'm <span className='text-[#915eff]'>Mishika</span></h1>
          <div className='wrapper'>
            <div className={`static-txt`}>A</div>
            <ul className={`dynamic-txts`}>
              <li><span> &nbsp; Full Stack Web Developer</span></li>
              <li><span> &nbsp; UI/UX Designer</span></li>
              <li><span> &nbsp; Blockchain Developer</span></li>
              <li><span>n Open Source Contributer</span></li>
            </ul>
          </div>
          
          <div className='mt-16 w-full'>
          <button 
            className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm 
            font-medium text-gray-900 rounded-xl group bg-gradient-to-l from-[#2957A3] via-yellow-[#7C5CC2] to-[#C961DE]
            group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white 
            focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 hover:scale-105"
          >
            <a 
              href="MishikaResume.pdf" download="MishikaResume.pdf"
              className="flex justify-center items-center gap-3 relative w-40 px-5 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 
              rounded-md group-hover:bg-opacity-0"
            >
              Resume
              <img className="w-7" src={download} alt="download" />
            </a>
          </button>
        </div>
        </div>
        
        <div>
          <img className='z-50 h-[350px] sm:h-[28rem] sm:w-[470px] rounded-xl' src={profileImg} alt="profile" />
        </div>
        
        <img className="absolute bottom-0 -left-24 w-[45%] -z-10" src={right} alt="bg-image" />

      </div>
      
      {/* Scroller */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center'>
        <a href="#about">
          <div className='w-[35px] h-[65px] rounded-3xl
          border-4 border-secondary flex justify-center 
          items-start p-2'>
            {/* Using framer motion */}
            <motion.div 
            animate={{
              y: [0, 24, 0] //Moving only along the y-axis
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