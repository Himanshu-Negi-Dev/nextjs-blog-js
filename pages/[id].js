import axios from "axios";
import React from "react";
import PostDetails from "../components/PostComponents/PostDetails";

export const getStaticPaths = async () => {
  const res = await axios.get("http://localhost:8000/posts");
  const posts = res.data;

  const paths = posts.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await axios.get(`http://localhost:8000/posts/${id}`);
  const post = res.data;

  return {
    props: {
      post: post,
    },
  };
};

const PostDetailsPage = ({ post }) => {
  return (
    <div>
      <PostDetails post={post} />
    </div>
  );
};

export default PostDetailsPage;
