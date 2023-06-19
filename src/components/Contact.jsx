import React, { useRef, useState } from 'react'
import { SectionWrapper } from '../higherOrderComponent';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { slideIn } from '../utils/motion';
import Earth from './canvas/Earth';
import emailjs from '@emailjs/browser';
import { errorPopup, successPopup } from './Popup';
import { ToastContainer } from 'react-toastify';

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
      
      await emailjs.send('service_1fecrps', 'template_mcr15vp', {
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
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-12 overflow-hidden'>
      <motion.div
        variants={slideIn("left", "tween", 0.25, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
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
            <span className='text-white font-medium'>Email</span>
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={form.email}
            className='bg-tertiary mb-4 py-4 px-6 placeholder:text-secondary
            text-white rounded-lg border-none outlined-none font-medium'
          />

          <label className='flex flex-col'>
            <span className='text-white font-medium'>Message / Feedback</span>
          </label>
          <textarea
            rows="8"
            name="message"
            onChange={handleChange}
            value={form.message}
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

      {/* For the 3D earth model */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:[550px] h-[350px]'
      >
        <Earth />
      </motion.div>
       <ToastContainer />
    </div>
  )
}

export default SectionWrapper(Contact, "contact")