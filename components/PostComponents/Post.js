import React from "react";
import styles from "./Posts.module.css";
const Post = ({ post }) => {
  return (
    <>
      <div className={styles.post_container}>
        <h2>{post.ptitle}</h2>
      </div>
    </>
  );
};

export default Post;
