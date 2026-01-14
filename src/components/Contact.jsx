import React, { useRef, useState } from 'react'
import { SectionWrapper } from '../higherOrderComponent';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { slideIn } from '../utils/motion';
import emailjs from '@emailjs/browser';
import { errorPopup, successPopup } from './Popup';
import { githubLogo, instagram, linkedin } from '../assets';

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    setForm((prevData) => {
      return {
        ...prevData,
        [name]: value
      }
    })
  }

  const handleSubmit = async(event) => { 
    try {
      event.preventDefault();
      setLoading(true);
      
      if(!form.email || !form.message) {
        errorPopup("Kindly fill the required fields(*)");
        setLoading(false);
        return;
      }
      
      await emailjs.send('service_1fecrps', 'template_4ui6aga', {
        from_name: form.name,
        to_name: "Mishika",
        from_email: form.email,
        to_email: "mishikaj2001@gmail.com",
        message: form.message
        }, 
        'NXB9Ii1cByTHJ4XA4'
      );
  
      setLoading(false);
      successPopup("Thankyou. I'll get back to you as soon as possible.")
      setForm({
      name: "",
      email: "",
      message: ""
    }) } catch (error) {
      setLoading(false)
      console.log(error)
      errorPopup("Something went wrong!")
    }
  }
  
  return (
    <div className="py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className='xl:mt-12 flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 justify-center items-start'>
        <motion.div
          variants={slideIn("left", "tween", 0.25, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex-1 w-full max-w-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 
          backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl border border-gray-700/50 shadow-2xl'
        >
          <p className='text-gray-400 text-xs sm:text-sm md:text-base uppercase tracking-wider text-center sm:text-left'>
            Get in touch
          </p>
          <h3 className='text-white font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center sm:text-left mt-2 break-words'>
            Let's Work Together
          </h3>
          <p className='text-gray-300 text-xs sm:text-sm md:text-base mt-2 sm:mt-3 text-center sm:text-left break-words'>
            Available for full&#8209;time opportunities, freelance projects, and collaborations. 
            Let's build something amazing together! 🚀
          </p>
          
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-6 sm:mt-8 md:mt-12 flex flex-col gap-3 sm:gap-4 md:gap-6'
          >
            <div className='flex flex-col'>
              <label className='text-white font-medium text-xs sm:text-sm md:text-base mb-1.5 sm:mb-2'>Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
                placeholder="Enter your name"
                className='bg-gray-800/50 py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 placeholder:text-gray-400
                text-white text-xs sm:text-sm md:text-base rounded-lg border border-gray-600 focus:border-purple-500
                focus:outline-none font-medium transition-all duration-300 w-full'
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-white font-medium text-xs sm:text-sm md:text-base mb-1.5 sm:mb-2'>
                Email <span className='text-red-400'>*</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                placeholder="Enter your email"
                required
                className='bg-gray-800/50 py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 placeholder:text-gray-400
                text-white text-xs sm:text-sm md:text-base rounded-lg border border-gray-600 focus:border-purple-500
                focus:outline-none font-medium transition-all duration-300 w-full'
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-white font-medium text-xs sm:text-sm md:text-base mb-1.5 sm:mb-2'>
                Message / Feedback <span className='text-red-400'>*</span>
              </label>
              <textarea
                rows="5"
                name="message"
                onChange={handleChange}
                value={form.message}
                placeholder="Enter your message"
                required
                className='bg-gray-800/50 py-2.5 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 placeholder:text-gray-400
                text-white text-xs sm:text-sm md:text-base rounded-lg border border-gray-600 focus:border-purple-500
                focus:outline-none font-medium resize-none transition-all duration-300 w-full'
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className='py-2.5 sm:py-3 md:py-4 px-5 sm:px-6 md:px-8 text-white text-xs sm:text-sm md:text-base
              bg-gradient-to-r from-purple-600 to-pink-600
              hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700
              rounded-lg font-bold shadow-lg hover:shadow-purple-500/25 
              transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed w-full'
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : 'Send Message'}
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={slideIn("right", "tween", 0.25, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex-1 w-full max-w-md mt-6 sm:mt-8 lg:mt-0'
        >
          <div className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 
          backdrop-blur-md p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl border border-gray-700/50'>
            <h4 className='text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 text-center sm:text-left break-words'>
              Let's Connect!
            </h4>
            <div className='space-y-2 sm:space-y-3 md:space-y-4 text-gray-300 text-xs sm:text-sm md:text-base'>
              <p className='leading-relaxed text-center sm:text-left break-words'>
                I'm always open to discussing new opportunities, collaborating on exciting projects, 
                or just having a chat about technology and innovation.
              </p>
              <p className='leading-relaxed text-center sm:text-left break-words'>
                Feel free to reach out if you have any questions, want to collaborate, 
                or just want to say hello!
              </p>
            </div>
            
            {/* Social Links */}
            <div className='mt-4 sm:mt-6 md:mt-8'>
              <h5 className='text-white font-semibold text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4 text-center sm:text-left'>
                Find me on
              </h5>
              <div className='flex gap-2 sm:gap-3 md:gap-4 justify-center sm:justify-start'>
                <a 
                  href="https://github.com/mishikaa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-800 rounded-full flex items-center justify-center
                  hover:bg-gray-700 transition-all duration-300 hover:scale-110 relative z-10 pointer-events-auto flex-shrink-0'
                >
                  <img className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8' src={githubLogo} alt="GitHub" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mishika16" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-800 rounded-full flex items-center justify-center
                  hover:bg-gray-700 transition-all duration-300 hover:scale-110 relative z-10 pointer-events-auto flex-shrink-0'
                >
                  <img className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8' src={linkedin} alt="LinkedIn" />
                </a>
                <a 
                  href="https://www.instagram.com/_._mishika_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gray-800 rounded-full flex items-center justify-center
                  hover:bg-gray-700 transition-all duration-300 hover:scale-110 relative z-10 pointer-events-auto flex-shrink-0'
                >
                  <img className='w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8' src={instagram} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")