import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts';

function PostList() {

  const style = {
    fontSize:   '15px'
  };

  return (
    <div id="" style={style}>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;
