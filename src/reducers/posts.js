import {
  RECEIVE_ALL_POSTS,
  RECEIVE_ALL_POSTS_CATEGORY,
  RECEIVE_ONE_POST,
  VOTE_POST,
  CREATE_NEW_POST
} from './../actions/posts'

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

let storePost = [
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

let postsPerCategory = [
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
      storePost = action.posts
      return storePost
    case RECEIVE_ALL_POSTS_CATEGORY:
      // console.log('CATEGORY', action.category)
      action.category === 'all'
        ? postsPerCategory = storePost
        : postsPerCategory = storePost.filter(post => post.category === action.category)
      return postsPerCategory
      // storePost = action.posts
      // console.warn('STORE POSTS', storePost)
      // return action.posts.
    case RECEIVE_ONE_POST:
      return action.post
    case VOTE_POST:
      // console.log('VOTE', storePost)
      return state.map(post => post.id === action.post.id ? action.post : post)
    case CREATE_NEW_POST:
      // console.log('>>>>>>>>>>>', state.push(action.post))
      // console.log('***********', state.map(post => post))
      storePost.push(action.post)
      // console.error('STORE POSTS', storePost)
      return storePost
    // return action.post
    default:
      return state
  }
}