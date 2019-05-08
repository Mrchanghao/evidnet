import {FETCH_POST, DELETE_POST, FETCH_POSTS, CREATE_POST} from './types';

// 글 목록 보기 
export const getPosts = () => {
  return {
    type: FETCH_POSTS
  }
}
export const fetchPost = (id) => {
  
  return {
    type: FETCH_POST,
    id
  }
}

export const createPost = (values) => {
  return {
    type: CREATE_POST,
    values
  }
}


// 글 삭제

export const deletePost = (id) => {

  return {
    type: DELETE_POST,
    id
  }
}