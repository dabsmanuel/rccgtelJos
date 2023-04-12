import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./form.css"
import { Address } from './footerData'
import { socialMedia } from './footerData'
import { quickLinks } from './footerData'


const Footer = () => {

   const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())


    useEffect(() => {
        getYear();
    }, [])
  return (
    <section>
      <footer className='text-white w-full mx-auto'>
        <div className="grid grid-cols-1 md:grid-cols-2 py-8 m-auto lg:w-1/2">
          <div className="container p-8">
              <h1 className='text-2xl text-red-500 font-bold'>About Us</h1>
              <p>For the word of God is living and active. Sharper than any double-edged sword, it penetrates even to dividing soul and spirit, joints and marrow; it judges the thoughts and attitudes.</p>

            {
              Address.map(({id, title, street, landmark, phone, email}) =>{
                return(
                  <div className="container pt-2" key={id}>
                    <p className='font-bold'><span className='text-red-500 md:text-xl'>telephone: </span> {phone}</p>
                    <p className='font-bold'><span className='text-red-500 md:text-xl'>Email:  </span>{email}</p>
                    <p className='font-bold'><span className='text-red-500 md:text-xl'> Address:</span> {title},{street}, {landmark} </p>
                  </div>
                )
              })
            }

            <div className="social flex flex-row">
                {
                  socialMedia.map(({id, icon, link})=>{
                    return(
                      <div className="text-2xl pr-4 pt-2 hover:text-red-500 hover:-translate-y-2 transition-all" key={id}>
                        <a href={link} className='a '>{icon}</a>
                      </div>
                    )
                  })
                }
            </div>
 
          </div>
          
          <div className="quicklinks pt-8 w-9/12 mx-auto">
              <h1 className="text-2xl text-red-500 font-bold pb-2">Quick Links</h1>
              {
                quickLinks.map(({id, title, link})=>{
                  return(
                    <div className='' key={id}>
                      <div className='flex flex-col' >
                        <Link to={link} className='pb-4 underline'>{title}</Link>
                      </div>
                    </div>
                  )
                })
              }
          </div>
        </div>
        <div className="footer_copy text-center py-4 bg-indigo-900">
        <p>&copy; RCCG - TEL - {date}</p>
      </div>
      </footer>
    </section> 
  )
}

export default Footer