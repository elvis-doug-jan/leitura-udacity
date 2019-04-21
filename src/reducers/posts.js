import { RECEIVE_ALL_POSTS } from './../actions/posts'

export default async function posts(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
    console.log('////////////////////',  {
      ...state,
      ...action.posts
    })
      return {
        ...state,
        ...action.posts
      }
    default:
      return state
  }
}