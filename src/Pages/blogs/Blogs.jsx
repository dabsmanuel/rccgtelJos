import UseFetch from "../../hooks/UseFetch";
import { Link } from "react-router-dom";

const Blogs = () => {
    const {loading, error, data } = UseFetch('http://localhost:1337/api/rccg-tel-blogs?populate=*')

    if (loading) return <p>Loading....</p>
    if (error) return <p>Error!!!!! :(</p>

    console.log(data)

  return (
    <section className="my-32">
        <div>
            <h1 className="auto pt-1 pl-4 pr-5 font-bold text-2xl text-blue-800 text-center">Welcome to RCCG - TEL Blog</h1>

            <div className="md:grid-cols-3 grid">
                {
                data.map(rccgTelBlog => {
                    return(
                        <div key={rccgTelBlog.id} className="blog-card bg-white my-4 mr-12 ml-12 auto pb-12 shadow-lg border rounded">
                            <div className="rating">
                                <img src={`http://localhost:1337${rccgTelBlog.attributes.photo.data[0].attributes.url}`} alt="church" />
                            </div>
                            <h2 className="text-xl font-semibold p-2">{rccgTelBlog.attributes.title}</h2>
                            <p className="pb-4 semibold p-2">{rccgTelBlog.attributes.content.substring(0, 50)}....</p>
                            <Link to={`/details/${rccgTelBlog.id}`} className="underline text-slate-700 semibold p-2">Read More</Link>
                        </div>
                    ) 
            })}
            </div>
            
        </div>
        
    </section>
  )
}

export default Blogs