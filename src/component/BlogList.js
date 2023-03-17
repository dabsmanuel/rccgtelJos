import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ posts }) => {
  return (
    <div>
        <ul>
            {posts.map((post) => (
                <li key={post.sys.id}>
                    <Link to={`/blog/${post.fields.slug}`}>
                        <img src={post.fields.image.fields.file.url} alt={post.fields.image.fields.title} />
                        <h3>{post.fields.content}</h3>
                    </Link>   
                </li>
            ))}
        </ul>
      
    </div>
  );
};

export default BlogList;
