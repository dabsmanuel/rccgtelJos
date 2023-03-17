import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tbk0cmm', 'template_rbxi931', form.current, '-G2QMmjY4LjhWX1sZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className='mt-12 py-20 w-full px-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg'>
      <form className='container' ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Enter Name' className='border-blue-600 block w-full mt-1 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' required />
        <input type="email" name="email" placeholder='enter email' className='border-blue-600 block w-full mt-1 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' required />
        <input type="phone number" name="phone" placeholder='enter phone' className='border-blue-600 block w-full mt-1 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50' required />
        <textarea name="message" placeholder='Enter your message' className='border-blue-600' />
        <div className="submit">
        <input type="submit" value="Send" className='text-white '  required />
        </div>
      </form>
    </section>
  )
}

export default Contact