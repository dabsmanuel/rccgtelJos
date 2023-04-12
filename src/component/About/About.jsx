import React from 'react'
import './about.css'
import image11 from "../../assets/bible.avif"
import {Link} from "react-router-dom"

const About = () => {
  return (
    <section className='container selection:h-screen w-11/12 m-auto about mb-12'>
      <h1 className="text-2xl lg:text-4xl text-center pb-6 font-bold text-blue-800">
        WELCOME TO RCCG - THE EVERLASTING LOVE PARISH
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div data-aos="zoom-in">
          <img src={image11} alt="bible" className='rounded' />
        </div>
        <div data-aos="zoom-in">
          <p className='lg:text-xl pb-4 font-semibold'>Welcome to RCCG - The Everlasting Love Parish, where we believe in preaching, showing the love of God, praying, and treating every church member as a family. We are a community of believers who strive to embody the love of Christ in all that we do, and our motto reflects our commitment to that ideal: <span className='text-blue-700'>"We love you and there is nothing you can do about it"</span>.

          We are dedicated to creating a welcoming and inclusive environment where everyone is embraced as part of the family. We believe that every person is created in the image of God and deserves to be treated with dignity, respect, and love. Whether you are a long-time member or a first-time visitor, we want you to feel at home and know that you are valued and appreciated.</p>

          <Link to='/about' className='bg-blue-800 p-2 rounded text-white font-semibold transition-all hover:bg-blue-900'>Read More</Link>
        </div>
      </div>
    </section>
  )
}

export default About