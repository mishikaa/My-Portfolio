import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants/index'
import { logo, close, menu } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-40 
    bg-[#0F103F]/95 backdrop-blur-md border-b border-gray-700/50`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scroll(0, 0)
          }}
        >
          <img src={logo} alt="logo" className='w-15 h-12 object-contain'/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex hover:text-purple-400 transition-colors'>
            Mishika &nbsp;<span className='hidden sm:block'>Jaiswal</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-8'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`
                ${active === link.title ? "text-white" : "text-secondary"}
                hover:text-white text-[18px] font-medium cursor-pointer
                transition-all duration-300 relative group
                `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
              <div className={`absolute bottom-[-4px] left-0 w-0 h-[2px] bg-purple-500 
              transition-all duration-300 group-hover:w-full ${active === link.title ? 'w-full' : ''}`}></div>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
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
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar