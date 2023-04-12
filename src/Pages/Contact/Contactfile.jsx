import React from 'react'
import contactData from "./contactData"
import './contact.css'

const contactfile = () => {
  return (
    <main className='lg:flex lg:space-x-4 mb-16 w-full'>
        {
            contactData.map(({id, icon, title, content}) =>{
                return(
                    <div className='contact-container text-white text-center p-6 rounded-2xl grid place-items-center mb-3' key={id} data-aos="zoom-in">
                        <i className='text-3xl pb-2'>{icon}</i>
                        <h2 className='font-bold pb-2'>{title}</h2>
                        <p className='text-sm'>{content}</p>
                    </div>
                )
            })
        }
    </main>
  )
}

export default contactfile