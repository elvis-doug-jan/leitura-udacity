import { RECEIVE_ALL_POSTS } from './../actions/posts'
import axios from 'axios'

export default async function posts(state = null, action) {
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return {
        ...state
      }
      default:
      return state
    }
}