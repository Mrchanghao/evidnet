import { FETCH_POSTS, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL, 
  FETCH_POST, FETCH_POST_SUCCESS, FETCH_POST_FAIL
  , CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_FAIL } from "../actions/types";


export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        loading: true
      };
    case FETCH_POSTS_SUCCESS: 
      return {
        ...state,
        loading: false,
        posts: action.posts
      };
    case FETCH_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case FETCH_POST: 
      return {
        ...state,
        loading: true 
      };
    case FETCH_POST_SUCCESS:
      const post = action.post;
      return {
        ...state,
        loading: false,
        post: post 
      }
    case FETCH_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    case CREATE_POST: 
      return {
        ...state,
        loading: true
      };
    case CREATE_POST_SUCCESS:
    const newPost = action.values;
      return {
        ...state,
        loading: false,
        post: newPost,

      };
    case CREATE_POST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state;
  }
}