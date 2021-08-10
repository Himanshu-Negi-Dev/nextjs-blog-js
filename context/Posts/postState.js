import { useReducer } from "react";
import PostContext from "./post-context";
import todoReducer from "./postReducer";
import { ADD_POST, GET_POSTS, GET_SINGLE_POST } from "./post-actions";
import axios from "axios";

const TodoState = ({ children }) => {
  const iState = {
    allPosts: [],
    singlePost: null,
  };
  const [state, dispatch] = useReducer(todoReducer, iState);

  //get all posts
  //   const getPosts = async () => {
  //     try {
  //       const posts = await axios.get("http://localhost:8000/posts");
  //       dispatch({
  //         type: GET_POSTS,
  //         payload: posts,
  //       });
  //       //   return posts;
  //     } catch (error) {
  //       console.log(error);
  //       //   return error;
  //     }
  //   };

  const addPost = async (formData) => {
    try {
      const post = await axios.post("http://localhost:8000/posts", formData);
      dispatch({
        type: ADD_POST,
        payload: post.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getPostDetails = async (id) => {
    try {
      const post = await axios.get(`http://localhost:8000/post/${id}`);
      console.log(post.data);
      dispatch({
        type: GET_SINGLE_POST,
        payload: post.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PostContext.Provider
      value={{
        posts: state.allPosts,
        post: state.singlePost,
        addPost,
        getPostDetails,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export default TodoState;
