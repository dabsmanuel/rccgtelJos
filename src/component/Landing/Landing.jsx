import React from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.min.css';
import img1 from "../../assets/worship.jpg"
import img2 from "../../assets/pray (2).jpg"
import img3 from "../../assets/bible.jpg"
 // eslint-disable-next-line
// import img4 from "../../assets/dove.jpg"


const LandingPage = () => {
  const swiperRef = React.useRef(null);

  React.useEffect(() => {
    const mySwiper = new Swiper(swiperRef.current, {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },

      effect: "fade"
    });

    return () => mySwiper.destroy();
    
  }, []);

  return (
    <div className="w-full h-full relative">
      <div className="swiper-container h-full" ref={swiperRef}>
        <div className="swiper-wrapper">
          <div className="swiper-slide relative">
            <img src={img1} alt="word" className="w-full h-screen object-cover brightness-95" />
            <div className="absolute inset-0 bg-blue-900/50"></div>
            <h1 className="text-center text-white py-4 absolute font-bold bottom-72 text-5xl w-full">EXPERIENCE GOD'S EVERLASTING LOVE</h1>
             
          </div>
          <div className="swiper-slide">
            <img src={img2} alt="the bible" className="w-full h-screen object-cover brightness-90" />
            <div className="absolute inset-0 bg-blue-900/50"></div>
            <h1 className="text-center text-white absolute py-4 bottom-72 font-bold w-full text-5xl">EXPERIENCE WAVES OF GRACE</h1>
            <div className='text-center mx-auto'>
              <p className='text-center text-white absolute py-4 bottom-62 font-bold w-full text-2xl'>Receive the unceasing wave after wave, after wave, after wave of Grace God has for you.</p>
            <div className='grid place-items-center'>
              <Link to='/join' className=' bg-red-500 p-2 rounded text-black font-semibold absolute bottom-56 '>JOIN US</Link>
            </div>
            </div>
            
          </div>
          <div className="swiper-slide">
            <img src={img3} alt="image3" className="w-full h-screen object-cover brightness-90 bg-black" />
            <div className="absolute inset-0 bg-blue-900/50"></div>
            <h1 className="text-center text-white py-4 absolute font-bold text-5xl bottom-72 w-full">WE ARE THE CHURCH ON A HILL</h1>
            <div className='grid place-items-center'>
              <Link to='/join' className=' bg-red-500 p-2 rounded text-black font-semibold absolute bottom-56 '>JOIN US</Link>
            </div>
          </div>
        </div>
        <div className="swiper-button-prev font-bold"></div>
        <div className="swiper-button-next font-bold"></div>
      </div>
    </div>
  );
};

export default LandingPage;
