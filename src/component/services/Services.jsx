import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <section>
        <div className="inline-flex items-center justify-center w-full mt-16">
            <hr className="w-64 h-1 my-8 bg-blue-500 border-0 rounded dark:bg-blue-700" />
            <div className="absolute px-4 -translate-x-1/2 bg-white left-1/2">
                <h2 className='uppercase font-bold text-red-600 text-2xl'>Services</h2>
            </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-4/5 mx-auto pb-12 pt-8">
            <div className="bg-white rounded-lg shadow-md p-4 mb-4 md:mb-0 space-x-2 w-full md:pr-4 md:flex md:items-center md:mr-4">
                <div className="md:w-1/3 md:pr-4">
                    <p className="text-red-500 text-md mb-2 md:mb-0">Every Friday</p>
                </div>
                <div className="md:w-2/3">
                    <h2 className=" font-medium mb-2">PUSH Prayers</h2>
                    <p className="text-gray-500 text-sm mb-2 md:ml-2">11:00 PM - 2:00 AM</p>
                    <Link to="/PUSH-Prayer" className="text-red-500 font-medium">Event Details</Link>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md space-x-2 p-4 md:mb-0 w-full md:flex md:items-center">
                <div className="md:w-1/3 md:pr-4">
                    <p className="text-red-500 mb-2 md:mb-0">Every Sunday</p>
                </div>
                <div className="md:w-2/3">
                    <h2 className=" font-medium mb-2">Sunday Service</h2>
                    <p className="text-gray-500 text-sm mb-2 md:ml-2">8:00 AM - 12:00 PM</p>
                    <Link to="/sunday-service" className="text-red-500 font-medium">Event Details</Link>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 space-x-2 md:mb-0 w-full md:flex md:items-center">
                <div className="md:w-1/3 md:pr-4">
                    <p className="text-red-500 mb-2 md:mb-0">Every Tuesday</p>
                </div>
                <div className="md:w-2/3">
                    <h2 className="  font-medium mb-2">Digging Deep</h2>
                    <p className="text-gray-500 text-sm mb-2 md:ml-2">5:00 PM - 6:00 PM</p>
                    <Link to="/sunday-service" className="text-red-500 font-medium">Event Details</Link>
                </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 space-x-2 md:mb-0 w-full md:flex md:items-center">
                <div className="md:w-1/3 md:pr-4">
                    <p className="text-red-500 mb-2 md:mb-0">Every Thursday</p>
                </div>
                <div className="md:w-2/3">
                    <h2 className=" font-medium mb-2">Faith Clinic</h2>
                    <p className="text-gray-500 text-sm mb-2 md:ml-2">5:00 PM - 6:00 PM</p>
                    <Link to="/sunday-service" className="text-red-500 font-medium">Event Details</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services