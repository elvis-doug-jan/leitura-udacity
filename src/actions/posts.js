import {
  newPostApi,
  getAllPosts,
  votePostApi,
  putPostApi,
  deletePostApi,
  getOnePostIdApi,
  getAllPostsPerCategoryApi
} from './../utils/ApiCalls'

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'
export const RECEIVE_ALL_POSTS_CATEGORY = 'RECEIVE_ALL_POSTS_CATEGORY'
export const RECEIVE_ONE_POST = 'RECEIVE_ONE_POST'
export const VOTE_POST = 'VOTE_POST'
export const CREATE_NEW_POST = 'CREATE_NEW_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'

export function receiveAllPosts(posts) {
  return {
    type: RECEIVE_ALL_POSTS,
    posts
  }
}

export function receiveAllPostsPerCategory(category) {
  return async dispatch => {
    return getAllPostsPerCategoryApi(category)
      .then(async postsList => {
        return dispatch({
          type: RECEIVE_ALL_POSTS_CATEGORY,
          postsList
        })
      })
  }
}

export function newPost(post) {
  return dispatch => {
    return newPostApi(post)
      .then((postCreated) => {
        return dispatch({
          type: CREATE_NEW_POST,
          post: postCreated
        })
      })
      .catch(err => console.warn(err))
  }
}

export function votePost(id, vote) {
  return dispatch => {
    return votePostApi(id, vote)
      .then((post) => {
        dispatch({
          type: VOTE_POST,
          post
        })
      })
  }
}

export function updatePost(post, category) {
  if (category === ' ' || category === undefined) category = 'all'
  return dispatch => {
    return putPostApi(post)
      .then(postUpdated =>
        // receiveAllPostsPerCategory(category)
        dispatch({
          type: UPDATE_POST,
          postUpdated,
          category
        })
      )
  }
}

export function deletePostId(id, category) {
  return dispatch => {
    return deletePostApi(id)
      .then(postDeleted =>
        getAllPosts()
          .then(posts =>
            dispatch({
              type: DELETE_POST,
              postDeleted,
              category,
              posts
            }))
      )
  }
}

export function getOnePost(id) {
  return dispatch => {
    return getOnePostIdApi(id)
      .then(post => dispatch({
        type: RECEIVE_ONE_POST,
        post
      }))
  }
}