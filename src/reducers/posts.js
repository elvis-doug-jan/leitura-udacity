import { RECEIVE_ALL_POSTS, NEW_POST } from './../actions/posts'

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
  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts
    default:
      return state
  }
}