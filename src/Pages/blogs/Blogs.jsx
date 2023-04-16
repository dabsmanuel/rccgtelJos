import { useState } from 'react';
import UseFetch from '../../hooks/UseFetch';
import { Link } from 'react-router-dom';
import Loader from '../../component/loader/Loader';
import ReactPaginate from 'react-paginate';
import "./blogs.css"

const Blogs = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const blogsPerPage = 4;

  const { loading, error, data } = UseFetch(
    'http://localhost:1337/api/rccg-tel-blogs?populate=*'
  );

  if (loading) {
    return <Loader />;
  }
  if (error) return <p>Error!!!!! :(</p>;
  if (data < 1){
    return(
        <h2>There are no current posts at the moment, Kindly check back Later</h2>
        
    )
  }

  console.log(data);

  const pageCount = Math.ceil(data.length / blogsPerPage);
  const offset = pageNumber * blogsPerPage;
  const currentBlogs = data.slice(offset, offset + blogsPerPage);

  const handlePageClick = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <section className="my-32 w-4/5 mx-auto">
      <div>
        <h1 className="auto pt-1 pl-4 pr-5 font-bold text-2xl text-blue-800 text-center pb-12">
          Welcome to RCCG - TEL Blog
        </h1>

        <div className="w-4/5">
          {currentBlogs.map((rccgTelBlog) => {
            return (
              <div
                key={rccgTelBlog.id}
                className="blog-card hover:shadow-lg"
              >
                <div className="blog-image">
                  <img
                    src={`http://localhost:1337${rccgTelBlog.attributes.photo.data[0].attributes.url}`}
                    alt="church"
                  />
                </div>

                <div className='blog-content'>
                  <h2 className="blog-title">
                    {rccgTelBlog.attributes.title}
                  </h2>
                  <p className="pb-4 semibold p-2">
                    {rccgTelBlog.attributes.content.substring(0, 50)}....
                  </p>
                  <Link
                    to={`/details/${rccgTelBlog.id}`}
                    className="underline text-slate-500 semibold p-2 hover:text-slate-800"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <ReactPaginate
          previousLabel={'< previous'}
          nextLabel={'next >'}
          breakLabel={'...'}
          pageCount={pageCount}
          pageRangeDisplayed={4}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
          renderOnZeroPageCount={null}
        />
      </div>
    </section>
  );
};

export default Blogs;
