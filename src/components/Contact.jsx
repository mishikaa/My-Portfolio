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
    <>
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-2 justify-center overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.25, 1)}
        className='flex-col flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact &nbsp;Me</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-5'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium'>Name</span>
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={form.name}
            className='bg-tertiary mb-4 py-4 px-6 placeholder:text-secondary
            text-white rounded-lg border-none outlined-none font-medium'
          />

          <label className='flex flex-col'>
            <span className='text-white font-medium'>Email <span className='text-rose-800'>*</span></span>
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={form.email}
            required
            className='bg-tertiary mb-4 py-4 px-6 placeholder:text-secondary
            text-white rounded-lg border-none outlined-none font-medium'
          />

          <label className='flex flex-col'>
            <span className='text-white font-medium'>Message / Feedback <span className='text-rose-800'>*</span></span>
          </label>
          <textarea
            rows="8"
            name="message"
            onChange={handleChange}
            value={form.message}
            required
            className='bg-tertiary mb-4 py-4 px-6 placeholder:text-secondary
            text-white rounded-lg border-none outlined-none font-medium resize-none'
          />
          <button
            type="submit"
            className='py-3 px-8 text-white bg-tertiary outline-none w-fit
            font-bold shadow-md shadow-primary'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

    </div>
    <footer className='flex justify-center gap-5 mt-4'>
      <a href="https://github.com/mishikaa"><img className='w-14' src={githubLogo} alt="githubLogo" /></a>
      <a href="https://www.linkedin.com/in/mishika16"><img className='w-14' src={linkedin} alt="linkedin" /></a>
      <a href="https://www.instagram.com/_._mishika_"><img className='w-14' src={instagram} alt="instagram" /></a>
    </footer>
    </>
  )
}

export default SectionWrapper(Contact, "contact")