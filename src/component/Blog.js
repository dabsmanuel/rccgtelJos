import { Link, useNavigate, useLocation } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import {getBlogPosts} from "./contentful"

function Blog() {
    const [blogPosts, setBlogPosts] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() =>{
        const fetchBlogPosts = async () =>{
            const posts = await getBlogPosts();
            setBlogPosts(posts);
        };
        fetchBlogPosts();
    }, []);

    const handleClick = (slug) =>{
        navigate(`/blog/${slug}`);
    };

    return(
        <div>
            <h2>Blog</h2>
            <ul>
                {blogPosts.map((post) =>{
                    return(
                        <li key={post.slug}>
                        <Link to={`/blog/${post.slug}`} state={{background: location}}>
                            {post.title}
                        </Link>
                        <button onClick={() => handleClick(post.slug)}>View Post</button>
                    </li>
                    )
                    
                })};
            </ul>
        </div>
    )
}

export default Blog