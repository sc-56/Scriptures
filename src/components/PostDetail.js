import React from 'react';
import { useParams } from 'react-router-dom';
import posts from '../data/posts';

function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <p>Post not found.</p>;

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetail;
