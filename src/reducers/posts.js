import {
  RECEIVE_ALL_POSTS,
  RECEIVE_ALL_POSTS_CATEGORY,
  RECEIVE_ONE_POST,
  VOTE_POST,
  CREATE_NEW_POST,
  UPDATE_POST,
  DELETE_POST
} from './../actions/posts'

const initialState = [
  {
    author: "",
    body: "",
    category: "",
    commentCount: 0,
    deleted: false,
    id: "",
    timestamp: 0,
    title: "",
    voteScore: 0
  }
]

let storePost = [
  {
    author: "",
    body: "",
    category: "",
    commentCount: 0,
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
      storePost = action.posts
      return storePost
    case RECEIVE_ALL_POSTS_CATEGORY:
      return action.category === 'all'
        ? storePost
        : storePost.filter(post => post.category === action.category)
    case RECEIVE_ONE_POST:
      return action.post
    case VOTE_POST:
      return state.map(post => post.id === action.post.id ? action.post : post)
    case CREATE_NEW_POST:
      storePost.push(action.post)
      return storePost
    case UPDATE_POST:
      const indexPostUpdated = storePost.findIndex(post => post.id === action.postUpdated.id)
      storePost.splice(indexPostUpdated, 1, action.postUpdated)
      return storePost
    case DELETE_POST:
      const indexPostDeleted = storePost.findIndex(post => post.id === action.postDeleted.id)
      storePost.splice(indexPostDeleted, 1)
      return action.category !== 'all'
        ? storePost.filter(post => post.category === action.category)
        : action.posts
    default:
      return state
  }
}