import React from "react";

const PostDetails = ({ post }) => {
  return (
    <div>
      <h1>{post.ptitle}</h1>
      <p>{post.ptext}</p>
    </div>
  );
};

export default PostDetails;
