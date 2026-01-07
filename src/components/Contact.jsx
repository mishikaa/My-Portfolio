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
    <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className='xl:mt-12 flex flex-col lg:flex-row gap-8 sm:gap-10 justify-center items-start'>
        <motion.div
          variants={slideIn("left", "tween", 0.25, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex-1 w-full max-w-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 
          backdrop-blur-md p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-700/50 shadow-2xl'
        >
          <p className='text-gray-400 text-sm sm:text-base uppercase tracking-wider text-center sm:text-left'>
            Get in touch
          </p>
          <h3 className='text-white font-black text-2xl sm:text-3xl lg:text-4xl text-center sm:text-left mt-2'>
            Let's Work Together
          </h3>
          <p className='text-gray-300 text-sm sm:text-base mt-3 text-center sm:text-left'>
            Available for full-time opportunities, freelance projects, and collaborations. 
            Let's build something amazing together! 🚀
          </p>
          
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-8 sm:mt-12 flex flex-col gap-4 sm:gap-6'
          >
            <div className='flex flex-col'>
              <label className='text-white font-medium text-sm sm:text-base mb-2'>Name</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={form.name}
                placeholder="Enter your name"
                className='bg-gray-800/50 py-3 sm:py-4 px-4 sm:px-6 placeholder:text-gray-400
                text-white text-sm sm:text-base rounded-lg border border-gray-600 focus:border-purple-500
                focus:outline-none font-medium transition-all duration-300'
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-white font-medium text-sm sm:text-base mb-2'>
                Email <span className='text-red-400'>*</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={form.email}
                placeholder="Enter your email"
                required
                className='bg-gray-800/50 py-3 sm:py-4 px-4 sm:px-6 placeholder:text-gray-400
                text-white text-sm sm:text-base rounded-lg border border-gray-600 focus:border-purple-500
                focus:outline-none font-medium transition-all duration-300'
              />
            </div>

            <div className='flex flex-col'>
              <label className='text-white font-medium text-sm sm:text-base mb-2'>
                Message / Feedback <span className='text-red-400'>*</span>
              </label>
              <textarea
                rows="5"
                name="message"
                onChange={handleChange}
                value={form.message}
                placeholder="Enter your message"
                required
                className='bg-gray-800/50 py-3 sm:py-4 px-4 sm:px-6 placeholder:text-gray-400
                text-white text-sm sm:text-base rounded-lg border border-gray-600 focus:border-purple-500
                focus:outline-none font-medium resize-none transition-all duration-300'
              />
            </div>
            
            <button
              type="submit"
              disabled={loading}
              className='py-3 sm:py-4 px-6 sm:px-8 text-white text-sm sm:text-base
              bg-gradient-to-r from-purple-600 to-pink-600
              hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700
              rounded-lg font-bold shadow-lg hover:shadow-purple-500/25 
              transition-all duration-300 hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed'
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
          className='flex-1 w-full max-w-md mt-8 lg:mt-0'
        >
          <div className='bg-gradient-to-br from-gray-900/50 to-gray-800/50 
          backdrop-blur-md p-6 sm:p-8 rounded-xl sm:rounded-2xl border border-gray-700/50'>
            <h4 className='text-white text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center sm:text-left'>
              Let's Connect!
            </h4>
            <div className='space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base'>
              <p className='leading-relaxed text-center sm:text-left'>
                I'm always open to discussing new opportunities, collaborating on exciting projects, 
                or just having a chat about technology and innovation.
              </p>
              <p className='leading-relaxed text-center sm:text-left'>
                Feel free to reach out if you have any questions, want to collaborate, 
                or just want to say hello!
              </p>
            </div>
            
            {/* Social Links */}
            <div className='mt-6 sm:mt-8'>
              <h5 className='text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4 text-center sm:text-left'>
                Find me on
              </h5>
              <div className='flex gap-3 sm:gap-4 justify-center sm:justify-start'>
                <a 
                  href="https://github.com/mishikaa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='w-11 h-11 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center
                  hover:bg-gray-700 transition-all duration-300 hover:scale-110 relative z-10 pointer-events-auto'
                >
                  <img className='w-7 h-7 sm:w-8 sm:h-8' src={githubLogo} alt="GitHub" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mishika16" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='w-11 h-11 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center
                  hover:bg-gray-700 transition-all duration-300 hover:scale-110 relative z-10 pointer-events-auto'
                >
                  <img className='w-7 h-7 sm:w-8 sm:h-8' src={linkedin} alt="LinkedIn" />
                </a>
                <a 
                  href="https://www.instagram.com/_._mishika_" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className='w-11 h-11 sm:w-12 sm:h-12 bg-gray-800 rounded-full flex items-center justify-center
                  hover:bg-gray-700 transition-all duration-300 hover:scale-110 relative z-10 pointer-events-auto'
                >
                  <img className='w-7 h-7 sm:w-8 sm:h-8' src={instagram} alt="Instagram" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")