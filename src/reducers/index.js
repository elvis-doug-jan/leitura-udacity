import { combineReducers } from 'redux'
import categories from './categories'
import posts from './posts'
import comments from './comments'
import user from './users'

export default combineReducers({
  posts,
  categories,
  user,
  comments
})