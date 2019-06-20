import { RECEIVE_ALL_POSTS, RECEIVE_ALL_POSTS_CATEGORY } from './../actions/posts'

const initialState = [
  {
    author: "",
    body: "",
    category: "",
    commentCount: 2,
    deleted: false,
    id: "",
    timestamp: 0,
    title: "",
    voteScore: 0
  }
]

export default function posts(state = initialState, action) {
  console.warn('REDUCER POST', action.type)
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts
    case RECEIVE_ALL_POSTS_CATEGORY:
      return action.posts
    default:
      return state
  }
}