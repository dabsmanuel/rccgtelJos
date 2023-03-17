import { useParams } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import {getBlogPostBySlug} from "./contentful"

function BlogPost() {
    const {slug} = useParams();
    const [blogPost, setBlogPost] = useState(null);

    useEffect(() =>{
        const fetchBlogPost = async () =>{
            const post = await getBlogPostBySlug(slug);
            setBlogPost(post);
        };
        fetchBlogPost();
    }, [slug]);

    if(!blogPost){
        return <div>Loading....</div>
    }


  return(
    <div>
        <h2>{blogPost.fields.title}</h2>
        <img src={blogPost.fields.image.fields.file.url}  alt={blogPost.fields.image.fields.title} />
        <div dangerouslySetInnerHTML={{_html: blogPost.content}}/>
        {/* <p>{post.fields.content}</p> */}
    </div>
  );
};

export default BlogPost
