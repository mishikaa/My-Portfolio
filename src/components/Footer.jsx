import React from 'react';
import { githubLogo, instagram, linkedin } from '../assets';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='relative bg-gradient-to-b from-transparent to-black/50 backdrop-blur-sm 
    border-t border-gray-700/50 mt-20 py-8 sm:py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
          {/* About Column */}
          <div className='text-center md:text-left'>
            <h3 className='text-white font-bold text-xl mb-4 bg-gradient-to-r from-purple-400 to-pink-400 
            text-transparent bg-clip-text'>
              Mishika Jaiswal
            </h3>
            <p className='text-gray-400 text-sm leading-relaxed'>
              Software Engineer @ Cisco Systems<br />
              Passionate about AI/ML, Full-Stack Development, and Enterprise Solutions
            </p>
          </div>

          {/* Quick Links Column */}
          <div className='text-center'>
            <h4 className='text-white font-semibold text-lg mb-4'>Quick Links</h4>
            <div className='flex flex-col gap-2'>
              <a href="#about" className='text-gray-400 hover:text-purple-400 transition-colors text-sm'>
                About
              </a>
              <a href="#experience" className='text-gray-400 hover:text-purple-400 transition-colors text-sm'>
                Experience
              </a>
              <a href="#works" className='text-gray-400 hover:text-purple-400 transition-colors text-sm'>
                Projects
              </a>
              <a href="#tech" className='text-gray-400 hover:text-purple-400 transition-colors text-sm'>
                Skills
              </a>
              <a href="#contact" className='text-gray-400 hover:text-purple-400 transition-colors text-sm'>
                Contact
              </a>
            </div>
          </div>

          {/* Connect Column */}
          <div className='text-center md:text-right'>
            <h4 className='text-white font-semibold text-lg mb-4'>Connect</h4>
            <div className='flex gap-4 justify-center md:justify-end mb-4'>
              <a 
                href="https://github.com/mishikaa" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center
                hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg 
                hover:shadow-purple-500/50'
                aria-label="GitHub"
              >
                <img className='w-6 h-6' src={githubLogo} alt="GitHub" />
              </a>
              <a 
                href="https://www.linkedin.com/in/mishika16" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center
                hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:shadow-lg 
                hover:shadow-blue-500/50'
                aria-label="LinkedIn"
              >
                <img className='w-6 h-6' src={linkedin} alt="LinkedIn" />
              </a>
              <a 
                href="https://www.instagram.com/_._mishika_" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center
                hover:bg-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg 
                hover:shadow-pink-500/50'
                aria-label="Instagram"
              >
                <img className='w-6 h-6' src={instagram} alt="Instagram" />
              </a>
            </div>
            <a 
              href="mailto:mishikaj2001@gmail.com" 
              className='text-gray-400 hover:text-purple-400 transition-colors text-sm'
            >
              mishikaj2001@gmail.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className='h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6'></div>

        {/* Bottom Bar */}
        <div className='flex flex-col sm:flex-row justify-between items-center gap-4'>
          <p className='text-gray-400 text-xs sm:text-sm text-center sm:text-left'>
            © {currentYear} Mishika Jaiswal. All rights reserved.
          </p>
          <div className='flex items-center gap-4 text-xs sm:text-sm'>
            <a 
              href="https://leetcode.com/mishikaj2001" 
              target="_blank" 
              rel="noopener noreferrer"
              className='text-gray-400 hover:text-orange-400 transition-colors'
            >
              LeetCode
            </a>
            <span className='text-gray-600'>•</span>
            <a 
              href="https://www.geeksforgeeks.org/user/mishika16/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='text-gray-400 hover:text-green-400 transition-colors'
            >
              GeeksForGeeks
            </a>
          </div>
        </div>

        {/* Recruiter Note */}
        <div className='mt-6 text-center'>
          <p className='text-xs text-gray-500'>
            💼 Open to full-time opportunities and collaborations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

