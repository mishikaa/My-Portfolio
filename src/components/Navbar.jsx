import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants/index'
import { logo, close, menu } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-4 sm:py-5 fixed top-0 z-40 
    bg-[#0F103F]/95 backdrop-blur-md border-b border-gray-700/50`}>
      <div className="w-full flex justify-between items-center max-w-[1600px] mx-auto">
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scroll(0, 0)
          }}
        >
          <img src={logo} alt="logo" className='w-12 sm:w-14 md:w-15 h-10 sm:h-11 md:h-12 object-contain group-hover:scale-110 transition-transform'/>
          <p className='text-white text-[15px] sm:text-[16px] md:text-[18px] font-bold cursor-pointer flex group-hover:text-purple-400 transition-colors whitespace-nowrap'>
            Mishika &nbsp;<span className='hidden sm:inline'>Jaiswal</span>
          </p>
        </Link>

        <ul className='list-none hidden lg:flex flex-row gap-4 xl:gap-6 items-center'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`
                ${active === link.title ? "text-white" : "text-secondary"}
                hover:text-white text-[16px] xl:text-[18px] font-medium cursor-pointer
                transition-all duration-300 relative group whitespace-nowrap
                `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
              <div className={`absolute bottom-[-4px] left-0 w-0 h-[2px] bg-purple-500 
              transition-all duration-300 group-hover:w-full ${active === link.title ? 'w-full' : ''}`}></div>
            </li>
          ))}
          <li>
            <a 
              href="https://drive.google.com/file/d/1zrax7f49sZe8-VR2GlY5M5wBJz6bOAEh/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className='px-3 xl:px-4 py-1.5 xl:py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white 
              text-xs xl:text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50
              transition-all duration-300 hover:scale-105 inline-flex items-center gap-1.5 xl:gap-2 whitespace-nowrap'
            >
              <svg className="w-3.5 h-3.5 xl:w-4 xl:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile menu */}
        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu} alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer hover:scale-110 transition-transform'
            onClick={() => setToggle(!toggle)}
          />
        </div>
        
        <div
          className={`${!toggle ? "hidden" : "flex"} p-6 bg-gray-900/95 backdrop-blur-md absolute
            top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl border border-gray-700
            shadow-lg transition-all duration-300`}
        >
          <ul className='list-none flex flex-col justify-end items-start gap-4 w-full'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`
                  ${active === link.title ? "text-white" : "text-secondary"}
                  font-poppins font-medium cursor-pointer text-[16px] w-full
                  hover:text-white transition-colors duration-300
                  `}
                onClick={() => {
                  setToggle(!toggle)
                  setActive(link.title)
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            <li className='w-full mt-2'>
              <a 
                href="https://drive.google.com/file/d/1zrax7f49sZe8-VR2GlY5M5wBJz6bOAEh/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className='w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white 
                text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50
                transition-all duration-300 inline-flex items-center justify-center gap-2'
                onClick={() => setToggle(false)}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar