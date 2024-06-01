import {useState, useRef} from 'react'
import {EarthCanvas} from './canvas'
import emailjs from '@emailjs/browser'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {slideIn} from '../utils/motion'
import {SectionWrapper} from '../hoc'

const Contact = () => {
  const formRef= useRef();
  const [form, setForm]= useState({
    name:'',
    email:'',
    message:'',
  })
  const [loading, setLoading]= useState(false);
  const handleChange= (e)=>{
    const {name, value}= e.target;
    setForm({...form, [name]:value})
  }
  const handleSubmit= (e)=>{
    e.preventDefault();

    setLoading(true);
    emailjs.send(
      'service_vf8j9vb',
      'template_r837a6n',
      {
        from_name:form.name,
        to_name:'Vinay',
        from_email:form.email,
        to_email:'vinaygajula19@outlook.com',
        message:form.message,
      },
      'B84y4sQ7L5qpzix3n')
      .then(()=>{
        setLoading(false);
        alert('Thank you!! i will get back to you as soon as possible')
        setForm({
          name:'',
          email:'',
          message:'',
        })
      })
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] rounded-2xl p-8 bg-black-100'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText
        }>Contact.</h3>

        <form 
          ref={formRef} 
          onSubmit={handleSubmit}
          className='flex flex-col mt-12 gap-8'
        >
          <label className='mt-4 flex flex-col'>
            <span className='text-white font-medium mb-4'>Your name</span>
            <input type="text"
              name="name"
              placeholder="What's your name?"
              value={form.name}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary font-medium outlined-none text-white rounded-lg border-none'
            />
          </label>
          <label className='mt-4 flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input type="email"
              name="email"
              placeholder="What's your email?"
              value={form.email}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary font-medium outlined-none text-white rounded-lg border-none'
            />
          </label>
          <label className='mt-4 flex flex-col'>
            <span className='text-white font-medium mb-4'>Your message</span>
            <textarea
              rows={7} 
              name="message"
              placeholder="What do you want to say?"
              value={form.message}
              onChange={handleChange}
              className='bg-tertiary py-4 px-6 placeholder:text-secondary font-medium outlined-none text-white rounded-lg border-none'
            />
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)
      }
        className='xl:flex-[1] xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
      
    </div>
  )
}

export default SectionWrapper(Contact, "contact")