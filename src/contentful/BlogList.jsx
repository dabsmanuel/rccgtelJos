// BlogList.js
import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_BLOG_POSTS = gql`
  query GetBlogPosts {
    blogPosts {
      id
      title
      content
    }
  }
`;

function BlogList() {
  const { loading, error, data } = useQuery(GET_BLOG_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <ul>
      {data.blogPosts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button>Read More</button>
        </li>
      ))}
    </ul>
  );
}

export default BlogList;
