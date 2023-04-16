import {useEffect, useState} from 'react'

const UseFetch = (url) => {
    const [data, setdata] = useState(null)
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(true); 

    useEffect(() =>{
        const fetchData = async () => {
            setloading(true)

            try {
                const res = await fetch(url)
                const json = await res.json()
                const {data} = json;
                console.log(data)
                setdata(data)
                setloading(false)
            } catch (error) {
                seterror(error)
                setloading(false)
            }
        }

        fetchData()
    }, [url])

    return {loading, error, data}
}

export default UseFetch;