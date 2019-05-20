import { newPostApi, getAllPosts, votePostApi, putPostApi, getOnePostId } from './../utils/ApiCalls'
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'

export function receiveAllPosts(posts) {
  return {
    type: RECEIVE_ALL_POSTS,
    posts
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

export function filterPostsByCaterogy(category) {
  return dispatch => {
    return getAllPosts()
      .then(posts => {
        let postsList = []
        if (category !== 'all') {
          postsList = posts.filter(post => post.category === category)
        } else {
          postsList = posts
        }
        return dispatch({
          type: RECEIVE_ALL_POSTS,
          posts: postsList
        })
      })
  }
}


export function votePost(id, vote) {
  return dispatch => {
    return votePostApi(id, vote)
      .then(() => {
        return getAllPosts()
          .then(posts => dispatch({
            type: RECEIVE_ALL_POSTS,
            posts
          }))
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

// export function getPostId(id) {
//   return dispatch => {
//     return getOnePostId(id)
//       .then(() => )
//   }
// }