import React from 'react'

const Services = () => {
  return (
    <section className='my-16' id='services'>
        <div className="grid place-items-center">
            <div className="px-4 ">
                <h2 className='uppercase font-bold text-blue-600 text-2xl'>Services</h2>
            </div>
            <hr className="w-48 h-1  bg-blue-500" />
            
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-4/5 mx-auto pb-12 pt-8 ">
            <div className="gradient bg-white rounded-lg shadow-md p-4 mb-4 md:mb-0 space-x-2 w-full md:pr-4 md:flex md:items-center md:mr-4 " data-aos="zoom-in">
                <div className="md:w-1/3 md:pr-4">
                    <p className="text-white text-md mb-2 md:mb-0">Every Fri</p>
                </div>
                <div className="md:w-2/3">
                    <h2 className="font-medium mb-2 text-white">PUSH Prayers</h2>
                    <p className="text-gray-300 text-sm mb-2 md:ml-2">11:00 PM - 2:00 AM</p>
                </div>
            </div>
            <div className="gradient bg-white rounded-lg shadow-md space-x-2 p-4 md:mb-0 w-full md:flex md:items-center" data-aos="zoom-in">
                <div className="md:w-1/3 md:pr-4">
                    <p className="text-white mb-2 md:mb-0">Every Sun</p>
                </div>
                <div className="md:w-2/3">
                    <h2 className=" font-medium mb-2 text-white">Sunday Service</h2>
                    <p className="text-gray-300 text-sm mb-2 md:ml-2">8:00 AM - 12:00 PM</p>
                </div>
            </div>
            <div className="gradient bg-white rounded-lg shadow-md p-4 space-x-2 md:mb-0 w-full md:flex md:items-center" data-aos="zoom-in">
                <div className="md:w-1/3 md:pr-4">
                    <p className="text-white mb-2 md:mb-0">Every Tues</p>
                </div>
                <div className="md:w-2/3">
                    <h2 className="font-medium mb-2 text-white">Digging Deep</h2>
                    <p className="text-gray-300 text-sm mb-2 md:ml-2">5:00 PM - 6:00 PM</p>
                </div>
            </div>
            <div className="gradient bg-white rounded-lg shadow-md p-4 space-x-2 md:mb-0 w-full md:flex md:items-center" data-aos="zoom-in">
                <div className="md:w-1/3 md:pr-4">
                    <p className="text-white mb-2 md:mb-0">Every Thurs</p>
                </div>
                <div className="md:w-2/3">
                    <h2 className=" font-medium mb-2 text-white">Faith Clinic</h2>
                    <p className="text-gray-300 text-sm mb-2 md:ml-2">5:00 PM - 6:00 PM</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services