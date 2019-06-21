import {
  newPostApi,
  getAllPosts,
  votePostApi,
  putPostApi,
  deletePostApi,
  getAllPostsPerCategoryApi,
  getOnePostIdApi
} from './../utils/ApiCalls'
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'
export const RECEIVE_ALL_POSTS_CATEGORY = 'RECEIVE_ALL_POSTS_CATEGORY'
export const RECEIVE_ONE_POST = 'RECEIVE_ONE_POST'
export const VOTE_POST = 'VOTE_POST'

export function receiveAllPosts(posts) {
  return {
    type: RECEIVE_ALL_POSTS,
    posts
  }
}

export function receiveAllPostsPerCategory(category) {
  return dispatch => {
    return getAllPostsPerCategoryApi(category)
      .then(posts => {
        return dispatch({
          type: RECEIVE_ALL_POSTS_CATEGORY,
          posts
        })
      })
      .catch(err => console.warn(err))
  }
}

export function newPost(post) {
  return dispatch => {
    return newPostApi(post)
      .then(() => {
        return getAllPosts()
          .then(posts => dispatch({
            type: RECEIVE_ALL_POSTS,
            posts
          }))
      })
      .catch(err => console.warn(err))
  }
}

// export function filterPostsByCaterogy(category) {
//   return dispatch => {
//     return getAllPosts()
//       .then(posts => {
//         let postsList = []
//         if (category !== 'all') {
//           postsList = posts.filter(post => post.category === category)
//         } else {
//           postsList = posts
//         }
//         return dispatch({
//           type: RECEIVE_ALL_POSTS,
//           posts: postsList
//         })
//       })
//   }
// }

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

export function updatePost(post) {
  return dispatch => {
    return putPostApi(post)
      .then(() => {
        return getAllPosts()
          .then(posts => dispatch({
            type: RECEIVE_ALL_POSTS,
            posts
          }))
      })
  }
}

export function deletePostId(id) {
  return dispatch => {
    return deletePostApi(id)
      .then(() => {
        return getAllPosts()
          .then(posts => dispatch({
            type: RECEIVE_ALL_POSTS,
            posts
          }))
      })
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