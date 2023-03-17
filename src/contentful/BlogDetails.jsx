// BlogDetails.js
import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_BLOG_DETAILS = gql`
  query GetBlogDetails($id: ID!) {
    blogPost(id: $id) {
      id
      title
      content
      author
      date
    }
  }
`;

// https://graphql.contentful.com/content/v1/spaces/[YOUR_SPACE_ID]/explore?access_token=[YOUR_ACCESS_TOKEN]

function BlogDetails({ id }) {
  const { loading, error, data } = useQuery(GET_BLOG_DETAILS, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <h2>{data.blogPost.title}</h2>
      <p>{data.blogPost.content}</p>
      <p>
        Author: {data.blogPost.author} | Date: {data.blogPost.date}
      </p>
    </div>
  );
}

function BlogList() {
  const [selectedPostId, setSelectedPostId] = useState(null);

  return (
    <>
      <BlogList />
      {selectedPostId && <BlogDetails id={selectedPostId} />}
    </>
  );
}

export default BlogList;
