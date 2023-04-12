import React from 'react';
import { Link } from 'react-router-dom';
import "./Landing.css"

const LandingPage = () => {
  return (
    <section className='h-screen landing-page flex flex-col justify-center align-center'>
      <div className="grid place-items-center landing w-4/6 mx-auto" data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h1 className="text-center text-white font-bold" >EXPERIENCE GOD'S EVERLASTING LOVE</h1>
        <div className=''>
        <p className='text-center text-white font-bold  text-2xl'>Receive the unceasing wave after wave, after wave, after wave of Grace God has for you.</p>
        <div className='grid place-items-center'>
          <Link to='/contact' className=' bg-red-500 p-2 rounded text-white font-semibold mt-6 transition-all hover:bg-red-600'>CONTACT US</Link>
        </div>
      </div>
    </div>
    </section>
                
  );
};

export default LandingPage;
