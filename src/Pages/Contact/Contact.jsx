import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../../component/footer/form.css"
import "./contact.css"
import contactPhoto from '../../assets/contact.jpg'
import Contactfile from './Contactfile';


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
    <section className='mt-32 lg:w-1/2 w-11/12 mx-auto '>
      <h1 className='text-white text-center text-4xl mb-16 font-bold'>Contact Us</h1>
      <Contactfile/>
      <div className='contact mb-16  overflow-hidden sm:rounded-lg'>
      <div className="grid lg:grid-cols-2">
        <div className="contain-form bg-white p-4" data-aos="fade-right">
          <h3 className="text-2xl text-white font-bold pb-2 text-center lg:text-justify">Write us</h3>
          <form className='' ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder='Name' required />
            <input type="email" name="user_email" placeholder='Email' required />
            <input type="Phone number" name="user_Phone" placeholder='Phone number' required />
            <textarea name="message" placeholder='Your message' />
            <div className="submit">
              <input type="submit" value="Send" className='text-white'  required />
            </div>
          </form>
      </div>
      <div className="contact-image" data-aos="fade-left">
        <img src={contactPhoto} alt="hands on phone" />
      </div>
      </div>
      
    </div>
    </section>
    
  )
}

export default Contact