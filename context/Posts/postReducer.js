import { GET_POSTS, ADD_POST, GET_SINGLE_POST, DELETE_POST } from "./post-actions";

const todoReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_POST:
      return {
        ...state,
        allPosts: [...state.allPosts, payload],
      };

    case GET_SINGLE_POST:
      return {
        ...state,
        singlePost: payload,
      };

    default:
      return state;
  }
};

export default todoReducer;
