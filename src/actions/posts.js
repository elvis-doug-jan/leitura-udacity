import { newPostApi, getAllPosts } from './../utils/ApiCalls'
import { dispatch } from 'rxjs/internal/observable/pairs';
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

export function filterPostsByCaterogy (category) {
  return dispatch => {
    return getAllPosts()
      .then(posts => {
        let filteredPosts = posts.filter(post => post.category === category)
        return dispatch({
          type: RECEIVE_ALL_POSTS,
          posts: filteredPosts
        })
      })
  }
}
