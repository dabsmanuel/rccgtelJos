import React from 'react'
import UseFetch from '../../hooks/UseFetch'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom";


const Details = () => {
    const {id} = useParams();
    const {loading, error, data } = UseFetch(`http://localhost:1337/api/rccg-tel-blogs/${id}?populate=*`)


    if (loading) return <p>Loading....</p>
    if (error) return <p>Error!!!!! :(</p>

    console.log(data)


  return (
    <>
        <div className='mt-32 auto pt-1 pl-10 pr-10 pb-20'>
            <h2 className='text-center text-2xl lg:text-4xl pb-4'>{data.attributes.title}</h2>
            <div className='lg:flex justify-center space-x-3'>
                <div>
                    <img src={`http://localhost:1337${data.attributes.photo.data[0].attributes.url}`} alt="church"/>
                </div>
                <div>
                    <p>{data.attributes.content}</p>
                    <small className="underline semibold p-2">Published: {data.attributes.date}</small>
                    <Link to='/blogs' className="underline text-slate-700 semibold p-2 hover:text-slate-900 flex-col flex">Back</Link>
                </div>
            </div>
        </div>
    </>
    
  )
}

export default Details